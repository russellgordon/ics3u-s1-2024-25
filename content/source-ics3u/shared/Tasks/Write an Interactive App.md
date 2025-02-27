---
draft: false
draftSectionTwo: true
excludeBacklinks: false
created: 2025-02-27T07:00:00.000-0400
createdForSectionTwo: 2025-01-20T07:00:00.000-0400
tags:
---
## Objective

Write an application that solves a simple problem while applying the MVVM design pattern.

## Purpose

An opportunity, in the form of an in-class assignment, to demonstrate your understanding of how to:

- make a *model* to:
	- store input(s)
	- calculate output(s)
- make a *view model* to:
	- validate provided input
	- produce appropriate output, either:
		- the result of a calculation
		- a suggestion for how to provide correct input
- make a *view* to:
	- accept freeform input
	- show output


## Success criteria

1. You make a plan in the form of an input-process-output chart to help you determine what your model must do.<br/><br/>
   
2. You then write your model structure [[Xcode Playgrounds|within a macOS playground]] and test it, verifying that when given input, it is providing you with the correct output.<br/><br/>

3. You next write the view model structure, also within a playground, and simulate user input in the form of a `String`. Verify that the view model intercepts invalid input and shows appropriate recovery suggestions.<br/><br/>
   
4. Finally, you create an [[iOS Projects|iOS app]], copying the model and view model code into the project, and then author a view to present an appropriate user interface.<br/><br/>
   
4. You have used source control well by [[Pushing Commits|committing and pushing]] your work to a remote on GitHub at regular intervals.<br/><br/>
   
5. You apply abstraction where possible, for example, through the use of helper views or subviews.<br/><br/>

6. To exceed expectations, you can show [[Dynamic Arrays|a history of calculations made]] in your app.<br/><br/>

> [!IMPORTANT]
> 
> You may only work on this task while in class.
> 
> You may chat about ideas with your peers, but their hands should never be on your keyboard, or vice-versa.
> 
> You can search the web for formulas to understand how to obtain appropriate output for your input.
> 
> However, you may not use a large language model (ChatGPT and similar) or consult online forums.
> 
> You may review any past code that you wrote, or anything on our class website, or any code examples in your copy of SwiftUI Views Mastery.

## Exemplar

