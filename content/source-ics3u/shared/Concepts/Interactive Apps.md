---
tags:
created: 2024-09-30T00:00:00.000-0400
createdForSectionTwo: 2024-10-03T00:00:00.000-0400
draft: true
draftSectionTwo: false
---

This is a longer video, but it does have chapters so that if desired, you can review only certain parts of the tutorial:

- 00:00:00 Project Organization
- 00:04:06 Create a New View
- 00:06:40 Create a Model
- 00:10:14 Connect the Model to the View
- 00:13:13 Collect Input
- 00:17:22 Show Output
- 00:21:25 Show More Output
- 00:23:38 How to Restart the Preview Window
- 00:24:08 IPO: Input-Process-Output
- 00:25:56 Adding an Image
- 00:31:10 Conclusion and Next Steps

> [!TIP]
> 
> While you are following along with this video, you will need [access to Mr. Gordon's Circle structure code](https://gist.githubusercontent.com/lcs-rgordon/a19ce9f06b06a1365731f090cda7d453/raw/1d49a224af5ce3cdce352af13e1b6880054bcf9c/Circle.swift).

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1015475836?h=8c4ea1d1f2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

## Exercise

Now, return to the structure you created for the [[Geometric Figures]] task.

Using the same steps shown in the video above, make:

- a *model* file that contains your own 2D or 3D structure from [[Geometric Figures|the earlier task]]
- a *view* file that:
	- uses the structure as a stored property
	- provides a user interface (one or more sliders) to allow for input
	- shows output

The idea is to move forward from manually interacting with the structure in a playground, like we did last week:

![[Pasted image 20240923050608.png]]

... and instead, build an interactive app, like this, but for your own figure:

![[Screenshot 2024-10-02 at 7.55.16 PM.png]]

> [!TIP]
> 
> Remember to commit and push your work as you go in Xcode, using the **Option-Command-C** keyboard shortcut. This was [first shown in the video at 19:13](https://vimeo.com/1015475836/8c4ea1d1f2?share=copy#t=0h19m13s). Good use of source control is part of [learning goal 2](https://ics3u-s2-2024-25.russellgordon.ca/Learning-Goals#2).

## Extension

Use the knowledge you developed by building [[Block Layouts|block]] [[Block Layouts, Part 2|layouts]] and [this reference on styling text views](https://sarunw.com/posts/swiftui-text-font/) to improve the user interface of the app. You might try applying [a bit of padding](https://www.hackingwithswift.com/quick-start/swiftui/how-to-control-spacing-around-individual-views-using-padding), too.

Your interface might look something like this, once you are done:

![[RocketSim_Screenshot_iPhone_16_Pro_6.3_2024-10-02_20.21.19.png|350]]

> [!TIP]
> 
> Your improved interface need not look precisely like this – this is just an example.

