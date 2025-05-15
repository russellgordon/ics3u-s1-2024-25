---
draft: false
draftSectionTwo: false
tags: 
created: 2025-05-14T07:00:00.000-0400
createdForSectionTwo: 2025-05-14T07:00:00.000-0400
---
A *sheet* is a user-interface idiom on iOS that is commonly used to show an interface to allow for the addition of new content.

By reading through this brief tutorial, you will learn how to use a sheet that works as shown in this video:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1084398002?h=c5c8aebedf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Adding New Data Using a Sheet"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

> [!NOTE]
> 
> The colour of the sheet is configurable; yellow is used here just to make it plainly obvious where the sheet is, as compared to the view behind the sheet.

## Model

The model for this app is fairly straightforward. 

The `Student` data type is defined as follows:

![[Pasted image 20250514154924.png]]

Several instances of the `Student` data type are also created for testing purposes.

The `currentGrade` stored property is an instance of the `Grade` data type.

Here is the definition of that data type:

![[Pasted image 20250514155053.png]]

The `Grade` data type was defined to avoid having the user be able to type in any given number for the grade of a student – they can only select from one of the four options defined in that enumeration. An enumeration like this works well with the `Picker` structure – we will examine this in more detail later.

## View model

The view model for this app is very basic:

![[Pasted image 20250514155257.png]]

It is an observable class that runs on the main thread (line 10). The class will be observed from the view – the view will react (update) when changes occur to the data in the class.

There is one stored property – a list (array) of students (line 17).

There is a function that allows for the addition of a new student (lines 37 to 42). This function will be invoked by the view shown in the slide-up sheet.

The only novel part of this view model is the computed property, `studentsSorted`. This is used to present the list of students in a sensible order. The `students` array contains students in the order they were added to the array. `studentSorted` is a computed property that returns the same information, but sorted according to the following rules:

1. first by grade
2. next by last name
3. finally, by first name

If we presented the information in the `students` array in the order it was added to the array, it would look like this:

![[RocketSim_Screenshot_iPhone_16_Pro_6.3_2025-05-14_15.58.06.png|300]]


