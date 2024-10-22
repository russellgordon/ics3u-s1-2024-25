---
tags:
created: 2024-10-22T00:00:00.000-0400
createdForSectionTwo: 2024-09-21T00:34:55.000-0400
draft: false
draftSectionTwo: true
---

Swift is a *type-safe* language.

Put another way, it is strict about data types.

When we create a variable, such as:

```swift
var age = 16
```

... Swift uses *type inference* to guess what data type we wanted. In the example above, `age` is created as an integer.

This means that later on, if we tried to assign `age` a value of `16.5`, we would get an error:

```swift
age = 16.5
```

Since Swift is a type-safe language, you cannot assign a `Double` to a variable that is an `Int`.

To borrow a metaphor, it is like trying to put a square peg in a round hole:

![[Pasted image 20241022075246.png]]

The same is true for mathematical operations. 

Consider this code:

```swift
var price = 25
var increase = 2.75
var newPrice = price + increase
```

This code will not compile. `price` is a `Int` and  `increase` is a `Double`. Swift will not permit us to add two values held in different data types.

Why, though?

On a technical level, one reason is because integers, whole numbers, are simply stored using a [[Binary Numbers|fixed number of bits]], as we learned earlier in this module. Decimal values – a `Double` in Swift – are numbers that represent parts of a whole, and are stored using a [much different approach](https://wizardzines.com/zines/integers-floats/).

Another reason Swift will not permit us to add values held in different data types is because such an operation is unpredictable, especially to new programmers.

Let's reconsider the code:

```swift
var price = 25
var increase = 2.75
var newPrice = price + increase
```

To add those two values together, theoretically, Swift could do at least three different things:

1. Convert `price` to a `Double`, then add `increase`, resulting in `newPrice` being a `Double` with the value `27.75`.
2. Keep `price` as an `Int` then convert `increase` into an `Int` by dropping the decimal part of the value, resulting in `newPrice` being an `Int` and holding the value `27`.
3. Keep  `price` as an `Int` then convert `increase` into an `Int` by rounding up, resulting in `newPrice` being an `Int` and holding the value `28`.

Some languages, such as Python, do this – this is known as *implicit data type conversion*.

The challenge is that many programmers forget the specific ways that a given language performs an implicit data type conversion. This can lead to the creation of logical errors, or bugs, in a program or app.

To avoid that problem, Swift requires *explicit data type conversion*.

In other words, we must tell the Swift compiler exactly what to do.

To add these two values, we can take one of two possible approaches.

The first approach is to temporarily convert the value held in `increase` into an `Int`, resulting in `newPrice` becoming an `Int` as well:

```swift
var price = 25
var increase = 2.75
var newPrice = price + Int(increase)
```

Take note of what value `newPrice` holds after the two values are added:

![[Screenshot 2024-10-22 at 7.51.28 AM.png]]

The second approach is to temporarily convert the value held in `price` into a `Double`, resulting in `newPrice` becoming a `Double`:

```swift
var price = 25
var increase = 2.75
var newPrice = Double(price) + increase
```

Take note of what value `newPrice` now holds after the two values are added:

![[Screenshot 2024-10-22 at 7.55.10 AM.png]]

In either case – with explicit data type conversions – what is happening is *clear to the programmer*.

In the first case, `newPrice` will end up being an integer, or `Int`. It's easy to remember that Swift will always drop the decimal portion of a value when converting a `Double` to an `Int` – for example, `27.75` becomes `27`.

In the second case, `newPrice` will end up being a decimal value, or `Double`, and holds `27.75` as its value.

## Reflection prompts

1. How is explicit data type conversion different than implicit data type conversion?
2. What are some possible disadvantages of implicit data type conversions?
3. Which approach do you prefer? Implicit data type conversions, as is done in languages like Python, or explicit data type conversions, as is required by languages like Java or Swift?