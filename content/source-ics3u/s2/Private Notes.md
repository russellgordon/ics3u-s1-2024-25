---
draft: true
draftSectionTwo: true
tags:
---
This is a space to make private notes and observations regarding students. This page will not be published to the web.

City model

Adjust city view

Create instances of cities...

Iterate over all the cities...

Exercise: Fruits and their health benefits

This has been done below, on line 66:

![[Screenshot 2023-01-21 at 8.44.03 AM.png]]

By placing instances of a structure into an array (also known as a list, lowercase "l"), a very nice edit can be made to the `PlayerListView` page:

![[Screenshot 2023-01-21 at 8.47.39 AM.png]]

Now, the `List` structure on line 13 is accepting the array (or list) named `allPlayers`.

The `List` structure in SwiftUI iterates over the `allPlayers` array, which contains:

|Index|Element|
|-|-|
|0|kellyGruber|
|1|joeCarter|
|2|patBorders|
|3|tonyFernandez|
|4|georgeBell|

With each iteration the next player in the array is temporarily inserted into `currentPlayer` and then used to create a `NavigationLink`.

In turn, that instance of `currentPlayer` (which changes as the loop iterates) is passed along to the `DetailView` to allow each card to be shown.

This is very much like what happened earlier in the example from the command line app:

![[Screenshot 2023-01-21 at 8.56.13 AM.png]]

Here, the loop on line 14 iterates over the array, and each band member's name is printed to the screen on line 15.

There is *one* final change that must be made, however.

To use an instance of a structure with `List` in SwiftUI, that instance must be uniquely identifiable.

When a structure is used with a `List`, but each instance cannot be uniquely identified, this error will appear:

![[Screenshot 2023-01-21 at 8.59.47 AM.png]]

To fix this, we declare that our `TradingCard` structure will conform to the `Identifiable` protocol by making the change shown on line 10 – note that the *old* code is shown in dark grey, and the *new* code is shown in dark blue:

![[Screenshot 2023-01-21 at 9.14.38 AM.png]]

Finally, on line 12, we actually make instances of the `TradingCard` structure uniquely identifiable by adding a stored property named `id` and assigning it a default value of `UUID()`, using the  assignment operator, `=`.

`UUID` is short for "universally unique identifier".

With those minor changes to `TradingCard`, the `List` structure back on the list view is now happy and shows each player in the `allPlayers` array:

![[Screenshot 2023-01-21 at 9.17.05 AM.png]]

# Module 3 - End of mod

## Kaan - (90 before, ask 94, set to maybe 92, portfolio is in better shape in this mod)

*end of mod 2 feedback was...*

Kaan, I have no doubt that you can apply abstraction – you showed this when you completed the Trading Cards application, and the user was able to swipe between several cards that showed different information. Where you have real room for improvement is understanding that terminology – below in your self-assessment you described not having used abstraction much, but that bit of subject-specific vocabulary was frequently included in lessons in this module. So, my advice to you on how to improve your achievement going forward is to read lessons for understanding, take more careful notes about new terms and concepts, and then demonstrate that you can communicate accurately about concepts using the vocabulary of the course by writing more thoroughly in your portfolio posts. Thinking tasks through by making and sharing a clear plan before authoring code is another area for improvement, as is effective use of source control. You only made two commits in your revised trading card task – by striving to demonstrate your understanding of layout and use of custom structures with a more significant re-design of your card – you would have naturally generated more evidence of understanding of the course learning goals. At this point in time, your portfolio and the evidence it holds relative to learning goals supports a grade of 90, which still exceeds expectations (based on your repeated evidence of applying several concepts). To improve (or avoid your grade falling further in the future) be sure to act on the feedback given above. I am here to help, as always – don’t hesitate to drop by Grove Time sessions.

... better evidence now of use of source control... did a good job of replying to discussion questions... didn't quite finish exercises related to databases... had some initial trouble with the IPO assignment, didn't get history to be stored in an array... portfolio in better shape in terms of evidence... 94 might be OK... needs to continue staying on top of assigned tasks, asking questions, writing using subject-specific vocabulary... using source control well. 25.5/30 on SQL quiz

## Thomas (96 before, 98 was proposed, drop to 93...)

*Feedback from end of thread 2...*

