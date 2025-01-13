---
tags:
  - A1.4
created: 2024-10-16T07:00:00.000-0400
createdForSectionTwo: 2024-09-23T00:34:55.000-0400
draft: false
draftSectionTwo: false
---

> [!NOTE]
> 
> Mr. Gordon generated this concept summary and the related exercises using ChatGPT (here are the [prompts given and responses received](https://chatgpt.com/share/6720cd44-51f8-800b-950d-7f6adbe0755c)).
> 
> He then edited the results for clarity, accuracy, and brevity.

## Arithmetic Operators

Swift supports the standard arithmetic operators found in most programming languages:

- `+` (Addition): Adds two values together.  
    Example: `2 + 3 // Result: 5`
- `-` (Subtraction): Subtracts one value from another.  
    Example: `5 - 2 // Result: 3`
- `*` (Multiplication): Multiplies two values.  
    Example: `4 * 3 // Result: 12`
- `/` (Division): Divides one value by another.  
    Example: `10 / 2 // Result: 5`
- `%` (Remainder): Returns the remainder of division, when using integers.  
    Example: `9 % 4 // Result: 1`

On a related note, in Swift, the `remainder(dividingBy:)` method for the `Double` data type computes the remainder when a value is divided by another `Double`. This method returns the remainder of the division, keeping the sign of the original value.

Here is the basic syntax:

```swift
let remainder = someDouble.remainder(dividingBy: anotherDouble)
```

Here is a simple example:

```swift
let number = 14.0
let divisor = 2.5
let result = number.remainder(dividingBy: divisor)
print("Remainder: \(result)")  // Output: Remainder: 1.5
```

In this example, `14.0` divided by `2.5` leaves a remainder of `1.5`.

## Assignment Operators

- `=` (Assignment): Assigns a value to a variable.  
    Example: `let a = 5` assigns the value `5` to the constant `a`.

The assignment operator can be combined with arithmetic operators to update a variable's value:

- `+=`: Add and assign  
    Example: 
    ```swift
	var b = 3
	b += 2 // Result: b is now 5  
	```
- `-=`: Subtract and assign  
    Example: 
    ```swift
	var c = 8
	c -= 3 // Result: c is now 5
	```
- `*=`: Multiply and assign  
    Example: 
    ```swift
	var d = 4
	d *= 2 // Result: d is now 8
	```
- `/=`: Divide and assign  
    Example:
    ```swift
	var e = 10
	e /= 2 // Result: e is now 5
	```
- `%=`: Modulo and assign  
    Example:
    ```swift
	var f = 9
	f %= 4 // Result: f is now 1
	```

## Exercises

Create a new [[Xcode Playgrounds|Xcode playground]] named **Operators** to complete these exercises.

You can do these regular exercises (immediately below), or skip ahead and [[Operators#Exercises Taylor's Version|do the Taylor Swift themed exercises]]. I know what I'd pick! 🎶

### 1: Simple Arithmetic

1. Use variables to store the values `10` and `3`.
2. Perform the following operations with the two variables you created, and print the results:
    - Addition
    - Subtraction
    - Multiplication
    - Division
    - Remainder

### 2: Updating Values

1. Create a variable called `score` and set its value to `50`.
2. Use the assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`) to update the value of `score` with different numbers. Print the results after each update.

### 3: Combining Operators

1. Create a variable called `result` and assign it an initial value of `100`.
2. Use a combination of arithmetic and assignment operators to perform the following tasks:
    - Subtract 20 from `result`.
    - Divide `result` by 2.
    - Multiply `result` by 5.
    - Take the remainder of `result` divided by 7.

### 4: Calculating Total Cost

1. Imagine you're shopping. Start with a variable called `totalCost` set to `0.0`.
2. Add the following item costs to `totalCost` using the `+=` operator:
    - $19.99
    - $25.50
    - $8.75
3. Print the final total.

### 5: Remainders

1. You are baking cookies and have `12.5` cups of flour. Each batch of cookies requires exactly `2.75` cups of flour. Write a program to calculate how much flour will be left over after making as many full batches of cookies as possible. Use the `Double` type and the `remainder(dividingBy:)` method.

## Exercises: Taylor's Version

### 1: Simple Arithmetic

_"Addition is the best thing that's ever been mine!"_

1. Taylor just finished her _Eras Tour_ and wants to tally up some numbers. She performed 10 concerts in the U.S. and 3 concerts internationally.
2. Use variables to store the values `10` (U.S. concerts) and `3` (international concerts).
3. Perform the following operations and print the results:
    - How many total concerts did Taylor perform?
    - If Taylor had to cancel 4 concerts from the total, how many would be left?
    - If each U.S. concert had 50,000 attendees, how many total attendees were there for the U.S. shows?
    - If Taylor sold 120,000 total tickets for her international shows and you divide them equally between the 3 concerts, how many tickets were sold per show?
    - If Taylor released 9 versions of her _1989_ album and numbered them, what would be the remainder if you divide the total number by 4?

### 2: Updating Values

 _"It's a Love Story (in numbers)"_

1. Taylor has 27 original songs on her _Fearless_ (Taylor's Version) album, but she’s been writing more!
2. Create a variable called `totalSongs` and set its value to `27`.
3. Use the assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`) to update the value of `totalSongs` as Taylor adds or removes songs:
    - Taylor writes 10 more songs.
    - She removes 5 songs from the set list for her next concert.
    - She triples the number of songs to record different versions for different countries.
    - She decides to split the total number of songs equally across 3 albums.
    - She wonders how many songs would be left if she tried to fit the total into sets of 6.

### 3: Combining Operators

_"Shake it up!"_

1. Create a variable called `toursCompleted` and assign it the value `3` (representing Taylor's completed tours).
2. Update `toursCompleted` to reflect the following:
    - Taylor announces 2 more tours next year.
    - Due to scheduling, she cancels 1 tour.
    - She multiplies her total tours by 2 as she plans to perform each one twice.
    - Taylor divides her tours equally across 4 continents.
    - She wants to know how many tours would be left over if she grouped them into sets of 3.

### 4: Ticket Sales

_"Ticketmaster, look what you made me do!"_

1. Taylor is tracking her concert ticket sales. She starts with a variable called `totalTicketsSold` set to `0`.
2. Add the following ticket sales to `totalTicketsSold` using the `+=` operator:
    - 65,000 tickets sold for her show in Nashville.
    - 80,000 tickets sold for her show in Los Angeles.
    - 72,000 tickets sold for her show in New York.
3. Print the final total of tickets sold.

### 5: Remainders

_"The Long Concert Break"_

Taylor is planning her next world tour. She wants to perform a series of _very_ specific 3.5-hour concerts, but she has a total of 27.8 hours available for concerts.

Write a program to calculate the remainder of hours Taylor will have after performing as many full concerts as possible using the `Double` type and the `remainder(dividingBy:)` method.