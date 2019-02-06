
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


// import Route from './screens/Route';
import RouteNavigator from './RouteNavigator';
import ChatNavigator from './ChatNavigator';
import Chat from '../screens/Chat';
import User from '../screens/User';

import { MAIN_COLOR, INACTIVE_TAB_BAR_COLOR } from '../constant';

const BottomNavigator = createAppContainer(
	createBottomTabNavigator(
		{
			Route: {
				screen: RouteNavigator,
				navigationOptions: {
					tabBarLabel: 'Route',
					tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon name="ios-navigate" size={28} color={tintColor} />
				}
			},
			Chat: {
				screen: ChatNavigator,
				navigationOptions: {
					tabBarLabel: 'Chat',
					tabBarIcon: ({ focused, horizontal, tintColor }) => (
						<Icon name="ios-chatbubbles" size={28} color={tintColor} />
					)
				}
			},
			User: {
				screen: User,
				navigationOptions: {
					tabBarLabel: 'User',
					tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon name="ios-contact" size={28} color={tintColor} />
				}
			}
		},
		{
			initialRouteName: 'Chat',
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
			}
		}
	)
);

export default BottomNavigator