Thomas, you were clearly pressed for time – in the next module, one thing I’ll be looking for is to see you starting tasks earlier more often. Your self-assessment here is incomplete – although your learning-skills self-assessment has been filled in, your reflection and examination of how the evidence in your portfolio supports each course learning goal is not present. Overall, here is my feedback – when you have the time / make the time to complete a task, you do it extremely well. You clearly are able to apply and explain the big ideas of this course so far (abstraction using helper views, layout using structures, organizing data using a model). Sometimes you do miss key details by perhaps rushing through a reading of instructions for a given task or lesson – you will benefit from slowing down, here. Use of source control (committing and pushing more frequently as you work on a task) is another area for improvement. At this point in time, your portfolio supports a grade of 96%. Keep up a strong effort, in particular, be sure to get a start on assignments earlier in the coming mod. You’ve got this. 👍🏼

Away a lot for hockey. Missing SQL exercises (left work on this until after end of mod). Did a pretty good job of keeping up. IPO assignment done well, including arrays. Day 7, for example, is incomplete (no screenshots, no responses to the questions from that day) 25.5/30 on SQL quiz... a lot of earlier lessons have responses to reflection questions but no evidence that the tasks were actually completed in portfolio... GitHub does show that the code for at least some tasks were completed

## Ethan (96 proposed, stay there)

Nice work on challenging IPO task. Could have used computed property to output activity levels. Portfolio posts pretty thorough.

Prior comment was:

Ethan, you are definitely doing all the right things to make progress at a level that exceeds expectations in this course. You have a good understanding of how to express complex interfaces using structures. You have shown that you know how to apply abstraction using arrays and helper views. You make great use of source control! You write enough in portfolio posts for it to be clear that you understand the subject-specific vocabulary of the course. You can improve further by aiming to be a bit more ambitious with a given task (for example, your trading cards revision was an evolution of your original – which was fine – but trying for a more ambitious re-design would have afforded you even more of an opportunity to demonstrate your understanding of all the key concepts in this course). Be sure in the future that you are sharing plans for a task in your portfolio before sharing the final product. Your portfolio supports sustaining your grade of 96%. Keep up the steady effort! It’s a pleasure to have you in this class.

Suggested 96, that's good with me.

## Harshan (prior 88, ask was 93, set to 88)

Some responses missing earlier in mod. Lessons completed, but responses not always given to prompts. 23.5/30 on SQL quiz. Needs to make time to complete tasks thoroughly.

Prior comment was:

Harshan, it’s clear you were pressed for time in this past module. Some of your work was rushed, and it showed. The evidence in your portfolio to date, at this point in time, shows that you clearly know how to use structures to describe and organize related data. You can express and build user interfaces with structures, using the SwiftUI framework, as we have learned in class. Based on our conversations, my observations of your work in class, and the evidence and products in your portfolio, your understanding of a key topic – abstraction using helper views and arrays – is an area for improvement. So to is your understanding of source control. Going forward, it will be important to set aside sufficient time to absorb and apply the concepts we are learning. By writing more thoroughly in your portfolio to share the process by which you completed a task over time – not just sharing the finished product – you can better demonstrate your understanding of key concepts and your ability to accurately use subject-specific vocabulary. Your portfolio, right now, supports a grade of 88%. You can, and are certainly encouraged to, make time to add to your portfolio both while the course is “on” in a mod, and outside of a mod when you have time. I am available for feedback both in person (during Grove Time when off-mod with this course), in class (when we are “on-mod” with this course), and always through our portfolio. Keep up a strong effort. You’ve got this. 👍🏼

## Elaine (prior 92, ask 89, set to 88)

Self-evaluation largely blank. Grocery Store flyer app mostly completed.Completed exercises in first half of the mod well. Trouble with IPO app but got it to accept input and show correct output. Did not get array working correctly to save history of results. 25.5/30 on SQL quiz.

Prior comment was:

Elaine, you clearly know how to use structures to organize data and build user interfaces. You describe the process by which you have built a product in your portfolio pretty well, and most of the time, you are responsive to feedback given in person and through your portfolio about how to improve. Using source control more effectively is an area for improvement – it’s vital that you commit and push frequently so that a) your work is backed up more often and b) the natural evolution of your work, made over time, is clear for a given task. To put this another way – one commit for your finished product is something you must avoid for future tasks. Beyond this, I want you to do two things to improve further. First, make a plan and share it well in advance of your finished product. Two, ask for help more often – I get the sense that you sometimes struggle a problem until you are frustrated. I never really want that for students – I do want you to try more than a little to solve a given problem you encounter – but knowing when to take a step back and ask for help is a key skill so that you are not spending more time than is reasonable on this course. Right now, your portfolio, my observations of your work in class, and our conversations, support a grade of 92%. Be sure you act on the feedback above and take all opportunities that are presented in the next module to further demonstrate your understanding. You’ve got this. 👍🏼

