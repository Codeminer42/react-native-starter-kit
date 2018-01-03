import React from 'react'

import {
  AppState,
  View,
} from 'react-native'

import {
  connect,
  Provider,
} from 'react-redux'
import { Router } from 'react-native-router-flux'

import createStore from './store'
import Sandbox from './sandbox'
import Scenes from './scenes'

const ConnectedRouter = connect()(Router)
const isSandbox = false
const store = createStore()

const App = () => (
  isSandbox ? <Sandbox /> : (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <ConnectedRouter
          appState={AppState}
          scenes={Scenes}
        />
      </View>
    </Provider>
  )
)

export default App
