---
draft: true
draftSectionTwo: false
created: 2024-12-12T07:00:00.000-0400
createdForSectionTwo: 2024-11-25T07:34:55.000-0400
tags:
---

## Recap

In our prior class you learned how to [[Abstraction Using Lists|apply abstraction using an array]] (a list) to avoid having to write code like this:

![[Pasted image 20241121202407.png]]

Instead, you can now write code like this, which [[Abstraction Using Lists#Create a list (array)|iterates over an array]] named `cities` to produce identical visual output:

![[Pasted image 20241121204401.png]]

You then saw how to apply the same concepts to create an app that presents details of boarding houses at LCS:

![[Screenshot 2024-11-21 at 9.40.08 PM.png]]

You did this by:

1. Deciding what data the app might show, by [[Abstraction Using Lists#Model|creating a model]], which includes:
	- the definition of a `House` structure
	- the creation of several instances of that structure
	- the creation of an array, named `boardingHouses`, that contains all of those instances
1. [[Abstraction Using Lists#Helper view|Creating a helper view]] to show an entry for a single house.
2. Creating a view to [[Abstraction Using Lists#The scrollable list|show a scrollable list]].
	- a `List` structure was used to iterate over the `boardingHouses` array and create multiple entries, one for each house
	- each entry has the same layout, but different data is shown

By *applying abstraction* in this way, code is made less repetitive, and a nice interface is created for your users:

![[LCSHouses.mp4]]

## Detail views

What if we wanted to expand the LCS Houses app so that the user could navigate down to a *detail view* and see more information about each house?

![[Scrolling and Navigating.mp4]]

This user experience – scrolling a list, tapping to view details, tapping back to the return to the list – exists in many apps on modern smartphones:

![[Navigation to Detail Views.mp4]]

So how can we add this to the LCS Houses app? Surprisingly few changes are needed.

To follow along, please [download this project](https://github.com/lcs-rgordon/LCSHouses/archive/97d20cffbb30725eb2c4e4ca10cddf62d8a0aa10.zip), expand and rename it, move the project to your Computer Science folder, then open it – [[Running Your Code#Expand the compressed file|just like you did with the previous tutorial]].

Compared to the [[Abstraction Using Lists#A complete example|example code shared in our prior class]], the code you just downloaded has only a couple of differences.

First, images of each house were added to the **Assets** folder:

![[Pasted image 20241124111426.png]]

Then, the names of those images were added to the information provided when each instance of the `House` structure is created:

![[Pasted image 20241124111532.png]]

## Create the detail view

Our first step to enable navigation down to a detail view is to actually create the detail view itself:

![[Screenshot 2024-11-24 at 11.23.38 AM.png]]

Please create a **HouseDetailView** file in your own copy of this project.

The purpose of this lesson is not to teach layout – you've had plenty of experience with this by now – so feel free to copy and paste this code into your new file:

```swift
import SwiftUI

struct HouseDetailView: View {
    
    // MARK: Stored properties
    let houseToShow: House
    
    // MARK: Computed properties
    var body: some View {
        ScrollView {
            VStack {
                Image(houseToShow.image)
                    .resizable()
                    .scaledToFit()
                    
                Text(houseToShow.description)
            }
            .padding()
        }
        .navigationTitle(houseToShow.name)
    }
}

#Preview {
    NavigationStack {
        HouseDetailView(houseToShow: cooper)
    }
}
```

It's a small-ish file, but there's a few things to take note of. Let's do that now:

![[Screenshot 2024-11-24 at 11.26.00 AM.png]]

In this code:

> [!DISCUSSION]
> 
> 1. By convention, a view that is navigated down to often includes the word `Detail` in its name. Here, we name the new view `HouseDetailView`, which implies that more information will be provided to the user when they choose to look at it.
> <br/><br/>   
> 2. A single stored property is defined – accepting an instance of the `House`  structure.
><br/><br/>
> 3. Since a stored property is defined, to create an instance of `HouseDetailView` for the preview, we are asked the question – which house should be shown? We answer by saying "Cooper" – we do this by passing the `cooper` instance of the `House` data type.
> <br/><br/>
> 4. A navigation title is shown, displaying the name of the house.
> <br/><br/>
> 5. In order for us to see the navigation title in the Preview window, we must make the instance of `HouseDetailView` inside a `NavigationStack` structure. More on what a navigation stack is in just a moment...

Try changing the *argument* (the answer) provided for the *parameter* (the question) of what house to show in the **Preview** window. In this screenshot, the code has been changed to show information from the `ondaatje` instance of the `House` data type instead:

![[Screenshot 2024-11-24 at 11.56.56 AM.png]]

## Navigate to the detail view

Return to the **HousesListView** file – note that a `NavigationStack` structure has already been included in this code:

![[Screenshot 2024-11-24 at 11.58.22 AM.png]]

Since the `List` structure has this view modifier attached to it:

```swift
.navigationTitle("LCS Houses")
```

... and since this code is already inside the scope of the `NavigationStack`:

![[Screenshot 2024-11-24 at 12.00.25 PM.png]]

... we see the **LCS Houses** title at the top of the interface for this view:

![[Pasted image 20241124120120.png]]

> [!NOTE]
> 
> There are two common errors when creating a navigation title for a view:
> 
> 1. Forgetting to enclose the view within a `NavigationStack`.
> <br/><br/>
> 2. Attaching the `navigationTitle` view modifier to the `NavigationStack` itself – this is incorrect – the view modifier must be attached to a view inside the scope of the `NavigationStack` (within the brackets of the navigation stack).

To enable navigation to the detail view, we use the `NavigationLink` structure, like this:

![[Screenshot 2024-11-24 at 12.08.09 PM.png]]

It's worth seeing how to use the autocomplete feature of Xcode to type this – please watch carefully and note what keys are pressed:

![[Adding a NavigationLink.mp4]]

## Summary

A `NavigationStack` structure creates the ability to navigate down to detail views.

In this tutorial, we were navigating down just a single level, to a simple detail view.

A navigation stack makes it possible to navigate down several levels within an app, as shown here:

![[Navigating down multiple levels.mp4]]

Think of that example of repeated navigation to detail views as a stack of pancakes:

![[stack-pancakes-blog-post-1000px-2711640405.jpg]]

As the user taps to navigate down, another view is added to the stack of views the user has visited – just like adding another pancake to a stack.

When the user presses the back button, a view is removed from the navigation stack – just like removing a delicious pancake from a stack in order to eat it.

If the user presses the back button enough times, they will return to where they started.

## Exercises

### 1. Extend LCS Houses

The [following web page](https://www.lcs.on.ca/boarding-at-lcs/school-life/your-house) lists details about the boarding houses we have here at LCS.

Use the information shown on that web page to provide more information on the detail view for each boarding house, like this:

![[Screenshot 2024-11-24 at 1.07.43 PM.png]]

... and this:

![[Screenshot 2024-11-24 at 1.08.01 PM.png]]

> [!HINT]
> 
> Can you see another place to apply abstraction in the detail view as shown? Think helper views...

### 2. Extend Favourite Things

Modify your **Favourite Things** app that you first wrote in our previous class, so that users can navigate to a detail view, and see more information about the things and people you are grateful for in life:

![[FavouriteThings Example.mp4]]