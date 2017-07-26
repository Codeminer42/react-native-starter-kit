# React Native Setup on Ubuntu

## Prerequisites:
#### [Node.js](https://nodejs.org/en/download/)
> We recommend using [NVM](https://github.com/creationix/nvm).

#### [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

#### [Android SDK](https://developer.android.com/studio/index.html)
> Command line tool required only.

- extract the downloaded file to ```~/android```
- Add the ANDROID_HOME environment variable:
```sh
echo "export ANDROID_HOME=~/android" >> ~/.bashrc &&
echo "export PATH=$PATH:$ANDROID_HOME/tools" >> ~/.bashrc &&
echo "export PATH=$PATH:$ANDROID_HOME/platforms"  >> ~/.bashrc
```
- Download the SDK necessary packages
  - Android 6.0 (Marshmallow) SDK Platform 23
  - Google APIs 23
  - Build-tools 23
  - ADB
```sh
~/android/tools/bin/sdkmanager "platforms;android-23" "build-tools;23.0.1" "add-ons;addon-google_apis-google-23"
```

```
sudo apt-get install android-tools-adb
```

## Installation:
```
sudo npm install -g react-native-cli
```
> You can also use yarn.
## Initialization:
```
react-native init MyFirstProject
```
## Running:
Connect your Android device in debug mode and run:
```
react-native run-android
```
## Releasing:
Follow the [documentation](https://facebook.github.io/react-native/docs/signed-apk-android.html) steps.