## Joseph (prior 98, ask to stay at 98, set to 97)

SQL exercises said to be all done, did not include screenshot of each one, though

23/30 on SQL Quiz. Not all SQL exercises shown as complete. Area for improvement. IPO assignment was well done. Classes vs. structures misunderstood. Missed responses to dynamic lists on day 5. Time management a bit of an issue.



*Prior comment was...*

Joseph, you clearly demonstrated through your regular, detailed portfolio posts, your understanding of key concepts such as abstraction using helper views and arrays. You make great use of subject-specific vocabulary in these posts. You made a very strong effort to improve your trading cards for the second revision, which provided you naturally with even more evidence of understanding to share in your portfolio. A modest area for improvement is to always share a brief plan – in a post well before you make further posts to share progress and your final product. This will make it easier for you compare your plan (expected output) to your results (actual output) and make corrections. Right now, I concur that your portfolio supports a grade of 98%. Keep up your fine effort. 👍🏼

## Michael (prior 82, ask 95 set to 78)

Day 3 post on structures vs. classes good. Animations not complete (screenshot with no text to go with it). Day 4 largely blank. A lot of entries missing information, either responses to reflection questions or evidence of completing exercises. IPO task complete with basic functionality but not the use of arrays. Not sure it was completed fully. Only showing one SQL exercise complete. 19.5/30 on SQL quiz. Looks like to-do list was largely done but missing much writing in any posts. Check responses to earlier discussion questions. Distraction / distracting in class at times. He knows this.

End of thread self-assessment largely blank.

*Prior comment was...*

Michael, you’ve made significant strides to improve your portfolio in this most recent module. This was not true for the entire module (earlier on, it was very incomplete and disorganized) so a key area for you to improve going forward to is consistently make clear posts, for each class, as the module progresses. By doing this, and writing more extensively in each post to describe your understanding, you can access another channel for support – you can ask questions, and I can provide feedback on what you have written. This back-and-forth communication as you work through tasks in this course is an important part of the learning process. Right now, it’s clear you can apply the concepts of abstraction using helper views and arrays. It’s not as clear that you can describe what these concepts are, and how they really work. Make a point of pairing evidence of your progress on a task in your portfolio with a summary of what was new to you, in writing. Pair the code and screenshot with a summary of what concepts you made use of to complete the task. In this way, you can improve further. Right now, your portfolio and the evidence it contains relative to the course learning goals supports a grade of 82%. Keep up your steady effort, and do not hesitate to seek assistance as the course unfolds. I am here to help. You’ve got this. 👍🏼



## Marcus (prior 93, ask 97 set to 94)

SQL quiz 25/30. Got IPO app to work including saving result to history list. Grocery Store Flyer app gotten to point of having basic navigation to a detail view with various bits of information shown. Day 4 interactive apps lesson done, no exercises, but has responses to reflection prompts. Most lessons and responses done, but some missing (day 6). 

*Old comment was...*

Marcus, can definitely apply abstraction – you are able to author custom structures and use arrays. You are skilled at debugging logical errors and syntax errors. There is room for improvement in your process – your work has clearly been rushed at times, and the quality of your work has suffered a bit for it. Using source control to more frequently commit your changes over time is an area for improvement. A more significant effort to revise your trading cards in the end-of-mod assignment, including a clear plan authored and shared in advance – would have given you more of an opportunity to accumulate evidence of understanding and progress against course learning goals. Another area to improve is accurate and thorough summaries of your work, using subject-specific vocabulary. The posts you’ve made have been a bit sparse in the writing department. Overall, I am certain that with a more sustained effort across the coming mod in January – from start to finish – you can raise your level of achievement. Right now, based on what is in your portfolio, what I have observed in class, and our conversations, a grade of 93% is supported. You can do this. Keep up a steady effort. 👍🏼

## Daniel (prior 96, ask 97 set to 97)

SQL Quiz 24/30. IPO task completed with array history working. Nice use of a function for finding the letter grade for a given mark. Solid work overall. Focus on continuing to practice use of subject-specific vocabulary both in person and in writing. Did a good job even though starting the mod late and missed review exercises.

