---
draft: false
draftSectionTwo: true
enableToc: true
excludeBacklinks: true
created: 2024-12-06T07:00:00.000-0400
createdForSectionTwo: 2024-11-08T07:00:00.000-0400
tags:
---

## Objective 

The objective of this lesson and the related exercises is to reproduce the following interfaces from the iOS Clock app:

![[World Clock.png|350]]

![[Alarms.png|350]]

![[Stopwatch.png|350]]

## Lesson

This lesson will guide you and your partner through creating most of the **World Clock** interface. 

For the exercises, you will do your best to reproduce the **Alarms** and **Stopwatch** interfaces.

### Create a new project

In Xcode, from the menus, choose **File > New > Project...** then select the **iOS** tab and then **App**, and finally press the **Next** button:

![[Screenshot 2024-11-08 at 6.50.08 AM.png]]

Name the project **Clock** and then choose the following options for the new project – your organization identifier will be different, and that's OK:

![[Screenshot 2024-11-08 at 6.52.29 AM.png]]

Be sure that **Source Control** is enabled and save your work in an appropriate location on your computer – such as your **Grade 11 Computer Science** folder:

![[Screenshot 2024-11-08 at 6.53.32 AM.png]]

Shortly after the project opens, you will see something like this:

![[Screenshot 2024-11-08 at 6.54.41 AM.png]]

### Set up source control

Change to the Source Control navigator by pressing **Command-2**:

Then create a remote:

![[Screenshot 2024-11-08 at 6.55.11 AM.png]]

You can leave the default options:

![[Screenshot 2024-11-08 at 6.56.22 AM.png]]

### Project organization

Two-finger tap or right-click on the **Clock** folder and choose **Convert to Group**:

![[Screenshot 2024-11-08 at 6.58.02 AM.png]]

Drag and drop the **ClockApp** file, so it is between the **Clock** folder and the **PreviewContent** folder:

![[Screenshot 2024-11-08 at 6.59.01 AM.png]]

Two-finger tap or right-click on the **Clock** folder and make a new group:

![[Screenshot 2024-11-08 at 7.01.06 AM.png]]

Name the new group **Views**:

![[Screenshot 2024-11-08 at 7.01.44 AM.png]]

Drag and drop the **ClockApp** file again, so it is between the **Clock** folder and the **Views** folder:

![[Screenshot 2024-11-08 at 7.02.32 AM.png]]

Select the **ContentView** file:

![[Screenshot 2024-11-08 at 7.03.19 AM.png]]

Place your cursor on line 10, where the structure name is defined:

![[Screenshot 2024-11-08 at 7.04.24 AM.png]]

Two-finger tap at that location, choose **Refactor** and then **Rename...**:

![[Screenshot 2024-11-08 at 7.04.34 AM.png]]

You will see something like this:

![[Screenshot 2024-11-08 at 7.05.23 AM.png]]

Change the name of the structure from **ContentView** to **LandingView**:

![[Screenshot 2024-11-08 at 7.05.57 AM.png]]

Press the **Return** key to save these changes.

Finally, drag and drop the **LandingView** file into the **Views** group:

![[Screenshot 2024-11-08 at 7.06.53 AM.png]]

After completing this organization, now is a good time to commit your work. Use the **Option-Command-C** keyboard shortcut and you will see the interface that shows you recent changes:

![[Screenshot 2024-11-08 at 7.09.48 AM.png]]

Type a commit message of:

> Finished project organization.

... then press the **Stage All** button to indicate that you want to commit all the changes:

![[Screenshot 2024-11-08 at 7.10.35 AM.png]]

Finally, press the small down arrow beside the **Commit** button and choose **Commit and Push**:

![[Screenshot 2024-11-08 at 7.11.15 AM.png]]

### Make the tab view

Return to the Project navigator by pressing **Command-1**, then select the **LandingView** file:

![[Screenshot 2024-11-08 at 7.20.13 AM.png]]

The landing view file is going to, very shortly, contain the tab view portion of the interface:

