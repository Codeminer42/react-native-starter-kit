import React from 'react'

import {
  Actions,
  Scene,
} from 'react-native-router-flux'

import Home from './home'

export default Actions.create(
  <Scene
    key="root"
    hideNavBar
  >
    <Scene
      key="home"
      component={Home}
    />
  </Scene>
)
