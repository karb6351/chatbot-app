import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapComponent from '../components/Map';

import { connect } from 'react-redux'

class Map extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<MapComponent
					location={this.props.origin}
					destination={null}
					height={Dimensions.get('window').height}
					isFullscreen={true}
					isOpen={true}
					loadingIndicatorColor="#666666"
					loadingBackgroundColor="#eeeeee"
					mode="walking"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	map: {
		...StyleSheet.absoluteFill
	}
});


const mapStateToProps = (state) => ({
	origin: state.chat.location.origin,
});


export default connect(mapStateToProps, null)(Map);
