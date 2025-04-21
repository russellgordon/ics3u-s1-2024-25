---
draft: true
draftSectionTwo: false
excludeBacklinks: false
created: 2024-10-17T07:00:00.000-0400
createdForSectionTwo: 2025-04-14T07:00:00.000-0400
tags:
---

## Requirements

Here are the [requirements for the culminating task](https://lakefieldcs.notion.site/ICS3U-Culminating-Task-2025-1d2d4a49de518073a2e5f221f62d2551).

These requirements are provided in the form of a fill-in-the-blanks template.

## Exemplar

Mr. Gordon has authored [a complete exemplar](https://lakefieldcs.notion.site/ICS3U-Culminating-Task-2025-Exemplar-1d2d4a49de51802f9513ed3a61b82056) for the culminating task.

> [!TIP]
> 
> The best way to understand the requirements for the culminating task is by [reviewing the exemplar](https://lakefieldcs.notion.site/ICS3U-Culminating-Task-2025-Exemplar-1d2d4a49de51802f9513ed3a61b82056).

## Obtain the template

Please go to [Notion](https://notion.so) and add a page based on the culminating task template:

![[Screenshot 2025-04-14 at 8.51.02 AM.png|250]]

## Getting started

Where to start with coding an app from scratch can be a little daunting, at first.

Here are some suggestions about how to get rolling!

1. Either by selecting a choice from the [[ADJ – Brainstorm, Part 2|app design journal]] entry you made earlier, or, by coming up with a new idea, fill in the *purpose*, *audience*, and *beneficial effect* responses in the **Thinking** section of your culminating task portfolio entry.<br/><br/>
2. Then author your Keynote prototype, keeping in mind the principles of [60 Second Prototyping](https://developer.apple.com/videos/play/wwdc2017/818) – prototypes need not be perfect – just complete enough to get feedback on your ideas and improve the plan for your app *before* you start coding.<br/><br/>
3. Get feedback on your prototype as soon as you can. Your partner must provide their feedback in writing (hand-written) during class time. Feedback provided by your partner must be initialled by Mr. Gordon. Then take a photo of that feedback and include it in your culminating task portfolio entry.<br/><br/>
   > [!TIP]
   > 
   > Ideally, after revising your prototype, you might collect additional feedback – the more fully you have thought through your app idea, the better!

4. Begin authoring code by creating a [[iOS Projects|new iOS project]]. Then a great place to start is by considering the *data* your app would need to store – just like what we did when [[Structures#Exercise|modelling the data of a hockey card]] or a [[Modelling a Book Listing|book listing]]. Look at your prototype, and identify what type of information the main screen needs to have. Place that in a structure. For example, Mr. Gordon's main screen for the book review app, from his prototype, looked like this:<br/>
   ![[Screenshot 2024-06-12 at 6.35.23 AM.png|200]]
   <br/>... and [here is the commit Mr. Gordon made](https://github.com/lcs-rgordon/ReadWell2025/blob/aad3d356e04467eb4d1da12147443e6c25b494d6/ReadWell2025/Model/Review.swift#L10-L23) after deciding what information would need to go in his `Review` structure, which represents a review of a single book.<br/><br/>
   > [!TIP]
   > 
   > After you have designed a structure for the main data your app needs to hold, you will benefit from having some *example data* to work with. This is a great place to use a large language model! Here is an [example of a chat](https://chatgpt.com/share/67ff943b-3e24-800b-9975-32c83f6d0e55) one might have to create a few "book reviews" based on the model Mr. Gordon came up with.

5. Where you go next is up to you. Mr. Gordon chose to make [his view model](https://github.com/lcs-rgordon/ReadWell2025/blob/589ba5a6127a9e310b49a4ca6fcbb683707ff61d/ReadWell2025/ViewModels/ReviewsListViewModel.swift#L11-L27), with [an array](https://github.com/lcs-rgordon/ReadWell2025/blob/589ba5a6127a9e310b49a4ca6fcbb683707ff61d/ReadWell2025/ViewModels/ReviewsListViewModel.swift#L16) to hold the reviewed books, and then created his [scrollable list](https://github.com/lcs-rgordon/ReadWell2025/blob/589ba5a6127a9e310b49a4ca6fcbb683707ff61d/ReadWell2025/Views/ReviewsListView.swift#L22-L26). Alternatively, you could try first creating a "[detail view](https://github.com/lcs-rgordon/ReadWell2025/blob/c247cb5d830e30cf1f9aacaed5d9827a96c709c3/ReadWell2025/Views/ReviewDetailView.swift)" based on your prototype in Keynote, and then show one of the [bits of example data](https://github.com/lcs-rgordon/ReadWell2025/blob/c247cb5d830e30cf1f9aacaed5d9827a96c709c3/ReadWell2025/Views/ReviewDetailView.swift#L70) you might have gotten earlier from a chat with a large language model.<br/><br/>
6. Your app will need a way to "gain" data – this might be through the user actually [creating the data themselves](https://github.com/lcs-rgordon/ReadWell2025/blob/eecea4f40d17646603f5826b375c93867634016a/ReadWell2025/Views/AddReviewView.swift), or by your app pulling data from a [[Retrieving Data from a Remote Endpoint|remote web endpoint]], or by showing data you pre-programmed into your app.<br/><br/>
   > [!TIP]
   > 
   > Remember to [[Pushing Commits|commit and push often]] – this forms the bulk of your grade in the **Knowledge** evaluation category (25% of the culminating task).

7. Finally, your app needs to *persist* data. At a minimum this will be done through [[Swipe Gestures and Persisting Data#Persisting jokes|saving information to a JSON file]] but to exceed expectations you could also use a database.<br/><br/>

> [!NOTE]
> 
> Here is the [complete list of commits Mr. Gordon](https://github.com/lcs-rgordon/ReadWell2025/commits/main/) used when creating his exemplar app.
> 
> Reviewing the order of the steps Mr. Gordon took to author his exemplar app might help you decide what order to implement ideas in your own app, however, the necessary steps might vary depending on what you need to do for your app.
> 
> As you work, don't hesitate to ask questions! You can help out your friends, but remember, if you use code someone else wrote, or code that was co-created with a large language model, be sure to [cite](https://github.com/lcs-rgordon/ReadWell2025/blob/875fe04a65b1d249b6327c00e68c45ab4228d4ee/ReadWell2025/README.md?plain=1#L24-L35) [that](https://github.com/lcs-rgordon/ReadWell2025/blob/c247cb5d830e30cf1f9aacaed5d9827a96c709c3/ReadWell2025/Views/StarRatingView.swift#L10-L14) you did so. Images, sounds, or animations you use [should also be cited](https://github.com/lcs-rgordon/ReadWell2025/blob/875fe04a65b1d249b6327c00e68c45ab4228d4ee/ReadWell2025/README.md?plain=1#L5-L22) – the [Creative Commons search portal](https://search.creativecommons.org) is a great resource to find content that you can share, use, and remix into an app.
   