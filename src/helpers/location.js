import { Platform } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Info from 'react-native-device-info';

export const getCurrentLocation = (width, height, cb) => {
	this.watchID = navigator.geolocation.watchPosition(
		(position) => {
			// Create the object to update this.state.mapRegion through the onRegionChange function
			const region = formatLocation(position.coords, width, height);
			cb(null, region)
		},
		(error) => {
			cb(error)
		},
		{ enableHighAccuracy: Platform.OS != 'android', timeout: 2000, maximumAge: 2000 }
	);
};

export const formatLocation = (location, width, height) => {
	const LATITUDE_DELTA = 0.001758;
	// check height is or not zero to prevent math error
	const longitudeDelta =
		height && width ? (height === 0 ? LATITUDE_DELTA : LATITUDE_DELTA * width / height) : LATITUDE_DELTA;
	return {
		latitude: location.latitude,
		longitude: location.longitude,
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: longitudeDelta
	};
};

export const requestLocationPermission = async () => {
	try {
		const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
			title: Info.getApplicationName(),
			message: `${Info.getApplicationName()} access to your location`
		});
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('You can use the location');
		} else {
			console.log('location permission denied');
		}
	} catch (err) {
		console.warn(err);
	}
};
