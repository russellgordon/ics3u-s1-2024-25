---
tags:
created: 2024-10-23T00:00:00.000-0400
createdForSectionTwo: 2024-09-23T00:34:55.000-0400
draft: false
draftSectionTwo: true
---

> [!NOTE]
> 
> Mr. Gordon generated this concept summary and the related examples using ChatGPT.
> 
> He then reviewed and edited the results for clarity and accuracy.
> 
> This page is intended as a reference (please bookmark for future use).

## 1. **Absolute Value**

**What it does:**  
`abs()` gives the size (or distance from zero) of a number, ignoring whether it’s positive or negative.

**Example 1:**

"Let's say you track how far your stock price moves up or down each day. Even if it drops by $5 one day, the absolute value of the change is `5` because we only care about the size of the change, not the direction."

```swift
let change = -5
let distanceFromZero = abs(change)
print(distanceFromZero)  // Output: 5
```


**Example 2 (Grade 11: Exponential Functions):**

"When you calculate the error between two predictions, you only care how far off you were—whether your prediction was too high or low doesn't matter."

```swift
let predictedValue = 50.0
let actualValue = 45.0
let error = abs(predictedValue - actualValue)
print(error)  // Output: 5.0
```

---

## 2. **Minimum and Maximum**

**What they do:**  
`min()` gives the smallest number, and `max()` gives the largest.

**Example 1 (Grade 12: Optimization in Calculus):**

"Suppose you need to figure out the maximum distance a drone can fly based on two battery types."

```swift
let batteryA = 30.0  // minutes
let batteryB = 45.0  // minutes
print(max(batteryA, batteryB))  // Output: 45.0
```


**Example 2 (Grade 11: Personal Finance):**

"You bought some groceries with two discounts, and you want to know the bigger discount!"

```swift
let discount1 = 10.0  // dollars
let discount2 = 7.5   // dollars
print(max(discount1, discount2))  // Output: 10.0
```

---

## 3. **Exponentiation**

**What it does:**  
`pow(base, exponent)` raises a base number to the power of the exponent.

**Example 1 (Grade 11: Exponential Growth):**

"If you invest $1000 at 5% interest per year, how much will you have after 3 years (assuming compound interest)?"

```swift
let principal = 1000.0
let rate = 1.05  // 5% interest
let years = 3.0
let amount = principal * pow(rate, years)
print(amount)  // Output: 1157.625
```


**Example 2 (Grade 12: Population Growth):**

"How many bacteria will grow if they double every hour, starting from 1 bacterium, after 4 hours?"

```swift
let initialBacteria = 1.0
let doublingTime = 4.0
let totalBacteria = initialBacteria * pow(2, doublingTime)
print(totalBacteria)  // Output: 16.0
```

---

## 4. Square Root

**What it does:**  
`sqrt()` gives the square root of a number (a number that multiplies by itself to give the original value).

**Example 1 (Grade 11: Geometry):**

"What is the side length of a square field with an area of 64 square meters?"

```swift
let area = 64.0
let sideLength = sqrt(area)
print(sideLength)  // Output: 8.0
```

**Example 2 (Grade 11: Distance Between Two Points):**

"If two points on a coordinate plane are (1, 1) and (4, 5), what's the distance between them?"

```swift
let dx = 4.0 - 1.0
let dy = 5.0 - 1.0
let distance = sqrt(pow(dx, 2) + pow(dy, 2))
print(distance)  // Output: 5.0
```

---

## 5. **Rounding Functions**

**What they do:**

- `round()` rounds to the nearest integer.
- `ceil()` rounds up.
- `floor()` rounds down.

**Example 1 (Grade 12: Personal Finance):**

"If you buy a product for $12.49, how does it round off?"

```swift
let price = 12.49
print(round(price))  // Output: 12
print(ceil(price))   // Output: 13
print(floor(price))  // Output: 12
```

**Example 2 (Everyday Math):**

"Your pizza bill is $47.85. If each friend pays their share, how much will it be if you round up to avoid underpaying?"

```swift
let totalBill = 47.85
let numFriends = 4.0
let sharePerPerson = totalBill / numFriends
print(ceil(sharePerPerson))  // Output: 12
```

---

## 6. **Modulo**

**What it does:**  
This function gives the remainder after division. It’s great for working with cycles, like weeks or clocks.

**Example 1 (Grade 11: Scheduling Problems):**

"After dividing 17 days among full 5-day workweeks, how many days are left?"

```swift
let days = 17.0
let remainder = days.truncatingRemainder(dividingBy: 5.0)
print(remainder)  // Output: 2.0
```

**Example 2 (Grade 12: Modulo Arithmetic):**

"What’s the remainder when 29 is divided by 7?"

