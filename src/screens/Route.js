import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import RouteCardItem from '../containers/RouteCardItem'

export default class Route extends Component {
  static navigationOptions = {
    title: 'Routes',
  };
  render() {
    return (
      <ScrollView>
        {Array(5).fill(1).map((item, index) => <RouteCardItem key={index}/>)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  
})
