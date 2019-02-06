import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Map extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFill 
  }
});
