import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import SimpleDescription from './SimpleDescription';
import Tag from './Tag';
import ImageHeader from './ImageHeader';
import { Button } from 'native-base';

import { BASE_API_URL, MAIN_COLOR } from '../../constant';

function getThumbnail(thumbnail){
	const obj = JSON.parse(thumbnail);
	return BASE_API_URL + obj[0].dataURL;
}

function calculateTotalTime(events){
	const time = events.reduce((sum, current) => {
		return sum + current.duration
	}, 0);
	return  Math.round(time / 1000 / 60 * 100) / 100;
}

function getTags(route){
	const restaurants = route.event.map(item => item.Restaurant);
	const cultures = restaurants.map(item => item.culture);
	const faltedCultures = [].concat.apply([], cultures);
	const distinctCultures = [...new Set(faltedCultures)];
	console.log(distinctCultures);
	return distinctCultures;
}

function RouteCardItem(props) {
	return (
		<View style={styles.cardContainer}>
			{/* <ImageHeader title="Route title" source={require('../../asset/images/test.jpeg')} /> */}
			<ImageHeader title={props.title} source={{ uri: getThumbnail(props.thumbnail) }} />
			<View style={styles.cardBody}>
				<View style={styles.cardRow}>
					<View style={styles.tagGroup}>
						{getTags(props.route).map((item, index) => <Tag key={index} color={item.color} text={item.name} />)}
						{/* <Tag color="#e5d529" text="Taiwan" /> */}
						{/* <Tag color="#4adb34" text="廣東" /> */}
					</View>
					<View>
						<Button iconLeft small bordered style={styles.routeButton} onPress={props.mapHandler}>
							{/* <Icon name="ios-locate" /> */}
							<Icon name="ios-locate" style={styles.routeButtonIcon} />
							<Text style={styles.routeButtonText}>Meeting Point</Text>
						</Button>
					</View>
				</View>
				<View style={{ ...styles.cardRow, justifyContent: 'flex-start' }}>
					<SimpleDescription icon="ios-time" message={`Around ${calculateTotalTime(props.route.event)}min`} />
					<SimpleDescription icon="ios-restaurant" message={`${props.route.event.length} restaurants`} />
				</View>
				{/* <View style={styles.cardRow}>
          <Text style={styles.descriptionText}>
            {props.text}
          </Text>
        </View> */}
				<View style={styles.bottomRow}>
					<Button block style={props.isJoined ? styles.joinedButton : styles.joinButton} onPress={props.joinHandler} disabled={props.isJoined}>
						<Text style={styles.joinButtonText}>Join</Text>
					</Button>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		borderWidth: 1,
		borderRadius: 3,
		borderColor: '#dddddd',
		marginVertical: 5,
		marginHorizontal: 10,
		shadowColor: 'black',
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowOpacity: 0.1
	},
	cardBody: {
		padding: 10
	},
	cardRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 5
	},
	tagGroup: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	descriptionText: {
		fontSize: 16
	},
	bottomRow: {
		marginVertical: 5
	},
	joinButton: {
		paddingHorizontal: 10,
		borderRadius: 4,
		backgroundColor: MAIN_COLOR
	},
	joinedButton:{
		backgroundColor: 'grey'
	},
	routeButton: {
		paddingHorizontal: 10,
		borderRadius: 4,
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: '#007aff'
	},
	routeButtonIcon: {
		marginTop: 1,
		marginRight: 2,
		color: '#007aff'
	},
	routeButtonText: {
		fontSize: 15,
		color: '#007aff'
	},
	joinButtonText: {
		color: '#ffffff',
		fontSize: 18
	}
});

export default RouteCardItem;
