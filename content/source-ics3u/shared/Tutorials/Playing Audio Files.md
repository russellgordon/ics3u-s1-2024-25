---
draft: false
draftSectionTwo: false
created: 2025-05-21T07:00:00.000-0400
createdForSectionTwo: 2025-05-21T07:34:55.000-0400
tags:
---
Paul Hudson has an [ultra-brief tutorial on how to play sounds](https://www.hackingwithswift.com/example-code/media/how-to-play-sounds-using-avaudioplayer) using the `AVAudioPlayer` structure which is provided through the **AVFoundation** framework authored by Apple.

In this case, however, a bit more explanation might be helpful, so let's dive in.

First, here is the example we'll review in this tutorial – watch the video to see what happens – this is an example of a "sound board app" where users can play different sound effects by clicking on various buttons:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1086609782?h=6af8004528&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sound Board Example"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

## Obtaining sound files

There are many different places on the Internet from which one can obtain sound files.

Mr. Gordon likes to use [FreeSound](https://freesound.org) – it is well-organized, and the license under which a sound file is made available is clearly presented.

> [!TIP]
> 
> You need to create an account with FreeSound to download their sound files.

## Example code

You can [download a copy of this project](https://github.com/lcs-rgordon/SoundExample/archive/ba63d22aa4c54d8e3c0df8bb9affa755dacfcdd0.zip) and try it out.

In the sections below, the code will be explained further, and we'll look at how to extend this app to add more sound effects.

## Model

The app defines a structure named `Sound` which has five stored properties:

1. A unique identifier (required so we can [[Identifiable Instances of a Structure|later iterate over an array]] containing instances of this data type).
2. The exact filename of the sound file that exists in our project – this must match precisely, and is case-sensitive.
3. A name to describe the sound file (e.g.: "Doorbell rings" or "Cows Moo").
4. A longer description that might be useful to show or search against in our app.
5. Text that describes the source of a sound file (attribution).

![[Pasted image 20250521214221.png]]

As you can see above, several instances of the model are created, which will be used throughout this app.

## View model

A very simple view model for the app provides an array that contains all available sound effects:

![[Pasted image 20250521214423.png]]

## Sounds

A `Sounds` group is defined within our project just to keep things organized. This holds all of the sound files we have imported into the project:

![[Pasted image 20250521214517.png]]

## View

Let's examine the view code, which is where most of the logic for this app exists.

Some parts of the code – the details of the `LazyVGrid` and the code inside the buttons that we can click to play a sound – are deliberately folded up right now.

We will take a look at that hidden code shortly.

For now, let's look at other significant parts of the code in this view:

![[Pasted image 20250521214734.png]]

Here is a breakdown of those items:

> [!DISCUSSION]
> 
> 1. Here is where we establish a connection to the view model.
> 2. This stored property holds a reference to an instance of `AVAudioPlayer` – *when there is a sound selected*. There will not always be a selected sound – so this stored property is an optional, which means it can contain a `nil` value.
> 3. We iterate over the array of sounds provided by the view model, inside of a `LazyVGrid` structure. This way, instead of getting a list with one column of buttons, we get a grid with two columns. More on how `LazyVGrid` works in a moment...
> 4. When a sound has been selected to be played, this text view shows attribution information (who recorded the sound file, where it was obtained, and so on).
> 5. Provide a button (with a red tint) allowing the user to stop whatever audio file might be playing.

Now let's examine the two hidden parts of the code. First, let's review the `LazyVGrid`.

How to use the `LazyVGrid` structure is described in detail in **SwiftUI Views Mastery**:

![[Screenshot 2025-05-22 at 9.45.58 AM.png]]

... but here are the basics of the simple usage of `LazyVGrid` in this app:

![[Pasted image 20250522094533.png]]

Let's review:

> [!DISCUSSION]
> 
> 1. For the `columns` parameter we must provide an array of `GridItem` instances. In this case, we provide an array containing two instances of `GridItem`, so our grid will have two columns. If we provided three instances of `GridItem` within the array instead, we would get three columns of buttons.
> 2. We set some minimum spacing between elements in the grid. In this case, 30 points of screen space.

Now let's examine the code within the `Button` structure, which exists inside the `ForEach`:

![[Pasted image 20250522095124.png]]

This is the code that is run each time a button is pressed:

![[Screenshot 2025-05-22 at 7.19.53 PM.png]]

Let's review that code.

> [!DISCUSSION]
> 
> 1. Think of the fact that these buttons will, potentially, be pressed more than once. Before we start playing a new sound, we should stop playing any sound that might already have been playing. `player?.stop()` means "If there was an active player, stop whatever sound was playing, otherwise, do nothing."
> 2. This is where we use code to find the path (URL) to where the sound file exists in the app bundle. As programmers, we drag files into our Xcode project, but when the app is compiled, the sound files are copied into a folder that exists on the actual phone (or simulated phone). This code finds the location of the sound file we want, on the user's actual device. If the file can't be found, the `guard` statement stops any further code from running, and shows an error message.
> 3. On line 56, we attempt to create an instance of `AVAudioPlayer` using the URL that should point to a sound file on the user's device. Assuming this works, then the instance of `AVAudioPlayer` is assigned to the stored property named `player` that is created inside `SoundBoardView`. Then, on line 57, the sound file actually starts being played.
> 4. If anything went wrong on any line between 55 and 60, the program will immediately jump to this section of the code and print an error message.

As you can see, there is a lot going on in this view.

So how might we add more sound effects that could be played to this project?

Keep reading to find out.

## Adding a new sound

Adding a new sound is as simple as:

1. Dragging the audio file (.wav or .mp3 format) into the **Sounds** group.
2. Creating an instance of the `Sound` data type, and then adding that instance to the array of `sounds` in `SoundBoardViewModel` or `tracks` in `BackgroundAudioProvider` (see next section for more on background audio).

## Background music

Playing sound effects, or short audio files, on a single view is one thing.

What if we wanted to play background music in our app?

How could loop an audio file?

What would we do to change the background audio file that was playing?

> [!COMING SOON]
> 
> Mr. Gordon has the code written for this, but needs a bit of time later today to do the writeup. If you really need to see how you might add background audio to your app, you are welcome to [browse his source code](https://github.com/lcs-rgordon/SoundExample/tree/2b0dfa63117231b9a0af3a17afb285912a2f8ccf) or [download a copy](https://github.com/lcs-rgordon/SoundExample/archive/2b0dfa63117231b9a0af3a17afb285912a2f8ccf.zip) of the completed app to try it out.

