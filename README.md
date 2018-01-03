# React native starter kit

1. Setup your machine.
- [Ubuntu setup](docs/ubuntu-setup.md)
- [Mac OS](https://facebook.github.io/react-native/docs/getting-started.html) - Select the option Building Projects with Native Code.
- We highly recommend to use [Yarn](https://yarnpkg.com/en/docs/install).

2. Start the project.
```
git clone git@github.com:Codeminer42/react-native-starter-kit.git yourProject
react-native init yourProject (Type y if any prompt appears)
cd yourProject
rm -rf .git
```

3. Install the packages.

`yarn add react-native-router-flux react-redux redux redux-thunk`

`yarn add eslint eslint-plugin-react eslint-plugin-react-native --dev`

4. Override the scripts.

```
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "coverage": "jest --coverage --silent && open coverage/lcov-report/index.html",
    "coverage:open": "open coverage/lcov-report/index.html",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "release:android": "cd android && ./gradlew assembleRelease",
    "open:android:release": "open android/app/build/outputs/apk",
    "lint": "eslint -c .eslintrc . --ignore-path .eslintignore",
    "lint:fix": "eslint -c .eslintrc . --ignore-path .eslintignore --fix"
  },
```

5. Override your `index.ios.js` and `index.android.js` files.

```
import { AppRegistry } from 'react-native'

import yourProject from './src/app'

AppRegistry.registerComponent('yourProject', () => yourProject)
```

6. Run `yarn ios` or `yarn android`.
