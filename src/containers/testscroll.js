import React from 'react';
// import { View, Text } from 'native-base';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import Testitem from './testitem';

/*class Testscroll extends React.Component{
    
}*/
function Testscroll(props) {
	return (
		<View style={{ marginTop: 20 }}>
			<Text>{props.title}</Text>
			<ScrollView style={{ marginTop: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>
				<Testitem style={styles.marginControl} />
				<Testitem style={styles.marginControl} />
				<Testitem style={styles.marginControl} />
			</ScrollView>
		</View>
	);
}

export default Testscroll;

const styles = StyleSheet.create({
	marginControl: {
		marginLeft: 20,
		marginRight: 20
	}
});

