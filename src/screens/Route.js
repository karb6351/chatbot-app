import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Route extends Component {
  render() {
    return (
      <View>
        <Text>123</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  myText: {
    fontSize: 14,
    color: 'blue'
  }
})
