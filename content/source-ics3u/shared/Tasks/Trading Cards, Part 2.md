---
draft: true
draftSectionTwo: false
excludeBacklinks: false
created: 2024-10-17T07:00:00.000-0400
createdForSectionTwo: 2024-11-26T07:00:00.000-0400
tags:
---
## Objective

Significantly revise your original trading card, or create a new one, by making use of the techniques you have learned since the midpoint of this module.

Make a card that has the look and feel of the broader examples of trading cards for [sports](https://duckduckgo.com/?q=baseball+trading+cards&iax=images&ia=images#), [board games](https://duckduckgo.com/?q=board+game+trading+cards&t=osx&ia=images&iax=images), [video games](https://duckduckgo.com/?q=video+games+trading+cards&t=osx&ia=images&iax=images), or other areas of interest.

## Purpose

An opportunity to demonstrate your understanding of the following concepts:

- abstraction using helper views
- arrays (lists)
- navigation or tab views
- custom shapes

## Success criteria and exemplar

1. To really exceed expectations, make a plan for, and then implement, a custom shape that you will define and use in your new and improved trading card.
   
   Use [[RocketSim_Screenshot_iPad_(10th_generation)_10.9_2024-11-24_20.49.40.png|this template]].
   
   For example:
   
   ![[Pasted image 20241124210523.png]]
   
2. Make a plan on paper for at least some element of the design of your revised trading card.
   
   For example:
   
   ![[Pasted image 20241124212153.png]]
   
3. Then organize an Xcode project using the techniques we have learned to create your card – it is OK if your final design varies from your plan – that will happen sometimes as part of the creative process:
   
   ![[Pasted image 20241125221449.png]]
   
4. Create at least three different cards that the user of your app can navigate between, using either a list and navigation links, or a paged tab view – the code to produce a paged tab view is shown in the screenshot above:

   <div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1033841165?h=4dbfcb0c4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>
   
4. Be sure to write code that follows [[Code Style Conventions|established style conventions]].
   
8. Use source control well by [[Pushing Commits|committing and pushing]] your work to a remote on GitHub at regular intervals.
   
   ![[Screenshot 2024-11-25 at 10.21.27 PM.png]]
   
## What you'll need to begin

- [ ] Xcode
- [ ] the [SF Symbols App](https://developer.apple.com/sf-symbols/) installed on your computer, also for reference
- [ ] your copy of SwiftUI Views Mastery, downloaded to your computer, so you can look up examples as needed

## Progress and due date

The task is due no later than 11 PM on Saturday, November 30, 2024.

After each class, [on Notion](https://notion.so), be sure to:
- [ ] Share progress regularly (here is [[Trading Cards Exemplar|how Mr. Gordon's design evolved]])
	- [ ] Include screenshots
	- [ ] ==Be sure to post the address of your GitHub remote at some point==

> [!NOTE]
> Your work is not considered as handed in until the GitHub remote has been shared *and* you have [[Pushing Commits|committed and pushed]] all your work.

## Further examples

Here are some examples of possible layouts that you could aim to reproduce, or use as inspiration for a similar layout:

![[Trading Card Template Examples-7 (dragged).png|400]]

![[Trading Card Template Examples-3 (dragged).png|400]]

![[Trading Card Template Examples-2 (dragged).png|400]]

![[Trading Card Template Examples-1 (dragged).png|400]]

![[Trading Card Template Examples-4 (dragged).png|400]]

![[Trading Card Template Examples-5 (dragged).png|400]]

![[Trading Card Template Examples-6 (dragged).png|400]]

![[Trading Card Template Examples-8 (dragged).png|400]]

![[Trading Card Template Examples-9 (dragged).png|400]]

## Tips

### Overlays

The `.overlay` view modifier is a convenient alternative to using a `ZStack` and may be useful depending on your needs – you are strongly recommended to consult pages 801 to 804 in [[SwiftUI Views Mastery]]:

![[Screenshot 2024-11-24 at 9.40.24 PM.png]]

### Typefaces

You can use other typefaces in iOS applications.

Consult the [iOS Fonts](http://iosfonts.com) website for a quick reference.

![[Screenshot 2024-01-18 at 8.35.40 AM.png]]

> [!TIP]
> 
> Page 478 in [[SwiftUI Views Mastery]] has examples of how to use custom fonts, as well.

### Rotation (2D)

Any view in SwiftUI can be rotated using the `.rotationEffect` view modifier.

Here is a short example of how rotation of views might be used to create a nice effect:

![[Pasted image 20241117103009.png]]

> [!TIP]
> 
> Read more about rotating views in two dimensions on page 901 of [[SwiftUI Views Mastery]].

### Rotation (3D)

There is also a `.rotation3DEffect` view modifier.

Here is a short example of how this might be used to create a nice effect:

![[Pasted image 20241117103657.png]]

> [!TIP]
> 
> Read more about rotating views in three dimensions on page 904 of [[SwiftUI Views Mastery]].

### Custom colours

You can absolute create custom colours (or clone colours from existing apps or webpages).

Here is a mini-tutorial on how to [[Creating Custom Color Sets in Xcode|create custom colour sets]].

![[Screenshot 2024-11-15 at 3.57.23 PM (2) 1.png]]

### Gradients

We can use gradients to fill a shape or as a background – a gradient is a transition from one colour to at least one other colour.

Here is an example of what this might look like, using a Blue Jays theme and some [[Creating Custom Color Sets in Xcode|custom colors]]:

![[Pasted image 20241117105911.png]]

> [!TIP]
> 
> Read more about linear gradients on page 654 of [[SwiftUI Views Mastery]].
> 
> There are other types of gradients you can use too (see page 639).

### Image Editing

Sometimes it's nice to be able to extract an image from a photograph, to use it in our apps:

![[Screenshot 2024-11-17 at 11.22.05 AM.png]]

Read this mini-tutorial to learn [[Copy a Subject from a Photograph|how to extract the subject of a photograph]] from it's background.

> [!NOTE]
> 
> It's only acceptable to copy images like this from the Internet for an academic exercise like this one. Were you looking for images to use in an actual app you wish to release to the public, you would need to either purchase the rights to use that image, or find an image that is [licensed for the uses you need](https://search.creativecommons.org).

## Final advice

> [!IMPORTANT]
> 
> Do *not* use frames for positioning. Your layout should work well on multiple screen sizes.
> 
> Put another way, use frames only to size the width or height of an image, but not both.

