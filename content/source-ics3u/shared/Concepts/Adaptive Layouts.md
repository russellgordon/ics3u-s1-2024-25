---
tags:
created: 2024-10-26T07:00:00.000-0400
createdForSectionTwo: 2024-09-26T00:34:55.000-0400
draft: false
draftSectionTwo: true
---

## Using aspect ratios

One of the exercises from [[Block Layouts]] prompted a few questions through portfolio posts:

![[Pasted image 20241026102936.png|200]]

This is an interesting layout to consider, and it *is* possible to complete this exercise entirely with the use of nested `HStack` and `VStack` structures, together with some use of the `.aspectRatio` view modifier.

To get started, we might notice there are elements that share a horizontal axis. So we could start to implement this layout with an `HStack`:

![[Pasted image 20241026102936 copy 1.png|200]]

![[Screenshot 2024-10-26 at 10.35.26 AM.png]]

Then we notice that within each column on the left and right, there are elements arranged vertically:

![[Pasted image 20241026102936 copy 2.png|200]]

That implies the addition of `VStack` structures:

![[Screenshot 2024-10-26 at 10.37.20 AM.png]]

Then, we might see that the bottom-left corner is meant to have two columns side by side:

![[Pasted image 20241026102936 1.png|200]]

So we could add an `HStack` there:

![[Screenshot 2024-10-26 at 10.39.57 AM.png]]

We are making good progress.

At this point we might try using a view modifier to adjust the aspect ratio of the bottom-right rectangle:

![[Screenshot 2024-10-26 at 10.47.41 AM.png]]

... and this gets us very close to the desired layout, but, we have not addressed the fact that the left side of the layout is meant to be about two-thirds of the overall width of the layout:

![[Pasted image 20241026102936 2.png|200]]

We face this challenge because the top-level `HStack` in this layout divides it's available space evenly between it's immediate children, the two `VStack` structures.

We *can* adjust this behaviour by attaching a view modifier to the second `VStack`, forcing it to have an overall smaller width:

![[Screenshot 2024-10-26 at 10.59.00 AM.png]]

Here, we are saying: "make this `VStack` have a height that is always six times larger than its width".

And that *does* get us pretty close to the desired target layout.

We could adjust the other aspect ratio view modifier a little bit to get even closer:

![[Screenshot 2024-10-26 at 10.59.45 AM.png]]

We are really close:

![[Pasted image 20241026102936.png|200]]

If we add one more view modifier to the top-left rectangle to make it a bit shorter, vertically:

![[Screenshot 2024-10-26 at 11.05.56 AM.png]]

... we are pretty much done.

## Making the layout adaptive

Using aspect ratio view modifiers does get the job done, but, as we will learn in detail later in this course, layouts need to adapt to different screen sizes.

On an iPhone 16 Pro, the layout we've authored looks great:

![[RocketSim_Screenshot_iPhone_16_Pro_6.3_2024-10-26_11.12.16.png|400]]

However, on a 10" iPad, the layout does not look correct at all:

![[RocketSim_Screenshot_iPad_(10th_generation)_10.9_2024-10-26_11.13.58.png]]

For a complex layout like this one, rather than specifying the aspect ratio of a single element of the layout (such as the top-left rectangle) it is easier to describe the size we want in terms of the overall width and height of the device itself.

How, though, can we do that?

This is where the `GeometryReader` structure is useful.

Consider the following code:

![[Screenshot 2024-10-26 at 11.19.40 AM.png]]

We have added a `GeometryReader` structure at the top level of the layout.

> [!NOTE]
> 
> When working within a real project in Xcode (rather than in a Playground) there is no more need to use the `Phone` structure.

The `GeometryReader` structure, as its name implies, determines the available size of a device, and then allows us to manipulate the size of views using that information:

![[Screenshot 2024-10-26 at 11.19.40 AM 1.png]]

On line 41, we limit the height of the top-left rectangle to one-third of the overall device height:

![[Screenshot 2024-10-26 at 11.29.00 AM.png]]

On line 47, we set the width of the left-hand `VStack` to be two-thirds of the overall device width: 

![[Screenshot 2024-10-26 at 11.29.42 AM.png]]

We do this by using values from the `reader` parameter, which is populated with information from the `GeometryReader` structure. We then use the `.frame` view modifier to explicitly set the width or height of elements of our layout.

If we then try out this code on an iPhone 16 Pro, we see it adapts perfectly:

![[Screenshot 2024-10-26 at 11.31.47 AM.png]]

The `GeometryReader` is useful, but should be used sparingly, as it adds some additional overhead when the SwiftUI framework displays a user interface within an app.

We will revisit use of the `GeometryReader` structure later on in this course.