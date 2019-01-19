import React, { Component } from 'react';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from './screens/Login';

// import Route from './screens/Route';
import RouteNavigator from './navigators/RouteNavigator';
import Chat from './screens/Chat';
import User from './screens/User';

import { MAIN_COLOR, INACTIVE_TAB_BAR_COLOR } from './constant';

const AppNavigator = createAppContainer(
	createBottomTabNavigator(
		{
			Route: {
        screen: RouteNavigator,
        navigationOptions:{
          tabBarLabel: "Route",
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="ios-navigate" size={28} color={tintColor} />
          )
        }
			},
			Chat: {
        screen: Chat,
        navigationOptions:{
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="ios-chatbubbles" size={28} color={tintColor} />
          )
        }
			},
			User: {
        screen: User,
        navigationOptions:{
          tabBarLabel: "User",
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="ios-contact" size={28} color={tintColor} />
          )
        }
			}
		},
		{
      initialRouteName: 'Route',
      tabBarOptions: {
        activeTintColor: MAIN_COLOR,
        inactiveTintColor: INACTIVE_TAB_BAR_COLOR,
        labelStyle: {
          fontSize: 12
        },
        style: {
          height: 50,
          paddingTop: 5
        }
      },
		}
	)
);

export default class App extends Component {
	render() {
		return (
      <AppNavigator />
      // <Login></Login>
		);
	}
}
