import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import tinycolor from 'tinycolor2';

function Tag({ text, color }) {
	const textColor = tinycolor(color).isLight() ? '#ffffff' : '#000000';
	return (
		<View style={{ ...styles.container, backgroundColor: color }}>
			<Text style={{...styles.text, color: textColor}}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 2,
		borderRadius: 15,
		paddingVertical: 5,
		paddingHorizontal: 10
  },
  text: {
    fontSize: 15,
  }
});

export default Tag;
