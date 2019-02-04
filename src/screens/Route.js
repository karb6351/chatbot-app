import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import RouteCardItem from '../containers/RouteCardItem'


export default class Route extends Component {
  static navigationOptions = {
    title: 'Routes',
  };
  
  render() {
    const hi = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
    return (
      <ScrollView>
        {Array(5).fill(1).map((item, index) => <RouteCardItem text={hi}  key={index}/>)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  
})
