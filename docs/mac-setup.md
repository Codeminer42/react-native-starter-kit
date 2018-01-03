# React Native Setup on macOS

This guide covers how to set up your macOS to run and develop to iOS devices. Android will come soon.

## iOS

### Prerequisites
We highly recommend installing the prerequisites using brew. If you don't have it installed, check it out: https://brew.sh/

```
brew update
brew install node
brew install watchman
```

If you have already installed Node on your system, make sure it's version 4 or newer.

### Installation

Now, you need to install the React Native CLI, using npm or Yarn:

npm
```
npm install -g react-native-cli
```
Sudo can be requested, depends on the way how you installed npm in your machine.

Yarn
```
yarn global react-native-cli
```

Now let's run your first project.

### Running

```
react-native init MyFirstProject
cd MyFirstProject
react-native run-ios
```

You should see your new app running in the iOS Simulator shortly.