```swift
let remainder = 29.0.truncatingRemainder(dividingBy: 7.0)
print(remainder)  // Output: 1.0
```

---

## 7. **Trigonometric Functions**

**What they do:**  
The `sin()`, `cos()`, and `tan()` functions give the sine, cosine, and tangent of an angle, measured in radians.

**Example 1 (Grade 11: Right Triangles):**

"What’s the sine of a 45-degree angle?"

```swift
let angle = Double.pi / 4  // 45 degrees in radians
let sineValue = sin(angle)
print(sineValue)  // Output: ~0.707
```

**Example 2 (Grade 12: Wave Functions):**

"Calculate the height of a wave at a given angle if the amplitude is 3 meters."

```swift
let angle = Double.pi / 6  // 30 degrees
let amplitude = 3.0
let height = amplitude * sin(angle)
print(height)  // Output: 1.5
```

---

## 9. **Arccosine**

**What it does:**  
`acos()` (inverse cosine) returns the angle (in radians) whose cosine is the given value. Use it when you know the ratio of the adjacent side to the hypotenuse in a right triangle and need to find the angle.

**Example 1 (Grade 11: Right-Angle Trigonometry):**

"You’re standing at the base of a hill, and you measure that the slope makes a ratio of 0.5 between the adjacent side (horizontal ground) and the hypotenuse (slope length). What’s the angle of elevation of the hill?"

```swift
let ratio = 0.5
let angleInRadians = acos(ratio)  // Output: ~1.05 radians
let angleInDegrees = angleInRadians * (180 / Double.pi)
print(angleInDegrees)  // Output: ~60.0 degrees
```

**Example 2 (Grade 12: Vectors and Dot Product):**

"If the cosine of the angle between two vectors is 0.866, what is the angle between them?"

```swift
let cosTheta = 0.866
let angleInRadians = acos(cosTheta)
let angleInDegrees = angleInRadians * (180 / Double.pi)
print(angleInDegrees)  // Output: ~30.0 degrees
```

---

## 10. **Arcsine**

**What it does:**  
`asin()` (inverse sine) returns the angle (in radians) whose sine is the given value. Use it when you know the ratio of the opposite side to the hypotenuse and want to find the angle.

**Example 1 (Grade 11: Height of a Kite):**

"A kite string is 20 meters long, and the string makes a 30% (0.3) angle with the ground. How high is the kite?"

```swift
let ratio = 0.3
let angleInRadians = asin(ratio)  // Output: ~0.305 radians
let angleInDegrees = angleInRadians * (180 / Double.pi)
print(angleInDegrees)  // Output: ~17.5 degrees
```

**Example 2 (Grade 12: Waves and Harmonic Motion):**

"If a sine wave reaches a peak at 0.707 units, what angle corresponds to that point?"

```swift
let ratio = 0.707
let angleInRadians = asin(ratio)
let angleInDegrees = angleInRadians * (180 / Double.pi)
print(angleInDegrees)  // Output: ~45.0 degrees
```

---

## 11. **Arctangent**

**What it does:**  
`atan()` (inverse tangent) returns the angle (in radians) whose tangent is the given value. Use it when you know the ratio of the opposite side to the adjacent side and want to find the angle.

**Example 1 (Grade 11: Inclined Plane Problem):**

"A ramp rises 2 meters for every 5 meters along the ground. What is the angle of the ramp?"

```swift
let ratio = 2.0 / 5.0
let angleInRadians = atan(ratio)  // Output: ~0.38 radians
let angleInDegrees = angleInRadians * (180 / Double.pi)
print(angleInDegrees)  // Output: ~21.8 degrees
```

**Example 2 (Grade 12: Physics – Projectile Motion):**

"An object is launched at an angle, and the ratio of its vertical to horizontal velocity is 1.2. What angle was it launched at?"

```swift
let velocityRatio = 1.2
let angleInRadians = atan(velocityRatio)
let angleInDegrees = angleInRadians * (180 / Double.pi)
print(angleInDegrees)  // Output: ~50.2 degrees
```

---

## 12. **Logarithms**

**What they do:**  
`log()` returns the natural logarithm, and `log10()` returns the base-10 logarithm.

**Example 1 (Grade 12: Logarithmic Functions):**

"How long will it take for an investment to double if it grows continuously at 7% per year?"

```swift
let rate = 0.07
let time = log(2) / rate
print(time)  // Output: ~9.9 years
```

**Example 2 (Grade 12: Sound Intensity):**

"If the intensity of a sound wave is 1000 units, what is the decibel level?"

```swift
let intensity = 1000.0
let decibels = 10 * log10(intensity)
print(decibels)  // Output: 30.0
```
