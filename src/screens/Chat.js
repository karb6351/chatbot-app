import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Dimensions, Platform } from 'react-native';
import { Button } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import asyncStorage from '../AsyncStorage';
import Axios from '../services/axios';
import * as chatApi from '../api/chat';
import * as locationApi from '../api/location';

import Map from '../components/Map';
import MapView from 'react-native-maps';

import {
	addMessageItem,
	deleteMessageItem,
	setContext,
	setIntent,
	setOriginLocation,
	setDestination
} from '../actions/chatAction/action';
import { USER_CHATROOM_ID, IDNETIFIER, MAP_ICON_COLOR } from '../constant';
import { bulidChatbotMessage } from '../helpers/message';

import { getIdentifier } from '../helpers/identifier';
import { getCurrentLocation, formatLocation } from '../helpers/location';

// import TestHome from '../containers/TestHome';
// import Testscroll from '../containers/testscroll';

// const MapContainer = styled(View)`
// 	position: relative;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: ${props => props.containerHeight};
// `;

class Chat extends Component {
	constructor(props) {
		super(props);

		this.init();

		this.state = {
			width: 0,
			height: 0,
			mapWrapperHeight: 0,
			isFullscreen: false,
			isOpen: false
		};
	}

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
			title: 'Chat',
			// <Button transparent onPress={() => navigation.navigate('Map')}>
			headerRight: (
				<Button transparent onPress={() => params.toggleMap()}>
					<FontAwesome5 name={'map-marker-alt'} size={24} style={styles.mapIcon} />
				</Button>
			)
		};
	};

	init = async () => {
		try {
			let id = await asyncStorage.get(IDNETIFIER);
			if (!id) {
				id = getIdentifier();
				await asyncStorage.set(IDNETIFIER, id);
			}
			const { data } = await chatApi.init(id);
			Axios.setTokenHeader(data.jwt);
			data.messages.map((item) => this.props.addMessageItem(bulidChatbotMessage(item)));
		} catch (error) {
			console.error(error);
		}
	};

	componentDidMount = () => {
		this.setState({
			...this.state,
			mapWrapperHeight: Dimensions.get('window').height / 3
		});

		this.props.navigation.setParams({
			toggleMap: this.toggleMap
		});

		getCurrentLocation(
			Dimensions.get('window').width,
			this.state.isFullscreen ? Dimensions.get('window').height : this.state.mapWrapperHeight,
			this.onRegionChange
		);
		// this.setState({
		// 	...this.state,
		// 	mapRegion: location,
		// 	// If there are no new values set the current ones
		// 	lastLat: location.latitude || this.state.lastLat,
		// 	lastLong: location.longitude || this.state.lastLong
		// });
	};

	onRegionChange = async (error, location) => {
		if (error) {
			console.log(error);
		} else {
			try {
				const id = await asyncStorage.get(IDNETIFIER);
				if (id) {
					const response = await locationApi.update(location);
					const { eventType, messages } = response.data;
					if (location) {
						this.props.setOriginLocation(formatLocation(location));
					}
					if (!eventType) {
						console.log('No event happen');
					} else {
						// handle event
						console.log({ eventType, messages });
						switch (eventType) {
							case 'restaurant':
								messages.map((message) => this.props.addMessageItem(bulidChatbotMessage(message)));
								break;
						}
					}
					this.forceUpdate();
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}

	handleSendMessage = async (userMessages = []) => {
		this.props.addMessageItem(userMessages);
		try {
			const response = await chatApi.message(userMessages[0].text, this.props.content, this.props.intent);
			const { messages, context, intent } = response.data;
			this.props.setContext(context);
			this.props.setIntent(intent);
			console.log(messages);
			messages.map((message) => this.props.addMessageItem(bulidChatbotMessage(message)));
		} catch (error) {
			console.error(error.message);
		}
	};

	toggleMap = () => {
		this.setState({ ...this.state, isOpen: !this.state.isOpen });
	};

	handleExpandMap = () => {
		this.setState({ ...this.state, isFullscreen: !this.state.isFullscreen });
	};

	render() {
		return (
			// <SafeAreaView>
			// 	<TestHome/>
			//     <ScrollView>
			//       <Testscroll routeName={"Try"} title={"MotherFucker"}/>
			//       <Testscroll title={"Samsuel L Jackson"}/>
			//       <Testscroll title={"Nick Fury"}/>
			//     </ScrollView>
			// </SafeAreaView>
			<View style={styles.wrapper}>
				<Map
					location={this.props.origin}
					destination={this.props.destination}
					height={this.state.mapWrapperHeight}
					isFullscreen={this.state.isFullscreen}
					isOpen={this.state.isOpen}
					closeMap={this.toggleMap}
					toggleExpandMap={this.handleExpandMap}
					loadingEnabled={true}
					loadingIndicatorColor="#666666"
					loadingBackgroundColor="#eeeeee"
					moveOnMarkerPress={false}
					showsUserLocation={true}
					mode="walking"
				>
					{this.props.origin ? <MapView.Marker coordinate={this.props.origin} title="Current location" /> : null}
					{this.props.destination ? (
						<MapView.Marker coordinate={this.props.destination.coordinate} title={this.props.destination.name} />
					) : null}
				</Map>
				<GiftedChat
					messages={this.props.messages}
					onSend={(messages) => this.handleSendMessage(messages)}
					user={{
						_id: USER_CHATROOM_ID
					}}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	messages: state.chat.messageList,
	content: state.chat.context,
	intent: state.chat.intent,
	origin: state.chat.location.origin,
	destination: state.chat.location.destination
});

const mapDispatchToProps = (dispatch) => ({
	setContext: (context) => {
		dispatch(setContext(context));
	},
	setIntent: (intent) => {
		dispatch(setIntent(intent));
	},
	addMessageItem: (message) => {
		dispatch(addMessageItem(message));
	},
	deleteMessageItem: (id) => {
		dispatch(deleteMessageItem(id));
	},
	setOriginLocation: (origin) => {
		dispatch(setOriginLocation(origin));
	},
	setDestination: (origin) => {
		dispatch(setDestination(origin));
	}
});

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	mapIcon: {
		color: MAP_ICON_COLOR,
		marginRight: 20,
		marginTop: Platform.OS === 'ios' ? 0 : 15
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
