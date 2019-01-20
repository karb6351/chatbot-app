import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

import Login from './Login'

export default class User extends Component {
  render() {
    return (
      // <SafeAreaView>
      //   <Text> this is user view </Text>
      // </SafeAreaView>
      <Login />
    )
  }
}
