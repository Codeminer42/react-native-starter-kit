# React native starter kit

## Installation

### Set up your machine
- [Ubuntu](docs/os-setup/ubuntu.md)
- [Mac OS](docs/os-setup/mac.md)

### Project configuration
```
git clone https://github.com/Codeminer42/react-native-starter-kit.git yourProjectName
cd yourProjectName
```
Now you need to rename ***react-native-starter-kit*** in `package.json` and `index.js` to ***yourProjectName***.

### Build project
```
yarn
yarn build
rm -rf .git
```
That's it!

### Run
```
yarn ios or yarn android
```

## How we organize the source code

We have a source folder called `src`, which contains all of our app Javascript code and assets. That's the structure:

```
|-- src/
|---- api /
|---- assets /
|---- components /
|---- constants /
|---- presenters /
|---- scenes /
|---- services /
|---- store /
|---- styles /
```

- `api`: hold all API communication logic here;
- `assets`: hold all of our assets related files. It can be images, sounds, whatever related;
- `components`: known as "dumb components";
- `constants`: constants help us to eliminate pure strings values, embracing DRY;
- `presenters`: if you need to change a value for presenting it in another way, presenters are where you need to put these kinds of functions;
- `scenes`: hold our "screens", every scene represents a screen on the app. It is known as "smart component";
- `services`: they are responsible for the business rules as to manipulate values that come from API, you shouldn't parse values from API in your component, use services instead;
- `stores`: our "redux" logic files. It manages the state and the data flow throughout our app;
- `styles`: anything related to styles, e.g colors and spacing;

## Testing
```
yarn test
```

Tests files must be placed inside a `__test__` folder in the same level as the file to be tested.
```
|-- src/
|---- components /
|------ __tests__/
|-------- button.js
|------ button.js
```

## Style Guide

We're following this style guide: [docs/style-guide.md](docs/style-guide.md)

## Release
### Android
Follow the official guide to generate the release key: https://facebook.github.io/react-native/docs/signed-apk-android.html.
To set up the Gradle Variables create the `~android/.gradle/gradle.properties` file with the following variables:

```
APP_RELEASE_STORE_FILE=app-release-key.keystore
APP_RELEASE_KEY_ALIAS=app-key-alias
APP_RELEASE_STORE_PASSWORD=***
APP_RELEASE_KEY_PASSWORD=***
```

### iOS
There is a good blog post about that, where you will find everything about deploy and TestFlight process. Check it out: https://www.raywenderlich.com/127936/submit-an-app-part-1

## Utils and other docs
- [Change app icon](docs/app-icon.md)
- [Change app name](docs/change-app-name.md)
- [Disable app rotation](docs/disable-app-rotation.md)
- [Fonts configuration](docs/fonts.md)
- [Splash screen](docs/splash-screen.md)
- [Style guide](docs/style-guide.md)
