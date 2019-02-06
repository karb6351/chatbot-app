import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { Card, ListItem, Icon, Button } from 'react-native-elements';

class Testitem extends React.Component {
	render() {
		return (
			<View style={{ padding: 5 }}>
				<Image style={{ width: 130, height: 50 }} source={require('../images/pic2.jpg')} />
				<View style={{ width: 130, borderWidth: 0.5, borderColor: '#dddddd' }}>
					<View>
						<Text style={{ marginBottom: 10 }}>Caterogies</Text>
					</View>

					<View>
						<Button style={{ width: '100%' }} backgroundColor="#03A9F4" title="View" />
					</View>
				</View>
			</View>
		);
	}
}

export default Testitem;

const styles = StyleSheet.create({
	styleForView: {
		marginTop: 20
	}
});
