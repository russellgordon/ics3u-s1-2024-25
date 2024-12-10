---
draft: true
draftSectionTwo: false
created: 2024-12-13T07:00:00.000-0400
createdForSectionTwo: 2024-11-26T07:34:55.000-0400
tags:
---

## Recap

Earlier this year, we first learned how to create layouts with horizontal and vertical stacks and the `Rectangle` shape:

![[Pasted image 20231024132912.png|200]]

Recall that shapes are *push-out*, or "greedy", views. 

They take up as much space as they can.

As well, the specific amount of space that a shape has available to draw itself within will vary.

For example, here, from [[Block Layouts, Part 2]], we used the `.aspectRatio` view modifier to make the second rectangle be twice as wide as it is tall:

![[Pasted image 20240927074100.png]]

## Built-in Shapes

The SwiftUI framework, in fact, provides us with [six built-in shapes](https://www.hackingwithswift.com/quick-start/swiftui/swiftuis-built-in-shapes) that look like this:

![[RocketSim_Screenshot_iPad_(10th_generation)_10.9_2024-11-24_16.49.48.png]]

The code that produces the output above looks like this:

```swift
struct BuiltInShapesView: View {
    var body: some View {
        VStack {
            Rectangle()
                .fill(.gray)
            
            RoundedRectangle(cornerRadius: 25)
                .fill(.red)
            
            UnevenRoundedRectangle(cornerRadii: .init(topLeading: 50, topTrailing: 50))
                .fill(.orange)
            
            Capsule()
                .fill(.green)
            
            Ellipse()
                .fill(.blue)
            
            Circle()
                .fill(.yellow)
        }
        .padding()
    }
}

#Preview {
    BuiltInShapesView()
}
```

Of course, we could place some text inside another `VStack` and then embed both `VStack` structures inside of an `HStack`:

![[Screenshot 2024-11-24 at 5.02.31 PM.png]]

Now, although the shapes in the second `VStack` remain "greedy", they cannot take up as much space as before. The code that draws the shapes is the same, but the shapes themselves are a different size on screen.

This is an important concept to understand when designing *custom* shapes, which is what we are going to learn about next.

## Custom Shapes

As [explained by Paul Hudson](https://www.hackingwithswift.com/books/ios-swiftui/paths-vs-shapes-in-swiftui):

> "[A] shape has no idea where it will be used or how big it will be used, but instead will be asked to draw itself inside a given rectangle."
> 
> SwiftUI implements `Shape` as a protocol with a single required method: given the following rectangle, what path do you want to draw? 

A custom shape is defined in SwiftUI as... wait for it... a structure!

To define a custom shape, the structure must conform to the `Shape` protocol.

The `Shape` protocol requires that the structure have a *method* (also called a *function*) named `path`.

> [!TIP]
> 
> A *method* or *function* is very much like a computed property – it runs some logic for us and returns a value.
> 
> A method or function is different from a computed property in the following way – a method or function can take one or more pieces of input to do it's job.
> 
> The `path` function in a structure that conforms to the `Shape` protocol accepts one piece of input – the rectangle within which the shape must draw itself.

It is our job to define the outer edges of the shape in question – the path – that will define the form that will be drawn within the provided rectangle.

### Drawing a triangle

So... what does this actually look like, in practice?

Here is a plan for drawing a triangle by defining a path using the `Shape` protocol:

![[Pasted image 20241124173650.png]]

The origin is located at $(rect.minX, rect.minY)$ and exists in the top left corner.

In this plan, we first move the path to the middle of the $x$-axis, and the bottom, or minimum, of the $y$-axis.

> [!TIP]
> 
> Think back to drawing your name at the start of this course, using the turtle drawing metaphor. "Moving" a path is akin to asking the turtle to "pick up it's pen" and move to another location, without drawing a line.

The rest of the plan indicates that the triangle will be defined by three lines. The first line is drawn from point 1 to point 2. The second is drawn from point 2 to point 3. The third line is drawn from point 3 back up to point 1.

Here is what this looks like, in code:

![[Pasted image 20241124174301.png]]

If we then use this newly-defined custom shape, the `Triangle` structure, inside of a `VStack`, we will see that the `VStack` evenly divides the available space between it's children:

![[Pasted image 20241124174605.png]]

> [!TIP]
> 
> Note the fine blue box around each triangle. This is the *rect* or rectangle that the SwiftUI framework allows the shape to be drawn within.

If we add more triangles to the `VStack`, the rectangle each triangle will be drawn within is correspondingly smaller, which changes the appearance of each triangle, compared to the prior example:

![[Pasted image 20241124174827.png]]

### Drawing a diamond

Here is a plan for drawing a diamond by defining a path using the `Shape` protocol:

![[Pasted image 20241124180626.png]]

Here is a 3-minute video showing exactly how to write the code for this, from scratch, within an Xcode project – making good use of the autocomplete feature:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1032899132?h=844b3e74ea&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

Here is what the finished code looks like:

![[Pasted image 20241124181250.png]]

... and an example of using it in a view:

![[Screenshot 2024-11-24 at 6.17.17 PM.png]]

## Fills and borders

Be sure to review Paul Hudson's summary of how to [fill and stroke (draw a border) on shapes using SwiftUI](https://www.hackingwithswift.com/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time).

You can create some pretty fun effects:

![[Pasted image 20241124195931.png|400]]

## Exercises

Complete at least one of the exercises below – the more you can complete, the better you are demonstrating your understanding.

> [!TIP]
> 
> Be sure to share evidence of your plans made on paper in your portfolio post for today's class. You have permission to take your phone out during today's class to take photographs of your plans.

### 1. Right Triangle

Use one of the hard-copy planning sheets available in class, print the image below (if you are outside of class time right now), or copy the image to an iPad – then make a plan to draw a right triangle, along the lines of what you saw in the examples above:

![[RocketSim_Screenshot_iPad_(10th_generation)_10.9_2024-11-24_19.55.27.png]]

Then, write code in an Xcode project to define and then use a custom right-triangle shape.

### 2. Arrow

It is possible to use fractions of a dimension to define the vertices of a shape.

Consider this plan for drawing a right-facing arrow:

![[Pasted image 20241124201541.png]]

Here is the start of the code to implement this plan:

![[Pasted image 20241124202205.png]]

Finish defining the arrow shape.

### 3. Challenge

For a challenge, complete any one of the following three custom shapes – making a plan on paper before writing code:

- [[RocketSim_Screenshot_iPad_(10th_generation)_10.9_2024-11-24_20.28.21.png|Double-ended Arrow]]
- [[RocketSim_Screenshot_iPad_(10th_generation)_10.9_2024-11-24_20.29.12.png|Pentagon]]
- [[RocketSim_Screenshot_iPad_(10th_generation)_10.9_2024-11-24_20.29.46.png|Star]]






