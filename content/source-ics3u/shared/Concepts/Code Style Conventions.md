---
tags:
  - A4.2
created: 2023-10-20T00:00:00.000-0400
createdForSectionTwo: 2024-09-21T00:34:55.000-0400
draft: true
draftSectionTwo: false
---
Just the same as when writing in English, Spanish, German, Mandarin, or other human languages, programming languages each have their own *style and grammar conventions*.

For example, in English, a sentence always begins with a capital letter, and ends with a period.

Here are some common code style conventions to use when authoring Swift code.

## Be descriptive, not concise

If you are writing a variable name to describe a person's height in centimetres, a good name would be `heightInCentimetres`, rather than something shorter, like `hic`.

Consider the following ☺️:

![[IMG_0039.jpeg|450]]

Shortforms lead to confusion. We read code many more times than we write code, so it's important to make code as clear and understandable as possible.

When authoring code, the autocomplete function does most of the typing for us – so longer variable names do not mean it will take you more time to author code.

## Capitalization

### Variables, Constants, Properties

Swift programmers use the `camelCase` capitalization pattern for variables, constants, and properties of structures:

![[Pasted image 20240921084427.png|250]]

In short:

- first word lower case
- all remaining words, first letter capitalized

For example:

```swift
let hairColour = "red"
let massInKilograms = "80"
```

### Structures

By convention, structure names are capitalized using a different pattern, known as `PascalCase`.

Specifically, each word in the structure name has it's first letter capitalized.

As well, structure names are always *singular*, not plural.

For example:

```swift
struct HockeyCard {
    // properties of the structure would go here
}
```