![[World Clock copy.png|350]]

A tab view works by letting the user switch between multiple other views.

We need to create those views now.

Follow these same steps to create three files:

1. **WorldClockView**
2. **AlarmsView**
3. **StopwatchView**

Here are the steps to create **WorldClockView**.

Two-finger tap on the **Views** group and select **New file from template...**

![[Screenshot 2024-11-08 at 7.21.26 AM.png]]

Then choose **SwiftUI View** and select **Next**:

![[Screenshot 2024-11-08 at 7.22.23 AM.png]]

Name the file **WorldClockView** then press **Create**:

![[Screenshot 2024-11-08 at 7.22.48 AM.png]]

Again, follow these same steps to create the next two views – **AlarmsView** and **StopwatchView**.

When you are finished, your project will look like this:

![[Screenshot 2024-11-08 at 7.24.03 AM.png]]

Switch to **WorldClockView**:

![[Screenshot 2024-11-08 at 7.24.34 AM.png]]

Change the `Text` structure so that it says **World Clock**:

![[Screenshot 2024-11-08 at 7.25.21 AM.png]]

Do the same thing with **AlarmsView**:

![[Screenshot 2024-11-08 at 7.25.44 AM.png]]

And the same with **StopwatchView**:

![[Screenshot 2024-11-08 at 7.26.27 AM.png]]

This allows us to tell each of these views apart when we set up the tab view.

Now return to **LandingView**:

![[Screenshot 2024-11-08 at 7.27.15 AM.png]]

Replace the `VStack` with this code:

```swift
        TabView(selection: Binding.constant(1)) {
            
            WorldClockView()
                .tabItem {
                    Image(systemName: "globe")
                    Text("World Clock")
                }
                .tag(1)
            
            AlarmsView()
                .tabItem {
                    Image(systemName: "alarm.fill")
                    Text("Alarm")
                }
                .tag(2)

            StopwatchView()
                .tabItem {
                    Image(systemName: "stopwatch.fill")
                    Text("Stopwatch")
                }
                .tag(3)

        }
```

Your view will look like this:

![[Screenshot 2024-11-08 at 7.35.14 AM.png]]

In the preview at right, you can now click between the tabs at the bottom of the interface.

Look for this line of code:

```swift
        TabView(selection: Binding.constant(1)) {
```

Try changing the value, `1`, to `2` or `3`. What happens? Why do you think that occurs?

This is a good time to commit and push your work. Use the usual steps and commit and push with this message:

> Got the tab view set up.

### Set dark mode and tint

The **Clock** app is a rare app that always presents a dark interface.

Return to **LandingView** and add the following view modifier on line 34, attached to the `TabView` structure:

![[Screenshot 2024-11-08 at 7.39.06 AM.png]]

Now the interface appears in dark mode at all times.

When a tab is highlighted, the default color of that highlight is blue. There are several ways to adjust this. We can do this now by adding the following line of code, on line 35:

![[Screenshot 2024-11-08 at 7.41.11 AM.png]]

Commit and push your work with this message: 

> Set the color scheme and tint.

### Adjust preview

Switch the **WorldClockView** file:

![[Screenshot 2024-11-08 at 7.42.44 AM.png]]

Notice that we no longer see the tab view or dark mode.

This is because the preview is directly showing us the `WorldClockView` structure:

```swift
#Preview {
    WorldClockView()
}
```

Instead, we should have this preview show us the **LandingView** structure.

Change the code on line 17 to do just that:

![[Screenshot 2024-11-08 at 7.44.17 AM.png]]

Now we can begin working on **WorldClockView** and see the tabs and correct color scheme.

> [!TIP]
> 
> If you don't see the **WorldClockView**, go back to **LandingView**, and make sure that on line 12, the value for the selection on the tab view is set to `Binding.constant(1)`.

### Set the title

Next we will add a title to the interface.

To show a title, we must enable navigation. Navigation is a larger topic we will explore in greater depth later on. Right now, we can add the following code to **WorldClockView**:

