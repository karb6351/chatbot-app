import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '../AsyncStorage';
import Axios from '../services/axios';
import * as chatApi from '../api/chat';

import { addMessageItem, deleteMessageItem, setContext, setIntent } from '../actions/chatAction/action';
import { USER_CHATROOM_ID, IDNETIFIER, MAP_ICON_COLOR } from '../constant';
import { bulidChatbotMessage } from '../helpers/message';

// import TestHome from '../containers/TestHome';
// import Testscroll from '../containers/testscroll';

class Chat extends Component {
	constructor(props) {
		super(props);

		init();

		this.state = {
			mapWrapperHeight: 0
		};
	}

	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Chat',
			headerRight: (
				<Button transparent onPress={() => navigation.navigate('Map') }>
					<FontAwesome5 name={'map-marker-alt'} size={24} style={styles.mapIcon} />
				</Button>
			)
		};
	};

	init = () => {
		AsyncStorage.get(IDNETIFIER)
			.then((identify) => {
				return chatApi.init(identify);
			})
			.then(({ data }) => {
				Axios.setTokenHeader(data.jwt);
				data.messages.map((item) => {
					this.props.addMessageItem(bulidChatbotMessage(item));
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	componentDidMount = () => {
		this.setState({
			...this.state,
			mapWrapperHeight: Dimensions.get('window').height / 2
		});
	};

	handleSendMessage = async (userMessages = []) => {
		this.props.addMessageItem(userMessages);
		try {
			const response = await chatApi.message(userMessages[0].text, this.props.content, this.props.intent);
			const { messages, context, intent } = response.data;
			this.props.setContext(context);
			this.props.setIntent(intent);
			messages.map((message) => this.props.addMessageItem(bulidChatbotMessage({ message })));
		} catch (error) {
			console.error(error.message);
		}
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
	intent: state.chat.intent
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
	}
});

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	mapIcon: {
		color: MAP_ICON_COLOR,
		marginRight: 20
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
