# React Native Setup on Ubuntu

### 1. Prerequisites:
------
##### 1.1. Node.js
------
 We recommend using [NVM](https://github.com/creationix/nvm).

##### 1.2. Java Development Kit
------
###### Installation
* Option 1: [Download](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and extract the files into ```/usr/lib/jvm/```:
```
sudo tar xzf <downloaded file> /usr/lib/jvm/
```
* Option 2: Or use the apt-get command to install it:
```
sudo apt-get install openjdk-8-jdk && apt-cache search jdk
```
###### Setup
Add the environment variables:
> Make sure to set the correct path depending on the version you have just installed.
```sh
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64 &&
export PATH=$PATH:/usr/lib/jvm/java-8-openjdk-amd64/bin
```
##### 1.3. Android SDK
------
> Command line tool required only.
###### Installation
- [Download](https://developer.android.com/studio/index.html) and extract the SDK tools to ```~/android```
###### Setup
- Add the ANDROID_HOME environment variable:
```sh
echo "export ANDROID_HOME=~/android" >> ~/.bashrc &&
echo "export PATH=$PATH:$ANDROID_HOME/tools" >> ~/.bashrc &&
echo "export PATH=$PATH:$ANDROID_HOME/platforms"  >> ~/.bashrc
```
- Download the minimum SDK necessary packages
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
To set up and run an Android Virtual Device see [How to set up AVD](../avd-setup.md).
### 2. Installation:
------
```
sudo npm install -g react-native-cli
```
> You can also use yarn.
### 3. Initialization:
------
```
react-native init MyProjectName
```
### 4. Running:
------
Connect your Android device in debug mode and run:
```
react-native run-android
```
### 5. Releasing:
------
Follow the [documentation](https://facebook.github.io/react-native/docs/signed-apk-android.html) steps.
