import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function SimpleDescription({icon, message}) {
	return (
		<View style={styles.container}>
			<Icon style={styles.icon} name={icon} size={15} />
			<Text>{message}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  icon: {
    marginRight: 5,
    color: "gray",
    fontSize: 20
  },
  text: {
    color: "gray",
    fontSize: 20
  }
})

export default SimpleDescription;
