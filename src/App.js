import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform } from 'react-native';

import { register } from './helpers/identifier';
import BottomNavigator from './navigators/BottomNavigator';
import store from './store';

import { requestLocationPermission } from './helpers/location';

class App extends Component {
	
	// componentDidMount = async () => {
	// 	await register()
	// };

	componentDidMount = async () => {
		if (Platform.OS === 'android'){
			await requestLocationPermission()
		}
	}
	render() {
		return (
			<Provider store={store}>
				<BottomNavigator />
			</Provider>
		);
	}
}

export default App;
