---
tags:
  - C2.3
created: 2023-10-20T00:00:00.000-0400
createdForSectionTwo: 2024-09-30T00:34:55.000-0400
draft: true
draftSectionTwo: false
---
Source code are the instructions we provide to describe to a computer what an application should do.

As we begin to write more ambitious programs, the number of lines of code in our programs grow.

It is quite common to try something and realize it's not working – at which point, it's helpful to be able to go back to an earlier version of our code.

As well, accidents happen. If a roommate spills a sticky soda on your computer, it's likely toast – and then, wouldn't it be great to have a backup of all the code you wrote for this course?

That is what we will primarily use source control for – *versioning* of our code, and *backups*.

## Terminology

When we first make a new project in Xcode, we'll create a *local repository*.

A repository, or *repo* for short, is simply the place where backups of your code are held. The word *local* means that the backups are stored on your computer itself.

Just to illustrate, when creating a new project in Xcode, here's the step where you create a local repository:

![[Screenshot 2024-09-30 at 6.43.58 AM.png]]

Once we've created a local repository, we should always, immediately, create a *remote* repository, which looks something like this:

![[Screenshot 2024-09-30 at 6.48.18 AM.png|450]]

A remote repository, or just "remote" for short, is a backup of your local repository, held "in the cloud" (meaning, on a computer server somewhere else in the world).

The software we use for source control is called *git*.

> Yeah, it's kind of a weird name. Why is it called this? 🤷🏼

We will store our remotes using a service called GitHub.

When we save code in our local repository, that is called a *commit*.

When we send code to a remote, that is called a *push*.

When we get code from a remote, that is called a *pull*.

Here's a little illustration of how this all works:

![[source_control.png]]
<br/><small>Image credit: [Git-it](http://jlord.us/git-it/index.html)</small>

Source control is really useful for individuals, but it can also be used by teams to collaborate:

![[source-control-xkcd.png|200]]
<br/><small>Image credit: [xkcd](https://xkcd.com)</small>

We'll mostly use `git` and GitHub for solo work this year. And don't worry – we'll nearly always use source control through Xcode, with a nice graphical user interface. You *can* use it through a shell, or command line interface, but... you don't have to!

## Other benefits

When you save your work (commit) frequently, a history of your work emerges:

![[Screenshot 2024-09-30 at 7.02.17 AM.png]]

If you double-click on a commit, you can see exactly what changed in your code with that commit:

![[Screenshot 2024-09-30 at 7.03.12 AM.png]]

This can make it very easy to track down bugs that you may have introduced to a project.