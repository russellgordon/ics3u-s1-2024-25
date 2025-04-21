---
draft: true
draftSectionTwo: false
created: 2024-12-11T07:00:00.000-0400
createdForSectionTwo: 2025-04-10T07:34:55.000-0400
tags:
---

## Introduction

Please [fork and clone this repository](https://github.com/lcs-rgordon/SpellingMobile) to obtain the code for this project:

![[RocketSim_Screenshot_iPhone_16_Pro_6.3_2025-04-10_08.14.04.png|300]]

Play the game with a partner.

What are some possible *beneficial effects* of this app?

What *audience* of users might this app target?

## Filtering and searching

With Mr. Gordon, we will work together in class to understand, using cards, what it means to filter and search a list.

Remember, when writing an *algorithm* (a recipe), we have three programming concepts to work with:

1. sequence
2. selection
3. iteration

## Exercises

In class, you have just learned how to filter the list of outcomes in this game.

### Fix the buttons

Do you notice anything about the buttons in this game that feels incorrect?

Use boolean variable(s) in the view model, and the `.disabled` view modifier on the buttons, to control when different buttons are enabled or disabled.

> [!SOLUTION]-
> 
> As we play the game, we notice that the green **New Word** button is enabled when it shouldn't be, which leads to incorrect results:
> 
> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1075369169?h=584cbadf75&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="New Word Button Available When It Shouldn&#039;t Be"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
> 
> To solve this problem, we need to add *state* – that is, a new variable – to keep track of when this button should be enabled.
> 
> Where should this variable be declared, though? Remember the MVVM design pattern, and what each layer is meant to be used for:
> 
> ```mermaid
> flowchart LR
> 
> id1["<b>Model</b><br/>Describes data"] --> id2["<b>View Model</b><br/>Manages the state of data<br/>Contains business logic"]
> id2 --> id3["<b>View(s)</b><br/>Presents data"]
> id3 --> id2
> 
> ```
> 
> The view model is meant to hold data, and the view presents that data. 
> 
> So, we add the following stored property to our view model to keep track of when the **New Word** button should be disabled:
> 
> ![[Pasted image 20250414114910.png]]
> 
> If we then immediately make use of the `.disabled` view modifier in the view, we see that the button is disabled, since we defaulted the `isNewWordButtonDisabled` stored property in the view model to `true`:
> 
> ![[Pasted image 20250414115214.png]]
> 
> If we play the game at this point, there will be a problem, because we will never be able to select a new word! 
> 
> So, we must *change the state* of `isNewWordButtonDisabled` at the appropriate time. Then, the user interface will update based on the state (`true` or `false`) of `isNewWordButtonDisabled`.
> 
> If we think about it, we realize that once the user has checked their guess on a given word, that they then need to be able to ask for a new word to keep playing the game. So, we can add this code to our view model function `checkGuess`:
> 
> ![[Pasted image 20250414115512.png]]
> 
> Next, after a new word has been selected... the user should not immediately be able to select a new word. So, we make the button disabled again by adding this code to our view model function named `newWord`:
> 
> ![[Pasted image 20250414120359.png]]
> 
> Now, when we try out the app, we will see that the button is available for use only at the appropriate times during game play:
> 
> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1075378759?h=54999b9dd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="New Word Button is Available at the Correct Times"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Use tabs

The interface feels a bit crowded with the scrollable list right below the main user interface of the game.

You have [[Swipe Gestures and Persisting Data#Sharing data|previously learned]] how to share data between screens (views) in an app using the *environment*.

Use that same approach to put the array of previous results on one view within this app, and the main user interface of the quiz on its own view.

> [!SOLUTION]-
> 
> We [[Swipe Gestures and Persisting Data#Sharing data|previously learned]] how to share data between tabs in the JokeFinder app.
> 
> Now, we will use the same approach to share data between tabs in this app. Here is the overview of what we will attempt to do:
> 
> ```mermaid
> flowchart LR
> subgraph aep["&nbsp;"]
> 	direction TB
> 	id1["<b>App Entry Point</b>"]
> 	id2[("<b>QuizViewModel</b><br/><em>Observable class</em>")]
> end
> subgraph ae["<b>App's Environment</b>"]
> 	direction LR
> 	id3["<b>QuizView</b>"]
> 	id4["<b>HistoryView</b>"]
> end
> id1-.creates instance of.->id2
> aep-- inserted into -->ae
> id3~~~id4
> id3~~~|All subviews<br/>can access<br/>the view model<br/>via @Environment<br/>property wrapper|id3
> ```
> 
> This video shows you how to get started, and introduces the `@Bindable` property wrapper, which allows for a two-way, or read-write connection to the view model from the views that access it through the environment:
> 
> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1075413396?h=914f42047a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Bindable (Two way or read-write) Access to the View Model"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
> 
> Now, conceptually, the app architecture is the same, but notice there is a two-way arrow or connection between the view model and views that access it through the environment:
> 
> ```mermaid
> flowchart LR
> subgraph aep["&nbsp;"]
> 	direction TB
> 	id1["<b>App Entry Point</b>"]
> 	id2[("<b>QuizViewModel</b><br/><em>Observable class</em>")]
> end
> subgraph ae["<b>App's Environment</b>"]
> 	direction LR
> 	id3["<b>QuizView</b>"]
> 	id4["<b>HistoryView</b>"]
> end
> id1-.creates instance of.->id2
> aep<-- inserted into -->ae
> id3~~~id4
> id3~~~|<br/>View model access is<br/>read-write when @Bindable is used<br/> in combination with @Environment|id3
> ```
> 
> As was mentioned in the video above, once you learn how to use the `@Bindable` property wrapper, I think that if you [[Swipe Gestures and Persisting Data#Sharing data|review the instructions given earlier when building the JokeFinder app]], you should be able to build out the desired two-tab interface.
> 
> However, if you'd like, you can watch this short video below, where the complete solution to this exercise is shared:
> 
> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1075499008?h=4aef5da23e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Adding a Second Tab to the Spelling App"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Add search

Instead of filtering, what if the user could search the list of outcomes based on text they type in?

Write a function to allow for this. Use the `.searchable` view modifier on the scrollable list to allow the user to type in a search string.

> [!TIP]
> 
> An entry to explain the solution to this exercise is coming shortly.