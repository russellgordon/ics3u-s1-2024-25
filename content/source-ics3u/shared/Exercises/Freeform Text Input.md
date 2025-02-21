---
draft: false
draftSectionTwo: true
enableToc: true
excludeBacklinks: true
created: 2025-02-21T07:00:00.000-0400
createdForSectionTwo: 2025-01-21T07:00:00.000-0400
tags:
---

You have just learned about a big concept – how to [[Separation of Concerns|separate concerns by applying the MVVM design pattern]].

Using MVVM helps when writing apps that accept freeform input, because there is much more work to do – we need to validate user input. It's better to *separate* the code that presents the user interface (our view) from the code that checks user input (the view model) and from the code that describes the data we care about keeping track of (the model).

Recall the role of each layer for the app to calculate powers:

|Layer|Role|
|-|-|
|Model|Hold the base and exponent in numeric form; provide the result of evaluating the power.|
|View Model|Hold the text provided by the user for the base and exponent; provide an instance of the model – the power – where possible, otherwise, provide an appropriate error message.|
|View|Collect input from the user and display whatever output is provided by the view model.|

Your job today is to apply the MVVM design pattern to your arithmetic helper app – transform it from an app that accepts input using steppers, to one that accepts freeform input using textfields. Your app should provide appropriate guidance when the input provided is not in a format that was expected.

> [!TIP]
> 
> Start with defining the model and view model structures. Test your logic in a playground environment. Then move your logic into a real project and add the user interface (view) layer.

> [!NOTE]
> 
> You may wish to review more formally how [guard statements](https://www.avanderlee.com/swift/guard-statements/) work.

Finally, if you'd find it helpful to work in a small group with Mr. Gordon to try writing an app that uses MVVM to perform arithmetic (say, division) then please join him near the TV screen for that conversation.

The purpose is to learn, so please take whatever approach works best for you – proceeding independently, chatting with a peer, or chatting with Mr. Gordon.


