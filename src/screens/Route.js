import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import RouteCardItem from '../containers/RouteCardItem';

import { addMessageItem, setDestination, setIsJoin, setEvent } from '../actions/chatAction/action';

import * as routeApi from '../api/route';
import * as chatApi from '../api/chat';
import { bulidChatbotMessage } from '../helpers/message';

class Route extends Component {
	static navigationOptions = {
		title: 'Routes'
	};

	constructor(props) {
		super(props);
		this.state = {
			routes: [],
			joined: false
		};
	}

	componentDidMount = async () => {
		try {
			const response = await routeApi.getRoutes();
			const { routes } = response.data;
			this.setState({
				...this.state,
				routes
			});
		} catch (error) {}
	};

	handleJoinRoute = async (id) => {
		try {
			const response = await chatApi.join(id);
			const { messages, restaurant, event } = response.data;
			this.props.addMessageItem({
				_id: 1,
				text: 'Food route is selected',
				createdAt: new Date(),
				system: true
			});
			messages.map((message) => this.props.addMessageItem(bulidChatbotMessage(message)));
			this.props.setDestination(restaurant);
			this.props.setEvent(event);
			// this.setState({
			// 	...this.state,
			// 	joined: true
			// })
			this.props.setIsJoin(true);
			this.props.navigation.navigate('Chat');
		} catch (error) {
			console.error(error);
		}
	};

	handleMap = () => {
		console.log(this.props.navigation);
		this.props.navigation.navigate('Map');
	}


	render() {
		const routesCard = this.state.routes.map((route, index) => (
			<RouteCardItem
				route={route}
				title={route.title}
				thumbnail={route.thumbnail}
				joinHandler={() => this.handleJoinRoute(route.id)}
				mapHandler={() => this.handleMap()}
        key={index}
        isJoined={this.props.isJoin}
			/>
		));
		return <ScrollView>{routesCard}</ScrollView>;
	}
}

const mapDispatchToProps = (dispatch) => ({
	addMessageItem: (message) => {
		dispatch(addMessageItem(message));
	},
	setDestination: (destination) => {
		dispatch(setDestination(destination));
	},
	setIsJoin: (isJoin) => {
		dispatch(setIsJoin(isJoin))
	},
	setEvent: (event) => {
		dispatch(setEvent(event))
	}
});

const mapStateToProps = (state) => ({
	destination: state.chat.location.destination,
	isJoin: state.chat.isJoin
})

export default connect(mapStateToProps, mapDispatchToProps)(Route);
