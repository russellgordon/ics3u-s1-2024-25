---
draft: false
draftSectionTwo: true
tags: 
created: 2024-10-31T00:00:00.000-0400
createdForSectionTwo: 2024-09-27T00:00:00.000-0400
---
To run applications you write in Xcode on your iPhone or iPad, a few *one-time-only* setup steps are required.

> [!NOTE]
> 
> These instructions were written for Xcode 16, using a phone running iOS 17.
> 
> Screenshots may differ slightly for a device running iOS 18, or if you are running an older version of Xcode.

## Open Devices and Simulators

First, be sure Xcode is open.

Select the menu sequence **Window** → **Devices and Simulators**.

## Establish trust

Now connect your iPhone or iPad to your Mac using a cable.

The first time you do this, you will see an image something like this:

![[Screenshot 2024-09-26 at 8.53.02 PM.png|600]]

On your phone, you may see the following message:

![[IMG_0758.png|400]]

If you do, select the **Trust** option.

You might also see the following message:

![[IMG_0759.png|400]]

If you do, select the **Other Device** option.

Finally, when prompted, be sure to enter your device passcode so that your phone trusts your Mac:

![[IMG_0760.png|400]]

## Enable Developer mode

To test applications you write on your iPhone or iPad it must be in *developer mode*.

Back in Xcode, you will see a window something like the following:

![[Screenshot 2024-09-26 at 8.54.23 PM.png|600]]

> [!NOTE]
> The instructions that follow are for **iOS 17.**
> 
> If you have a later version of iOS on your phone, screenshots may differ.

To do this, first open the **Settings** app, then select **Privacy & Security**:

![[Pasted image 20240926210611.png|400]]

Then select **Developer Mode**:

![[Pasted image 20240926210635.png|400]]

Turn on **Developer Mode**, then restart your iPhone:

![[Pasted image 20240926210716.png|400]]

> [!NOTE]
> Despite the warning about reduced device security, know that an application cannot be loaded on to your phone unless it is unlocked and you have explicitly indicated that you trust the developer who wrote the app.

After restarting your phone, you will see this message appear – select **Turn On**:

![[IMG_0765.png|400]]

You will need to provide your device passcode:

![[IMG_0766.png|400]]

## Wait for files to copy

Now, unplug the cable connecting your phone to your Mac, and wait a few seconds.

Then, plug the cable connecting your phone to your Mac back in again.

After a few moments, you should see the "Preparing..." message in the **Devices and Simulators** dialog:

![[Screenshot 2024-09-26 at 9.10.26 PM.png|600]]

Then, this message will appear, indicating that some files are being copied from your phone to your Mac:

![[Screenshot 2024-09-26 at 9.11.50 PM.png|600]]

> [!TIP]
> 
> This process – of copying necessary files from your phone to your computer – may take a few minutes to complete; be patient.
> 
> When it is finished, the yellow banner will disappear.

> [!IMPORTANT]
> 
> After required files have finished copying over, you may see a message in Xcode about "development services" needing to be enabled. Wait another minute or two, and that message should go away.

When all is said and done, you will see just the following – no more yellow banners:

![[Screenshot 2024-09-26 at 9.13.59 PM.png]]

## Select a run destination

Now, you can select the device you've connected as a run destination.

At the top of the primary Xcode window, click the list of devices (1), then select your device from the list (2):

![[Screenshot 2024-09-26 at 9.26.51 PM.png]]

## Change deployment target

You may not be able to select your device (as pictured) because Xcode notes that the "OS version is lower than deployment target".

That means that the phone itself is running a version of iOS that is older than the version of iOS the Xcode project is configured to run on. In this example, Mr. Gordon's phone is running iOS 17, but the project is configured to run on iOS 18.

So long as you are not using any iOS 18-specific features in your project, you can simply change the deployment target. Here is a super short 37-second video showing how to do this:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1013373804?h=2d07476ac2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

Now you will be able to select your device from the list:

![[Screenshot 2024-09-26 at 9.36.39 PM.png]]

## Select a development team

You must have a valid Apple Developer Program (ADP) membership to load an app onto your phone. You will have previously accepted the invitation Mr. Gordon sent you for the ADP. Recall that your ADP membership is tied to the Apple ID you created using your LCS email address.

Follow the steps shown in this 19-second video to select a development team:

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1013376359?h=f10374557f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
<script src="https://player.vimeo.com/api/player.js"></script>

## Build the application

Make sure your phone is unlocked. Now, build the application:

![[Screenshot 2024-09-26 at 9.37.54 PM.png|400]]

Next, you may see a message indicating that Xcode cannot run the application on the device, because, essentially, your iPhone or iPad currently does not "trust" the Mac that you are developing on to install applications upon it:

![[Screen Shot 2022-10-31 at 7.39.02 AM.png|300]]

On your phone, you will see a message like this:

![[IMG_1526.png|400]]

To create the necessary trust, follow these steps.

Open **Settings** again, and choose **General**:

![[IMG_1527.png|400]]

Then select **VPN &  Device Management**:

![[IMG_1528.png|400]]

Under **Developer App**, you will see a profile tied to your LCS Apple ID – select that profile:

![[IMG_1529.png|400]]

To run apps you make using your LCS Apple ID on your device, select the button as shown:

![[IMG_1530.png|400]]

Finally, on the dialog that appears, select **Trust**:

![[IMG_1531.png|400]]

The next time you build your application with your iPhone or iPad as the selected run destination, after a few seconds, you should see the app open on your device.

Have fun! 🚀
