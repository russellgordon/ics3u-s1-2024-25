---
draft: false
draftSectionTwo: false
created: 2025-05-25T07:00:00.000-0400
createdForSectionTwo: 2025-05-25T07:00:00.000-0400
tags:
---

## Introduction

We learned how to retrieve *simple* data from a *single* remote endpoint when [[Retrieving Data from a Remote Endpoint|building the Jokes app]]:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1062985316?h=b113472f23&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Completed Joke Finder"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

Retrieving more complex data from multiple endpoints is essentially the same task, but we have to think carefully about *which* data we actually want to retrieve from a remote endpoint, and how one type of data relates to another type of data.

## Example

This is best explained with an example, so let's consider books.

A book has at least one *author*.

An author writes one or more *works*.

A work may be published in one or more *editions*.

For [example](https://openlibrary.org/dev/docs/api/search), **L. Frank Baum** is an author.

They wrote a work known as **The Wonderful Wizard of Oz**.

There were 1029 editions of this work, across many languages!

In this tutorial, we will:

1. Create a model, view model, and view that allows the user to search for and select an author.
2. Create a model, view model, and view that shows a list of works by that author, from which the user can select a work.
3. Create a model, view model, and view that shows the most relevant edition of a work, with the option to browse other editions for that same work.

Here is what the app will look like when it is complete:

`<< placeholder for showing video of completed app >>`

## Endpoints

This example depends on the [Open Library](https://openlibrary.org/) application programming interface, or, for short, their [API](https://openlibrary.org/developers/api).

> [!TIP]
> 
> Building an app that uses an API provided by a third party requires careful reading of documentation provided by that third party. In some cases where documentation is not clear, we can use a large language model to help us understand how to use the API.

## Authors

To get started, Mr. Gordon has first created an empty project named **ComplexEndpointsExample**, and then immediately changed the blue folders to grey groups, and set up the usual project structure that supports the MVVM design pattern, to separate concerns:

![[Pasted image 20250525093600.png]]

> [!TIP]
> 
> If you wish, you can [review all the source code](https://github.com/lcs-rgordon/ComplexEndpointsExample) for the application developed in this tutorial.

Careful reading of the [Open Library API documentation](https://openlibrary.org/developers/api) indicates that we can use the [Authors API](https://openlibrary.org/dev/docs/api/authors) to search for a list of authors:

![[Pasted image 20250525094551.png]]

Let's review what we see here:

> [!DISCUSSION]
> 
> 1. This is the endpoint we must query to find a list of authors that match our search string. Importantly, a search string of **J K Rowling** must be "URL encoded", which means, among other things, that spaces must be expressed using the syntax `%20`. Here is a reference for how [various characters in a string can be URL encoded](https://www.w3schools.com/tags//ref_urlencode.asp). This tutorial will build on two [existing](https://medium.com/swift2go/building-safe-url-in-swift-using-urlcomponents-and-urlqueryitem-alfian-losari-510a7b1f3c7e) [tutorials](https://matteomanferdini.com/swift-url-components/) to make managing URLs reasonably straightforward.
> 2. The response begins with a `{` and ends with a `}` which means we are receiving a [[Retrieving Data from a Remote Endpoint#JavaScript Object Notation|JSON object]]. We need to design a structure in our app's model that matches the information sent within this JSON object.
> 3. The `docs` property returns an array of matching authors. In this screenshot, there is just one matching author, but we could receive more than one (hence, the array).
> 4. The `key` information uniquely identifies a given author in the **Open Library** system.
> 5. We can obtain the author's name from the `name` property.
> 6. For more information about a given author, we need to visit another endpoint.

Let's begin working with the Open Library Authors API to set up a search feature in our app.

### Model

First we need a data structure to match the expected response.

We only need to include properties for information from the response that we care about. Any properties we omit from our data structure will be ignored when data is retrieved from the endpoint and decoded.

We can use an enumeration to rename properties sent to us by the endpoint, in case we prefer to use different names or capitalizations.

Here is what the model might look like:

![[Screenshot 2025-05-25 at 10.18.27 AM (3).png]]

Let's review this:

> [!DISCUSSION]
> 
> - `AuthorSearchResponse` is the top-level structure we are designing to decode the response that we receive from the endpoint.
> - In red: `numFound` tells us how many matches there were for our search string; we choose to store the value provided in this property within our app using a property name of `hits` instead.
> - The `docs` array in the JSON response will be decoded into a data type named `AuthorDocumentationResponse` which is defined below.
> - In green: we choose to decode the unique identifier for an author from the provided property name of `key` to a property name of `id` instead, so we can make our structure conform to the `Identifiable` protocol; this is necessary [[Identifiable Instances of a Structure|so that we can iterate over the list of returned authors]] in our app.
> - In purple: Swift style conventions are that property names should be defined in `PascalCase` and not `snake_case`, so we decode this information into properties with the appropriate capitalization pattern.

### Logging

We're probably going end up debugging some logical errors, so it's a good idea to add [[Publisher-Subscriber Messaging Pattern#Add logging|good support for logging]] to our app.

We can add this code:

```swift
import OSLog
 
extension Logger {
 
    // Using your bundle identifier is a great way to ensure a unique identifier.
    private static var subsystem = Bundle.main.bundleIdentifier!
 
    // Logs the view cycles like a view that appeared
    static let viewCycle = Logger(subsystem: subsystem, category: "viewcycle")
 
    // All logs related to tracking and analytics
    static let statistics = Logger(subsystem: subsystem, category: "statistics")
 
    // All logs related to obtaining data from remote endpoints
    static let dataRetrieval = Logger(subsystem: subsystem, category: "dataretrieval")
 
    // All logs related to user authentication
    static let authentication = Logger(subsystem: subsystem, category: "authentication")
 
}
```

... to a file named `Logger.swift` in a group named **Logging**:

![[Pasted image 20250525104138.png]]

More on how this logging code will be useful later on in this tutorial.

### View model

Here is what a view model for working with this endpoint might look like, initially:

![[Pasted image 20250525104436.png]]

Note that there is no code (yet) to actually retrieve a response from the remote endpoint. We will add that shortly.

### View

A basic view to get the search interface started might look like this:

![[Pasted image 20250525105004.png]]

In this view:

> [!DISCUSSION]
> 
> 1. A instance of the view model is created so that we can (eventually) iterate over the results received from the remote endpoint.
> 2. We write a selection statement that attempts to unwrap the optional property `currentResponse` from the view model.
> 3. When `currentResponse` was not `nil` and was successfully unwrapped we will (eventually) have an array of authors to iterate over here and show to our user.
> 4. Right now, our view model doesn't actually do anything to get results, so this shows instead. Showing a message like this is a good user experience practice, because it tells the user what they need to do to see some results.
> 5. We use the `.searchable` view modifier to provide a field into which the user can type a name to begin a search. It is bound to the `searchText` stored property, so whatever the user types in the search field will be placed into this stored property.

### Fetch results

Now we need to adjust the view model so that it has a function we can invoke when the user presses the **Return** key in the view to begin a search:

![[RocketSim_Screenshot_iPhone_16_Pro_6.3_2025-05-25_11.30.01.png|300]]

That requires the addition of a function to our view model that has a parameter (a question) and receives an argument (an answer) to carry out the search:

![[Pasted image 20250525114758.png]]

Most of the details of how that code works is described in the comments. 

Here is a high-level summary:

> [!DISCUSSION]
> 
> 1. We import the `OSLog` framework because we need this to record log messages which will help us to debug logical errors.
> 2. We define a function named `fetchResults` that has one parameter with an external name of `for` and an internal name of `providedAuthorName` of type string. This will be invoked from the view to conduct a search by author name.
> 3. We assemble a URL. The `URLComponents` type provided by Apple will do the hard work of URL-encoding information in the address of the endpoint. For example, it will convert the search string `margaret atwood` into `margaret%20atwood`.
> 4. After fetching the actual raw data from the endpoint on line 71, we convert that data into a string and print it to the debug console. This will help us to resolve logical errors.
> 5. On line 82 an instance of the `JSONDecoder` type is created to do the work of decoding the response from the endpoint into an instance of a native Swift data type. Line 86 is where we attempt to actually decode the response into an instance of `AuthorSearchResponse`, which [[Retrieving Complex Data from Remote Endpoints#Model|we defined earlier]].
> 6. If we made it here, the decoded data, placed into a local instance of `AuthorSearchResponse` named `decodedData` is in turn assigned to the stored property of this view model, `currentResponse`.
> 7. If anything went wrong with either retrieving data or decoding the data, this catch block will print results to the console for us to examine.

Next we need to make two minor adjustments to the view, so that we can use the newly defined function on the view model, and then show the results to the user:

![[Pasted image 20250525115710.png]]

Looking at those changes:

> [!DISCUSSION]
> 
> 1. We use the `.onSubmit` view modifier, which will run the code between lines 43 and 47 when the user presses the **Return** key while in the search field. This block of code invokes the `fetchResults` function that we just defined on the view model, answering the question of `for` by providing an argument (answer) of "whatever the user typed into the search field" – that is – the contents of the `searchText` stored property.
> 2. Once the `fetchResults` function has done its job, `currentResponse` should no longer be `nil` and we will have an array of matching authors in the `docs` property. So, we iterate over that array and show a scrollable list of just the author names, for now.

We're ready to test the code now, and (most likely) correct some logical errors.

Let's try out the code and see what happens:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1087535144?h=7a35c91e5b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Debugging Logical Errors in a Response from an Endpoint"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

As explained in the video above, we found that sometimes, information about a given author may not always contain a birth date.

As a result, we chose to make that property in the model optional, so that if a birth date is not provided for an author, the property will contain `nil`:

![[Pasted image 20250525122017.png]]

### Add a helper view

Right now, when a response is received, we see a simple list of author names:

![[RocketSim_Screenshot_iPhone_16_Pro_6.3_2025-05-25_12.21.37.png|300]]

There's more information that we could be displaying for each author that matches a search:

![[Pasted image 20250525122300.png]]

So, let's display that by building a helper view.

First, we define some example data to use with the preview of the helper view:

![[Pasted image 20250525124507.png]]

Then, we define the helper view itself:

![[Pasted image 20250525124439.png]]

Now, we can use that helper view in the main view that shows our list of fetched results:

![[Pasted image 20250525124628.png]]