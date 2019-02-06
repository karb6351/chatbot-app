import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { register } from './helpers/identifier';
import BottomNavigator from './navigators/BottomNavigator';
import store from './store';

class App extends Component {
	
	componentDidMount = async () => {
		register()
	};

	render() {
		return (
			<Provider store={store}>
				<BottomNavigator />
			</Provider>
		);
	}
}

export default App;
