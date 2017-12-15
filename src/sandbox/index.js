import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const Sandbox = () => (
  <View style={styles.container}>
    <Text>It's the sandbox!</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Sandbox
