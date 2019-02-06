import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

import Login from './Login';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class User extends Component {
	render() {
		return (
			// <SafeAreaView>
			//   <Text> this is user view </Text>
			// </SafeAreaView>
			// <Login />
			// <MapView
			// 	initialRegion={{
			// 		latitude: 37.78825,
			// 		longitude: -122.4324,
			// 		latitudeDelta: 0.0922,
			// 		longitudeDelta: 0.0421
			// 	}}
			// 	style={{ ...StyleSheet.absoluteFillObject }}
			// />
			<MapView
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			  style={{ ...StyleSheet.absoluteFillObject }}
			  provider={PROVIDER_GOOGLE}
			/>
		);
	}
}
