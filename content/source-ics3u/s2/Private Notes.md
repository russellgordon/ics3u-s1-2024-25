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