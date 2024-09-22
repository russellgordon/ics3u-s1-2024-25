---
draft: true
draftSectionTwo: false
enableToc: false
excludeBacklinks: true
created: 2024-09-19T00:00:00.000-0400
createdForSectionTwo: 2024-09-19T00:00:00.000-0400
---
Xcodes is an app used to manage the installation of different versions of Xcode:

![[Pasted image 20240914093848.png|600]]

This short guide will help you to ensure that you have the correct version of Xcode installed on your computer.

> [!IMPORTANT]
> 
> When this guide was authored, Xcode 15.4 was the most recent version of Xcode available.
> 
> Check ** > About This Mac...**:
> 
> ![[Pasted image 20240919063509.png|250]]
> 
> If your computer is running macOS 14.5 or greater, please follow the steps below, but install **Xcode 16.0**.
> 
> If you do *not yet* have macOS 14.5 or greater, please install **Xcode 15.4**.
> 
> At some point later on, you can [[Update macOS to 14.7|update to macOS 14.7]], then use Xcodes to install Xcode 16.0.
> 
> Either version of Xcode is fine, at this point in time, for use in Grade 11 Introduction to Computer Science.

## App Store Distribution

It is possible to install Xcode via the Mac App Store, but **this is not recommended**.

Before continuing, check your **Applications** folder:

![[Pasted image 20240913124520.png|700]]

If you see Xcode installed as shown – with the name **Xcode** alone – please move that version to the trash on your system:

![[Screenshot 2024-09-13 at 12.46.53 PM (2).png]]

Then empty the trash on your system to free up disk space:

![[Screenshot 2024-09-13 at 12.48.18 PM.png]]

Emptying the trash may take a couple of minutes to complete:

![[Screenshot 2024-09-13 at 12.50.28 PM.png|300]]

> [!IMPORTANT]
> 
> Deleting Xcode, the application, will *not* delete any of the projects you have previously authored. When you install a new version of Xcode, you will be able to open and use all of your previously authored projects.

## Installing Xcodes

Here is a [direct link to download Xcodes](https://github.com/XcodesOrg/XcodesApp/releases/download/v2.2.0b27/Xcodes.zip).

Once downloaded, you will have a compressed file:

![[Pasted image 20240913125426.png|500]]

Double-click the file to decompress it:

![[Pasted image 20240913125501.png|500]]

Now drag the resulting Xcodes app to your **Applications** folder:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1009252540?h=4c5cea7dfd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

## Show release versions only

By default Xcodes shows all versions of Xcode – versions that are official releases, as well as beta versions:

![[Pasted image 20240913130518.png|700]]

Press the **Filter** button once so that only released (non-beta) versions of Xcode show up:

![[Pasted image 20240913130518 copy.png|700]]

The list of versions of Xcode available will look something like this afterwards:

![[Pasted image 20240913130907.png|700]]

## Sign in

Last year you created an Apple ID tied to your LCS email address that you used to access the Apple Developer Program.

Use that username and password to sign in to Xcodes, like this:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1009257879?h=4e00ec388c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

## Install Xcode

Now that you have signed in, you can use Xcodes to install the latest version of Xcode:

![[Pasted image 20240913131750.png|700]]

This will take a few minutes:

![[Pasted image 20240913131837.png|700]]

Once Xcode has been downloaded, if this is the first time you've used Xcodes in a while, you may see this message regarding the need to install a privileged helper tool – allow this to occur by pressing **Install**:

![[Pasted image 20240914092739.png|700]]

You will then see this dialog – provide the password that you use to log in to your computer, then choose **Install Helper**:

![[Pasted image 20240914092955.png|250]]

After Xcode has been installed, you should see something like the following:

![[Pasted image 20240914093110.png|700]]

Press the **Make active** button so that Xcode 15.4 becomes the default version of Xcode – this means that when you double-click a **.xcodeproj** file, Xcode 15.4 is what will open:

![[Pasted image 20240914093110 copy 1.png]]

After pressing the **Make active** button, you will see a green checkmark beside Xcode 15.4:

![[Pasted image 20240914093506.png|700]]

Finally, you will also see this alert:

![[Pasted image 20240914093806.png|350]]

Matt Kiazyk is the developer of Xcodes – what is running in the background is the privileged helper tool we just installed a moment ago – that helper allows you to easily switch between active versions of Xcode without having to repeatedly type your account password to do so. That ability will be helpful later on this year when you may have multiple versions of Xcode on your computer.

You can dismiss the alert. You are now ready to open and use Xcode! 🚀