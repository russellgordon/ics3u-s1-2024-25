---
tags:
created: 2024-10-22T00:00:00.000-0400
createdForSectionTwo: 2024-09-26T00:34:55.000-0400
draft: false
draftSectionTwo: false
---

## Protocols

We have learned how to author structures that describe things like 2D and 3D figures, people, book listings, and hockey cards.

There is a feature of the Swift programming language that allows us to require that structures follow certain rules.

For example, consider Mr. Gordon's `Circle` structure:

![[Pasted image 20240926080425.png]]

Let's say we wanted to make a rule that all structures that are geometric figures should follow – and that the rule was "be able to describe yourself".

We can do that by defining a *protocol*, like this:

```swift
protocol Describable {
	var description: String { get }
}
```

In this case, we are saying that any structure that follows the protocol, or rule, named `Describable` *must* have a property named `description` that we can "get" as a `String`.

This is what happens if Mr. Gordon defines the new protocol (lines 4 through 6) and then makes the `Circle` protocol promise to follow the rules of the `Describable` protocol (see the addition of `: Describable` on line 9):

![[Screenshot 2024-09-26 at 8.08.56 AM.png]]

The Swift compiler throws an error, because currently, the `Circle` structure is not following the rules of the `Describable` protocol – it does not currently provide a property named `description`.

If Mr. Gordon fixes this by adding the required property (lines 31 to 33), the compiler error goes away, and then he can use the new property (lines 44 and 52) to get a description of each instance of the `Circle` type:

![[Pasted image 20240926081244.png]]

## Ex. 1: Use a protocol

Copy this code into your clipboard:

```swift
protocol Describable {
	var description: String { get }
}
```

Now open your **GeometricFigures** playground.

Add the protocol code provided above the top of your playground file. Make your structure that describes a 2D or 3D figure use, or promise to follow the rules of, the `Describable` protocol. 

Like Mr. Gordon did, invoke the `description` property on at least one instance of your structure, so you can verify that the new property is working.

## SwiftUI

The programming language we are using this year is called *Swift*.

Other programming languages you may have heard of are: Python, Java, C, and so on.

Apple provides a *framework* – a collection of code – that we can use with the Swift programming language to easily author user interfaces.

That framework is called **SwiftUI**.

We will start learning how to use SwiftUI today.

SwiftUI uses structures that follow the rules of the `View` protocol.

A *view* is a structure in SwiftUI that is used to show something to the user.

It's the parts of an app we can *see*.

How to position views is a key skill in building user interfaces for a software developer.

## Stacks

SwiftUI uses three primary *layout* views:

- `VStack`
	- Positions views contained inside of it vertically.
- `HStack`
	- Positions views inside of it horizontally.
- `ZStack`
	- Positions views inside of it using layers.
	- The first view is the bottom layer.
	- The final view is the top layer.

Learning how to do layout in SwiftUI is best done experimentally.

## Example

Let's try to build this view:

![[Pasted image 20231024132912.png|200]]

You can think of this view as a blueprint.

User interface designers call this a "wireframe" or a "block design".

## Push-out views

We will build this view using the `Rectangle` shape.

It is an example of a **push-out** view.

A `Rectangle` will push out to fill up as much space as possible, like this:

![[RocketSim_Screenshot_iPhone_15_Pro_2023-10-24_13.49.46.png|250]]

Please [[BlockLayout.zip|download this playground]].

Then, we will build the view together!

## Ex. 2: Build additional layouts

Use what you have learned by following Mr. Gordon to build as many of these additional layouts as possible:

![[Screenshot 2024-09-26 at 8.24.41 AM.png]]



