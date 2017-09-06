# Splash screen for React-Native apps

This will be a quick and dirty way to get your app to load the splash screen, based on [this article](https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae).
With that, you should keep in mind that due to the use of automatically generated
images, it may cause some bloat in the total app size. However it will do the trick.

## Preparing the images.

First, we need the image that we would like to show up when the app opens.
Keep in mind that devices come in all shapes and sizes, therefore our splash
screen images need to come in a variety of sizes as well.
For this, an easy way to generate the images in the correct sizes is by using [Image Gorilla by Ape tools](http://apetools.webprofusion.com/tools/imagegorilla)
It's highly recommended to start with a high-resolution image, i.e: 2048x2048 Pixels with no transparency  and in `.PNG` format.
After you are done with submitting the image to Image Gorilla, scroll down to the bottom of the page and 'Punch it'.
When Image Gorilla finishes, download the zip and extract it. There will be multiple directories.
But the ones that matter are only the iOS and android ones.

## iOS splash screen.

Start by opening the project in Xcode
```
open ios/<YourProjectName>.xcodeproj
```

In the main window of your project at the general tab, scroll down until you see 'App Icons and Launch Images'

<img src="https://i.gyazo.com/d9e57517c590241512fc98e2de144988.gif" />

Press the 'Use asset catalog...' button for a selection dialog to appear, select 'Images' and then press the 'Migrate' button.

<img src="https://i.gyazo.com/d2e3245700e33db07b1b94a8431e4c88.gif" />

Now, on the left side of Xcode, in the project navigator, expand the first folder with your project's name.
Inside that folder, you will find a file named `LaunchScreen.xib` you may either open it and remove all of its contents or
delete it all together.

<img src="https://i.gyazo.com/6479323259d7b18faf1b17c54cc67701.gif" />

Within the “Images.xcassets” folder there is now a “LaunchImage”.
This is where we'll drag and drop the iOS images generated for us by Image Gorilla.

<img src="https://i.gyazo.com/df6af5bee088e49b1ba7d3ade5ef6745.gif"/>

And that should be it! You may need to close the simulator and JS Packer server then rerun `react-native run-ios`
to see the splash screen.

## Android splash screen.

Coming up soon.
