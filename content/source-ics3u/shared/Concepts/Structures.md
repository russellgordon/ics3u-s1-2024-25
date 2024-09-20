---
tags:
created: 2023-10-20T00:00:00.000-0400
createdForSectionTwo: 2024-09-20T00:34:55.000-0400
draft: true
draftSectionTwo: false
---
Individual variables or constants only go so far.

What if we want to describe, say, a person?

What attributes does a person have?

These might include:

- name
- hair
- colour
- age
- height
- mass

## Definition of a structure

This is the *definition* of a structure:

```swift
struct Person {
    
    // MARK: Stored properties
    // These are properties that have an assigned value
    let age: Int
    let hairColour: String
    let name: String
    let height: Double
    let mass: Double
}
```

> [!Action]
> 
> Add the code shown above to your **Structures** playground now.

A structure is a *data type*, just like `String`, `Int`, and `Double` are data types.

So by defining our own structure, we are literally creating a new data type in Swift!

## Creating an instance

How do we *use* a structure, though?

To create an *instance* of a type, we must provide *values* for each property of the type.

Here, two instances of the `Person` data type are created, as constants:

```swift
let joyce = Person(age: 16,
                   hairColour: "black",
                   name: "Joyce",
                   height: 160,
                   mass: 30)

let gordon = Person(age: 46,
                    hairColour: "red",
                    name: "Gordon",
                    height: 180,
                    mass: 78)
```

> [!Action]
> 
> Try creating an instance of the `Person` type named `me` to represent yourself. Make it a constant, using the `let` keyword, like the instances of the `Person` structure shown above.

Once an instance of a structure is created, we can "ask about" the values held in each property, and use these values in programs we author.

> [!Action]
> 
> Add the following code to the bottom of your **Structures** playground and try it out.
> 
> `me.age`
> 
> What shows up in the results sidebar, at right?

## Variables and constants

What happens if you try to change one of the properties of the structure?

> [!Action]
> 
> Add this code at the bottom of the playground:
> 
> `me.age = 21`

Remember, the structure was defined with the `age` property as a constant. This means the  the value of `age` cannot ever change:

```swift
struct Person {
    
    // MARK: Stored properties
    // These are properties that have an assigned value
    let age: Int           // Defined using "let", so it is constant
    let hairColour: String
    let name: String       
    let height: Double
    let mass: Double
}
```

> [!Action]
> 
> Change the definition of the `name` constant so that it is variable – use `var` instead of `let`.

Now, try running your playground again – what happens?

We still cannot change the value of the `age` property because the *instance* of the `Person` structure itself was defined as a constant.

> [!Action]
> 
> Change the code that creates an instance of the `Person` named `me` in your playground, so that the instance is a variable, rather than a constant.

To summarize, a structure works like any other data type.

When an instance of a structure is declared as a constant, using the `let` keyword, that instance cannot be changed.

When an instance of a structure is declared as a variable, using the `var` keyword, and there are properties of that structure also declared as variables, we can change the values of individual properties.

## Discussion

Discuss with a friend in class.

What other properties of the `Person` structure should be defined as variables?

To answer this question, consider whether the values those properties hold would change over time.

Make any necessary changes to the `Person` structure in your Xcode playground.

## Exercise

Here is a [close-up of a retro-style hockey card for an imaginary player](https://russellgordon.ca/lcs/2023-24/ics3u/retro-75-hockey-card-template.jpg).

Here is an image of [several similar cards](https://russellgordon.ca/lcs/2023-24/ics3u/album-of-retro-75-custom-hockey-cards.jpg).

Make a new Xcode playground named **HockeyCards**.

Write structure(s) in your playground to describe the data shown in the hockey cards.

Then create *instances* of your structure for at least three hockey cards. 
