# Splash screen for React-Native apps

This will be a quick and dirty way to get your app to load the splash screen, based on [this article](https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae) due to the use of automatically generated
images, it may cause some bloat in the total app size. However it does just do the trick.

## Preparing the images.

First we need the image that we would like to show up when the app opens.
Keep in mind that Devices come in all shapes and sizes, therefore our splash
screen images need to come in a variety of sizes as well.
For this an easy way to generate the images in the correct sizes is by using [Image Gorilla by Ape tools](http://apetools.webprofusion.com/tools/imagegorilla)
It's highly recommended to start with a high resolution image, a 2048x2048 px PNG one is what in my opinion works best
after you are done with submitting the image to Image Gorilla scroll down to the bottom of the page and 'Punch it'.
When Image Gorilla finishes, download the zip and extract it. There will be multiple directories.
But the ones that matter are only the iOS and android ones.

## iOS splash screen.

First open the project in xcode
```
open ios/<YourProjectName>.xcodeproj
```

In the main window of your project at the general tab, scroll down until you see 'App Icons and Launch Images'

![xcode](https://cdn-images-1.medium.com/max/1000/1*UjtDz2Kjyq-8Wv4KkI8EJw.png)

Press the 'Use asset catalog...' button for a selection dialog to appear, select 'LaunchImage' and press 'Migrate'

Then on the left side of xcode, in the project navigator, expand the first folder with your project's name.
Inside there you will find a file named `LaunchScreen.xib` you may either open it and remove all of it' content or
delete it all together, I suggest deleting it completely.

![delete LaunchScreen](https://cdn-images-1.medium.com/max/1000/1*JX-WHMJ4udPTj79td7avlA.png)

Within the “Images.xcassets” folder there is now a “LaunchImage” option inside of it.
This is where we’ll drag and drop the iOS images generated for us by Image Gorilla.

![LaunchImage](https://cdn-images-1.medium.com/max/1000/1*0Csm1VYYXEjVhDzXe80vCQ.png)

And that should be it! You may need to close the simulator and JS Packer server then re run `react-native run-ios`
to see the splash Screen.

## Android splash screen.

Coming up soon.
