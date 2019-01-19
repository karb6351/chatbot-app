import React from 'react'
import { StyleSheet } from 'react-native'
import { Input, Item, Icon } from 'native-base';

const InputGroup = ({iconType, iconName, placholder, value, onChangeText}) => {
  const icon = iconType && iconName ? <Icon type={iconType} name={iconName} style={styles.icon} /> : '';
  return (
    <Item regular style={styles.group}>
      {icon}
      <Input placeholder={placholder ? placholder : ""} value={value ? value : ""} style={styles.input} onChangeText={onChangeText} />
    </Item>
  )
}

const styles = StyleSheet.create({
	group: {
		marginVertical: 10,
		borderRadius: 3,
		paddingHorizontal: 10,
		backgroundColor: '#ffffff',
	},
	icon: {
		color: 'grey'
  },
  input: {

  },
  help: {
    fontSize: 16,
    color: '#c5c5c5',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  }
});


export default InputGroup