*Old comment was...*

Daniel, your eagerness to learn and improve are refreshing. I really mean that. You are so receptive to feedback and you make a clear effort to act on the feedback received. You have repeatedly shown that you can apply and explain key concepts such as how to apply abstraction using helper views and arrays. Using source control more effectively – committing and pushing to a) backup your work more often and b) show the organic growth of your solution in code over time – is one key area for improvement. A second area to improve is making a clear plan before authoring code. You should always be sharing your plan well before producing in-progress code a completed code. Definitely, for a given task, it would be expected that you will have several individual posts in your portfolio. Right now, based on the evidence in your portfolio, our conversations in class, and my observations of your work in class, a grade of 96% is supported. Keep up your fine effort and strong use of time in class as the year unfolds. 👍🏼



## Collin (prior 77, ask ??, set to 64) 

Did not complete end-of-mod self assessment.

Grocery Store Flyer app completed to the point of showing a detail view and having prices overlaid on images. Structures vs. classes completed. Day 4 (interactive apps) and Day 5 (dynamic lists) not in portfolio at all. Work not committed or pushed to GitHub (for example, GuessingGame) so hard to evaluate progress there. Day 6 seemingly completed, but work not pushed to GitHub and no responses to reflection questions. Day 7 not completed at all. Days 8, 9, and 10 incomplete (could not finish IPO task). 16/30 on SQL quiz. No work on the to-do list tutorials at the end of the mod.

Old comment was...

Collin, you can definitely make use of structures to express a user interface, even if what there is evidence of here in your portfolio leans toward interfaces that are a bit on the simpler side. You definitely can describe and have shown that you can use structures to organize data – for example when you completed the Geometric Figures task in the first module, to model a rectangle. Understanding how to use structures to apply abstraction – particular helper views and the use of arrays, which are the two big topics from the second module – are major areas for improvement. When you’ve dropped by to seek help in person, you make great progress. Near the end of the module you started to ask for one-on-one conversations more often in class. If that’s the best way for you to learn, and it seems that it is – you should definitely continue to do that consistently. I am here to help as your primary resource; SICs such as Ben are there as a secondary form of support to answer quick questions that you might be stuck on. Right now your portfolio is missing significant portions of evidence connected to tasks and assignments from the second module. What is in your portfolio at present, together with my observations of your work in class, and our conversations regarding key concepts – all of this together supports a grade of 77%. This can change quickly as new evidence of understanding gets into your portfolio. I look forward to supporting that growth in your understanding in the coming weeks and when this course resumes in January. Don’t give up – you’ve got this. 👍🏼

## Ainsley (prior 82, ask 82 or thereabouts, set to 80)

Got Grocery Store Flyer app to the point of navigating to a detail view. 

Quite a few places where exercises were not completed or responses were not given to reflection prompts. IPO task largely done but ability to create a custom data type to store the result along with the year checked was missing. 23.5/30 on SQL quiz. To-do list tutorials not completed.

*Old comment was...*

Ainsley, definitely agreed that your ability to compare actual output to expected output, and make adjustments – in other words, your ability to correct logical errors – has improved a lot. You clearly know how to select appropriate data types, and organize related data into structures (a model) well. Repeated examples of how you can use and structures to apply abstraction – such as through the use of helper views and arrays – as well as your ability to describe these topics using subject-specific vocabulary – these are areas to improve. As you noted, timely additions to your portfolio are another area for improvement. Being able to access feedback from me, based on what you post and write about for each class – that’s a key channel for making improvements that you mostly missed out on in this most recent module. Using source control effectively – committing and pushing your work frequently over time to show the organic growth of your solution to a given task – that is one more growth area. Right now, your portfolio’s evidence, my observations of your work in class, and our conversations – together, they support a grade of 82%. Keep up a positive outlook and a steady effort – I’m really excited to see what custom app you choose to build later in this course, and I look forward to supporting you as you plan that app out and build it. 👍🏼

## Hannu (prior 95, ask 96, set to 97)

Great work on review activity (one of few students who was really able to run with this). Needs to tag entries in portfolio. Naming portfolio entries (based on topic) is a good idea too. Very busy with hockey but kept up and went above and beyond on IPO task.

*Old comment...*