Mr. Gordon's program is a speeding fine calculator (he's hoping he might eventually win a contract to include a version of this program in [photo radar devices](https://www.cbc.ca/news/canada/toronto/photo-radar-automatic-speed-enforcement-munipalities-1.5379781) to be used soon in Peterborough County.)

Inputs are the current speed limit and the recorded speed of the car in question.

Output is whether the car was speeding or not, and if so, the amount of the fine, according to this chart:

| km/h over the limit | fine |
|-|-|
|1 to 20|$100|
|21 to 30|$270|
|31 and above|$500|

Here is Mr. Gordon's input-process-output (IPO) chart:

![[IMG_1748.jpeg]]

Here is Mr. Gordon's work to author and test the model in a playground:

![[Pasted image 20250226211829.png]]

Here is Mr. Gordon's work to author and test the view model in a playground:

![[Pasted image 20250226212111.png]]

Here is Mr. Gordon's list of commits:

![[Pasted image 20250226214338.png]]

Here is a short video of Mr. Gordon's finished product:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1060711431?h=013678d8d7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Photo Radar Prototype"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>   

## Getting started

You will be randomly assigned a topic from the list below by drawing from a hat. If you do not like your selection, you can either trade with someone else in class, or select again once everyone else has selected a first time (there are 18 ideas and 15 students in our class).

Based on your topic, author your plan in the form of an input-process-output (IPO) chart. 

Once Mr. Gordon has discussed your IPO chart with you and initialled it to provide his approval, you may begin coding.

## Due date

We are going to *try* to do this in a single class period. Mr. Gordon believes in you!

## Handing in your work

Create a portfolio post that shares:

- [ ] your IPO chart
- [ ] screenshots of your playground
- [ ] a screenshot of your list of commits
- [ ] a short video that demonstrates your completed application
      (use **Command-Shift-5** to capture this)

## List of potential apps

Each person in class will author an app to complete one of the following programs:

### 1. **Tip Calculator**

**Input:** Bill amount and tip percentage.<br/>
**Output:** Displays the calculated tip amount and the total bill (bill + tip).

---

### 2. **Savings Goal Tracker**

**Input:** Current savings amount, target savings amount, and monthly contribution. You can assume the monthly contribution will always be the same amount.<br/>
**Output:** Displays the number of months required to reach the savings goal.

---

### 3. **Grade Calculator**

**Input:** Marks for three assignments out of 100.<br/>
**Output:** Displays the average grade and a letter grade (e.g., A, B, C).

---

### 4. **Age Calculator**

**Input:** Birth year.<br/>
**Output:** Displays the user’s age in years, and whether they are considered a "Boomer", a member of "Generation X", a "millennial", a member of "Generation Z", or "Gen Alpha". You can [use this source to learn which generation is which](https://www.today.com/parents/teens/generation-names-rcna137457).

---

### 5. **Loan Payment Calculator**

**Input:** Loan amount, [simple interest](https://byjus.com/maths/simple-interest/) rate, and loan term in years.<br/>
**Output:** Displays the monthly payment amount. Assume that the borrower will make equal monthly payments.

---

### 6. **Speed Calculator**

**Input:** Distance traveled and time taken.<br/>
**Output:** Displays the speed in meters per second.

---

### 7. **Discount Calculator**

**Input:** Original price and discount percentage.<br/>
**Output:** Displays the discounted price.

---

### 8. **Triangle Type Checker**

**Input:** Lengths of three sides of a triangle.<br/>
**Output:** Displays whether the triangle is equilateral, isosceles, or scalene.

---

### 9. **Dice Roller**

**Input:** Number of six-sided dice to roll.<br/>
**Output:** Displays the result of rolling the specified number of dice and their total. For example, if the user chooses to roll three dice, one possible result is: 6 + 1 + 4 = 11. Use the `Int.random` functionality provided by the `Foundation` framework.

---

### 10. **Shopping Cart Total**

**Input:** Prices of three items.<br/>
**Output:** Displays the total price and applicable sales tax, assuming that HST is 13%.

---

### 11. **Leap Year Checker**

**Input:** A year.<br/>
**Output:** Displays [whether the year is a leap year](https://iq.opengenus.org/check-if-given-year-is-leap-year/) or not.

---

### 12. **Fuel Efficiency Calculator**

**Input:** Distance traveled and fuel used.<br/>
**Output:** Displays the fuel efficiency in liters per 100 kilometers.

---

### 13. **Currency Converter**

**Input:** Amount in Canadian dollars.<br/>
**Output:** Equivalent amount in US dollars, UK pounds, and Euros. You can use this [source for current exchange rates](https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/) and hardcode the exchange rate into your program.

---

### 14. **Factorial Finder**

**Input:** A positive integer.<br/>
**Output:** Displays the factorial of the number (e.g., 5! = 120).

---

### 15. **Pizza Sharing Calculator**

**Input:** Number of pizzas, slices per pizza, and number of people.<br/>
**Output:** Displays how many slices each person gets and how many are left over.

---

### 16. **Work Hours to Salary Calculator**

**Input:** Hourly wage and number of hours worked in a week.<br/>
**Output:** Displays the total weekly earnings.

---

### 17. **Countdown Timer Converter**

**Input:** Number of seconds.<br/>
**Output:** Displays the equivalent time in minutes and seconds (e.g., 250 seconds = 4 minutes and 10 seconds).

---

### 18. **Change Calculator**

**Input:** A total amount in cents.<br/>
**Output:** Displays the minimum number of coins (toonies, loonies, quarters, dimes, nickels) needed to make that amount.
