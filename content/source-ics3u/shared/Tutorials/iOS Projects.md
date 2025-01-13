---
tags:
created: 2024-10-28T07:00:00.000-0400
createdForSectionTwo: 2025-01-13T07:00:00.000-0400
draft: true
draftSectionTwo: false
---
Xcode is a large application that serves several purposes for software developers.

Many different types of projects can be created for different Apple platforms.

This short tutorial will show you how to create a project that runs on iOS.

## Create the project

To create a playground, make sure that Xcode is in the foreground on your computer by clicking it's icon in the Dock:

![[Pasted image 20231021072302.png|100]]

From the menu bar at top left, choose **File > New > Project...**:

![[Screenshot 2025-01-12 at 1.33.39 PM.png|450]]

You will see the following window – here, choose the **iOS** tab, then **App**, and then **Next**:

![[Pasted image 20250112133559.png]]

On the following screen, give your project:

1. a descriptive name, based on what idea you are exploring
2. select your team
	- NOTE: Log in with the Apple ID tied to your LCS email address, if necessary.
3. provide an organization identifier
	- NOTE: If your name is Stephanie Laroux, use `ca.stephanielaroux`
4. interface should be **SwiftUI**
5. language should be **Swift**
6. testing system should be **None**
7. storage should be **None**

![[Pasted image 20250112133738.png]]

Then press the **Next** button.

On the following screen, choose where to save your project – be sure that source control is enabled:

![[Pasted image 20250112133829.png]]

## Create a remote

You will see the following when your project first opens:

![[Pasted image 20250112133948.png]]

Press **Command-2** to switch to the source control navigator, then tap the **Repositories** tab, then right-click on the local repository to create a remote:

![[Screenshot 2025-01-12 at 1.40.43 PM.png]]

Accept the default values by pressing the **Create** button:

![[Screenshot 2025-01-12 at 1.41.40 PM.png]]

Now press **Command-1** to return to the project navigator:

![[Pasted image 20250112134328.png]]

You are ready to begin coding!