Hannu, you are a thorough student and the dedication you are putting into your studies definitely shows. In this course you have ample evidence in your portfolio to show that you understand key topics from this most recent module – such as how to use helper views and arrays to apply abstraction and author compact code. You use subject-specific vocabulary with precision and can explain these concepts as well, which further demonstrates your understanding. Two modest areas for improvement are to consistently use [code style conventions](https://ics3u-s2-2024-25.russellgordon.ca/Concepts/Code-Style-Conventions) and to organize files within your project more carefully (use of “Views” and “Model” folders, ensuring filenames match the structure names held inside a file). Your portfolio, my observations of your work in class, and our conversations all support a grade of 95% at this point in time. Keep up your fine effort. 👍🏼

## Isla (prior 92, ask 95 to 98, set to ??)

(no old comment on portfolio could be found, might have been made by Isla after reviews were completed)

28/30 on SQL quiz.

Entries largely complete and well written, really good work on IPO task.  Set to 96. 

## Kevin (prior 85, ask 90, set to 82)

Self-assessment partially blank. 22.5/30 Quite a few entries showing exercises were not completed. Almost never responded to reflection prompts. 

*Old comment was...*

Kevin, you can clearly use structures to group related information and organize data. You make good choices about what data types to use for a given property within a structure. You have shown that you can apply abstraction in an app to author compact code. Where there is room for improvement is in how you organize your work within a project – be sure you are using folders as demonstrated in the lesson to organize views and model files. Names of files should match the names of structures. Describing your process, rather than just your finished product, is key. Share a plan well in advance of sharing your code. Show the development of your work over time through several portfolio posts. As you go, describe what you done using subject-specific vocabulary. When given a task, aim high – the more ambitious a design, the more opportunities you will have to demonstrate your understanding of how to build complex user interfaces and apply abstraction. By writing in a more thorough manner to share your progress through assigned tasks, you will provide me with more information about your understanding. In turn I can provide you with more and better feedback to help you improve. It’s a virtuous cycle, but it begins with you putting forth the effort to more fully share what you have done and are doing with each set of tasks you work on. Right now, considering what is in your portfolio, what we have spoke about together in person, and what I observe of your effort and work in class, a grade of 85% is supported. You’ve got this – keep up a steady effort. 👍🏼

## Kyle (prior 93, ask 95, set to 94)

Self-assessment partially incomplete.

Strong on quiz: 25.5/30. Portfolio pretty solid. Exercises and responses to reflection prompts largely completed. IPO app done and correct, including array, but could be committing and pushing work more often.

*Old comment was...*

Kyle, I think you are a steady worker in class, who makes good use of time. You co-operate well with your peers when completing tasks using the driver-navigator pattern. You are clearly able to use structures and arrays to apply abstraction. There were a few cases where some opportunities to use helper views were missed in your work in this module. Be sure to seek help if you’re not quite sure about something – you tend to be pretty independent and quiet in class (which is not a bad thing!) but you should also be certain that if you are stuck on something, you are asking for help so that you can get un-stuck and keep making progress. When tasks are assigned in the coming module, look for ways you can really exceed expectations – by taking on something really challenging, you will naturally accumulate lots of great new evidence of understanding connected to course learning goals. That can help you to further raise your level of achievement. For now, what is in your portfolio, together with what I have observed of your work in class, and our conversations, supports maintaining your grade at 93%. I encourage you to keep putting forth a strong effort as the course unfolds.

## Courage (prior 98, ask ??, set to 99)

Could stay 98... maybe 99...

*Old comment was...*

Courage, we’re in agreement on your progress. You make really good use of time in class. You will ask for clarification about a topic, as needed. You make your portfolio posts in a timely manner (which means you get feedback from me in a timely manner). Your posts don’t just show what you did, but include a summary of your understanding and learning using subject-specific vocabulary. The writing, from what I can see, is authentically yours. From this, it’s clear that you can both apply a given concept (like abstraction to author compact code) and also describe how a concept works. That’s evidence of really understanding a given idea. Keep up your fine effort. A grade of 98% is supported at this point in time. I look forward to continuing to support your learning and growth as a software developer. See you in January!


# Module 3 - Mid-mod / End-of-mod Portfolio Review

Collin – BE
Ethan – ME
Kaan – ME
Kevin – ME
(get more practice string to other data types)
Ainsley – ME
(operators exercises)
Thomas – ME
Hannu – EE
Kyle – ME
(enumeration)
Marcus – ME 
input, checking the input, want to understand arrays / history a bit better
Courage – EE
Joseph – EE
Harshan – ME
Elaine - ME
Daniel - EE
Michael - BE (needs to add evidence to portfolio)

# Module 3 – Database exercises

*Who made best efforts to complete these exercises on a 0-2 scale?*

## Kaan

0


# End of module 1 reviews

## Ainsley

80% ✔️ 

## Isla

97% ✔️ 

## Elaine

93% ✔️ 

## Courage

97% ✔️ 

## Daniel

95% ✔️ 

## Kaan

94% ✔️ 

## Kevin

88% -> 86%

## Ethan

96% ✔️ 

## Collin

90% -> 87% ✔️ 

## Thomas

97% ✔️ 

## Joseph

96% ✔️ 

## Michael

80% -> 73% ✔️ 

## Kyle

93% ✔️ 

## Hannu

94% ✔️ 

## Marcus

96% -> 93% ✔️ 

## Harshan

92% ✔️ 

# Mid-module reviews- Mod 1

Isla - ME
Elaine - ME
Marcus - ME
Harshan - ME
Ethan - ME
Collin - ME
Kaan - ME
Kevin - ME
Daniel - ME
Thomas - ME
Michael - ME
Kyle - ME
Courage - ME
Hannu - ME
Joseph - ME

# Mid-module reviews- Mod 2

Isla - EE
Ainsley - ME
Elaine - ME
Marcus - BE
Harshan - ME
Ethan - EE
Collin -  BE (Lexi - Peer Helper - 7:00 - 8:45 )
Kaan - ME
Kevin - ME
Daniel - EE
Thomas - EE
Michael - BE
Kyle - ME
Courage - EE
Hannu - ME
Joseph - ME


# Things to look at

Why this happens:

![[Screenshot 2024-09-25 at 7.12.45 AM.png]]

# Student Interests and Notes

- Kaan
	- Favourite sport is basketball. Also watches MMA / muay thai.
- Amelia
	- Favourite sports are field hockey and soccer.
- Thomas
	- No entry yet.
- Ethan
	- Loves Roald Dahl. "The Giraffe and the Pelly and Me". 
	- Loves to play basketball.
	- Saw "The Prestige" over the summer.
- Carlos
	- Favourite sport is soccer.
	- Not much prior experience using a computer.
- Minal
	- Best movie watched recently: Talk to Me (horror)
	- Big volleyball player. Loves to watch soccer.
- Elaine
	- Really excited to learn about CS and ways of connecting it to mathematics.
	- Loves to watch Formula 1 and NBA basketball. Big sports fan.
- Joseph
	- Favourite book: "Breathe" by Ted Chiang.
	- Really likes soccer and Manchester City in particular.
- Michael
	- Learning English – needs help with this, wants me to know.
- Daniel
	- "I am talkative, love sharing and group project. Favourite book would be Steve Jobs, best movie: Player Number One. I like to play soccer, badminton and swim. I do like games, if there is some programs in class thats is related to games that would be interesting."
- Marcus
	- Loves to ski, likes basketball
	- Really keen to learn about SDLC and making apps
- Collin
	- Keen to learn to program games – I mentioned [SwiftGodot](https://github.com/migueldeicaza/SwiftGodot?tab=readme-ov-file) to him.
	- Big gamer.
	- Loves rugby.
	- Needs reminders to stay on task – doesn't do well with long written tutorials or videos. 😬
- Hannu
	- Finnish-Canadian
	- Loves Gordon Korman books!
	- Into hockey
	- Best movie: Jack Reacher
- Isla
	- Big reader, loves volleyball.
	- Sounds like some prior experience with coding.
	- Planning to take a STEM-connected major.
- Kevin Wu
	- Best book lately: Born a Crime (Trevor Noah)
	- Loves to play tennis and basketball.
- Kyle
	- Favourite book: Harry Potter series
	- Best movie recently: Lord of the Rings
	- Loves badminton.
- Courage
	- "My favourite series of book at the moment is The Culture by Iain Banks. I am starting to read Arrival written by Ted Chiang. The best film in my opinion is either Tenet or Interstellar by Christopher Nolan. I play tennis and watch tennis."
- Ainsley
	- Favourite movie: Original Mean Girls movie and original Maze Runner movie.
	- Likes the Hunger Games book series, and watching gymnastics.
	- Nothing else in particular to know.
- Harshan
	- Loves basketball
	- Excited to build apps that help others
	- 