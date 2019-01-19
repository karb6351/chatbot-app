import React, { Component } from 'react';
import { View, StyleSheet, ToastAndroid, Platform } from 'react-native';
import { Container, Button, Text } from 'native-base';

import InputGroup from '../containers/InputGroup';

import { login } from '../api/auth';
import asyncStorage from '../AsyncStorage';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.handleUsernameInput = this.handleUsernameInput.bind(this);
		this.handlePasswordInput = this.handlePasswordInput.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleUsernameInput(text) {
		this.setState({
			...this.state,
			username: text
		});
	}

	handlePasswordInput(text) {
		this.setState({
			...this.state,
			password: text
		});
	}

	async handleLogin() {
		const { username, password } = this.state;
		if (username !== '' && password !== '') {
			try{
				const response = await login(username, password);
				const { status, token } = response.data;
					console.log(token);
					asyncStorage.set('jwt_token', token);
					if (Platform.OS === 'ios') {
					} else {
						ToastAndroid.show('You have successfully login', ToastAndroid.LONG);
						const value = asyncStorage.get('jwt_token');
						console.log(value);
					}
			}catch(err) {
				console.log(err.message)
			}
		}
	}

	render() {
		const { username, password } = this.state;
		return (
			<Container style={styles.loginContainer}>
				<View style={styles.formContainer}>
					<InputGroup
						iconName="user"
						iconType="FontAwesome5"
						placholder="Username"
						value={username}
						onChangeText={this.handleUsernameInput}
					/>
					<InputGroup
						iconName="lock"
						iconType="FontAwesome5"
						placholder="Password"
						value={password}
						onChangeText={this.handlePasswordInput}
					/>
					<Button block info bordered rounded style={styles.loginButton} onPress={this.handleLogin}>
						<Text>Log in</Text>
					</Button>
					<View style={styles.divdier}>
						<Text style={styles.divdierText}>OR</Text>
					</View>
					<Button block rounded style={styles.registerButton}>
						<Text>Sign up</Text>
					</Button>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	loginContainer: {
		backgroundColor: '#4286f4',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingVertical: 10,
		paddingHorizontal: 30
	},
	formContainer: {},
	formGroup: {
		marginVertical: 10,
		borderRadius: 5,
		paddingHorizontal: 10,
		backgroundColor: '#ffffff'
	},
	formIcon: {
		color: 'grey'
	},
	loginButton: {
		marginVertical: 10,
		backgroundColor: '#ffffff'
	},
	registerButton: {
		marginVertical: 10,
		backgroundColor: 'transparent',
		borderColor: '#ffffff',
		borderWidth: 1
	},
	container: {
		padding: 10
	},
	divdier: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 5
	},
	divdierText: {
		color: '#ffffff'
	}
});