![[Screenshot 2024-11-08 at 7.53.03 AM.png]]

Nothing changes until we add the `navigationTitle` view modifier:

![[Screenshot 2024-11-08 at 7.53.34 AM.png]]

This is a good time to commit and push your work. Use the usual steps, and the commit message:

> Added a title to the World Clock view.

### Add the toolbar items

The elements at the top of an iOS app interface, highlighted here, are part of what is called the *toolbar*:

![[World Clock 1.png]]

Add the following code below the `navigationTitle` view modifier:

```swift
.toolbar {
	
	ToolbarItem(placement: .topBarLeading) {
		
		Button("Edit") {
			// Does nothing right now
		}
		
	}
	
}
```

Try changing the argument for the `placement` parameter. What happens?

We can add a second button to the toolbar by adding another `ToolbarItem` structure, like this:

![[Screenshot 2024-11-08 at 7.59.41 AM.png]]

We've made great progress, so commit and push with this message:

> Added toolbar items to the interface.

### Make one row

In **WorldClockView**, wrap the `Text` view in a `VStack`:

![[Screenshot 2024-11-08 at 8.02.28 AM.png]]

> [!NOTE]
> 
> *Stop* reading this lesson for a moment, and try your best to reproduce this part of the World Clock interface with your partner – just one row:
> 
> ![[Pasted image 20241206114207.png|350]]
> 
> Use your knowledge of horizontal and vertical stacks, and SwiftUI Views Mastery as a reference. 
> 
> This page has a great reference for [changing the font size of the system font](https://sarunw.com/posts/how-to-change-swiftui-font-size/#system-font).

After a bit of work, you might come up with something like the following:

![[Pasted image 20241111082433.png]]

> [!TIP]
> 
> There are a few design issues to sort out:
> 
> 1. A bit too much space between elements.
> 2. The alignment of items inside the `HStack` is not quite right.
>  
>  To fix these issues, consult [[SwiftUI Views Mastery]], beginning on page 79, and take note especially of the spacing and text-alignment options described on pages 82 through 84.

Once you have a single row showing the **World Clock** interface, this is a good time to commit and push your work. Do that now, using the **Option-Command-C** keyboard shortcut, using this message:

> Finished one row of the World Clock time zone interface.

### Apply abstraction

Once you have the design above, you *could* start to copy-and-paste the `HStack`, and change the `Text` views to get additional entries, like this:

![[Pasted image 20241111083556.png]]

However, that breaks the number one rule of software development:

**D.R.Y.** or **D**on't **R**epeat **Y**ourself

Instead, we could extract the `HStack` into a new subview:

![[Screenshot 2024-11-11 at 8.17.31 AM (2).png]]

Like this:

![[Screenshot 2024-11-11 at 8.19.31 AM.png]]

Then, we can analyze what information the subview is displaying. It needs to show:

1. The time zone offset
2. The city name
3. The current time
4. Whether the time is AM or PM

So, we can add stored properties for those values:

![[Pasted image 20241111082826.png]]

As soon as we add stored properties, where an instance of `ExtractedView` is created, we must pass in *arguments* (answers) for the *parameters* (questions) to populate the stored properties with some values. Like this:

![[Pasted image 20241206120116.png]]

Finally, in order to *see* the values passed into the stored properties of `ExtractedView`, we must *use* the stored properties within the `body` property, which is, of course, a computed property:

![[Pasted image 20241111083153.png]]

> [!NOTE]
> 
> Using stored properties within the `body` computed property is just like what you did with your **GeometricFigures** structure for a 2D or 3D shape:
> 
> ![[Pasted image 20241111083342.png]]
> 
> In that screenshot, the `radius` stored property is used to calculate values for the `diameter`, `area`, `perimeter`, and `description` computed properties.

Once we have done that, we can now replace the second `HSTack` with an instance of `ExtractedView` and pass in different values for the four parameters:

![[Pasted image 20241111083842.png]]

Above, we are using the `ExtractedView` structure by creating two instances of it, each time passing in different values.

It's very easy to add additional cities now – we just create more instances of `ExtractedView`:

![[Pasted image 20241111084143.png]]

Finally, to keep our project organized and readable, we probably want to do a bit more re-factoring.

We can rename the `ExtractedView` structure:

![[Screenshot 2024-11-11 at 8.43.53 AM (2).png]]

To, say, `CityView`:

![[Pasted image 20241111084431.png]]

We press the **Return** key on our keyboard to finish renaming the structure:

![[Pasted image 20241111084515.png]]

Finally (if you are using Xcode 16) you can extract the subview into its own file:

![[Screenshot 2024-11-11 at 8.45.44 AM (2).png]]

Like this:

![[Pasted image 20241111084648.png]]

Which just helps to keep the contents of the **WorldClockView** file from getting too long:

![[Pasted image 20241111084627.png]]

Now is a good time to [[Pushing Commits|commit and push]] your work, using this message:

> Applied abstraction to show many cities in the World Clock user interface using a helper view.

## Exercises

> [!IMPORTANT]
> 
> One member of your driver-navigator team will not have the code you have carefully worked on together during the lesson.
> 
> The partner who *does* have the code needs to use the **View on GitHub** command on their *local* copy of the repository to get the address of their *remote* repository – the same way we all did a couple of days ago:
> 
> ![[Screenshot 2024-12-04 at 8.08.13 PM.png]]
> 
> Then the partner who *does not* have the code right now needs to visit the address of their partner's remote repository, and [[Forking a Repository|fork and clone]] that repository to their own computer.
> 
> Each partner within the pair should then continue on and complete the exercises below independently. 👍🏼

### 1. Alarms

Reproduce the Alarms interface:

![[Alarms.png|350]]

Here is how to get started. You will see the following at first:

![[Pasted image 20241111085154.png]]

Of course, you will want to see the tab view. So, as we did before for the **WorldClockView**, change what is shown by the preview so that it shows the **LandingView** instead:

![[Pasted image 20241111085326.png]]

The only problem is that **LandingView** is showing the first tab, which is the **World Clock** interface.

To fix this, switch to **LandingView**, and change the selected tab from 1 to 2:

![[Pasted image 20241111085931.png]]

Now switch back to **AlarmsView** and add a navigation title like we did for **WorldClockView**:

![[Pasted image 20241111090049.png]]

Then add a `VStack` around the text view:

![[Pasted image 20241111090116.png]]

Now you can continue trying to reproduce the interface.

You might want to start by adding an `HStack`, with text at left, a `Spacer`, and a *toggle* at right, something like this:

![[IMG_1017.jpeg|400]]

...but how? We've never used a `Toggle` view before.

When you add a `Toggle` view, it expects a *binding* for it's second argument, to control whether the toggle switch is "on" or "off":

![[Screenshot 2024-12-06 at 12.15.14 PM.png|600]]

What is a binding? Recall, you [used a binding](https://vimeo.com/1015475836/8c4ea1d1f2#chapter=16048668) with a `Slider` view back when you built your **GeometricFigures** app:

![[Pasted image 20241206121620.png]]

Similar to a `Slider`, a `Toggle` expects to be given a binding – connected to a stored property that is marked with `@State`.

However, when we are building static interfaces like in this exercise – static meaning non-functional – we can use a *constant* binding to skip this step – no need for a stored property to hold whether the toggle is on or not.

So, rather than connecting the `Toggle` to a stored property marked with `@State` we can simply use the code `Binding.constant(true)`, like this:

![[Pasted image 20241111091039.png]]

This forces the toggle to display as though it is "on". Try changing the code to `Binding.constant(false)`. What happens?

From here, do your best to reproduce this interface:

![[Alarms.png|350]]

Use:
- your knowledge of layout concepts using stacks
- your understanding of *abstraction* using custom subviews to stay **D.R.Y.**
- and [[SwiftUI Views Mastery]] as a reference

### 2. Stopwatch

See if you can now reproduce the Stopwatch interface:

![[Stopwatch.png|350]]