import {
	MapContent,
	OptionMapButtonGroup,
	OptionCloseButton,
	OptionExpandButton,
	MapFullScreenContainer,
	MapEmbedContainer
} from './style';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { Fragment } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Transition } from 'react-spring/renderprops';

import MapViewDirections from 'react-native-maps-directions';

import { GOOGLE_MAPS_APIKEY } from '../../constant';

export default function Map({ height, isFullscreen, isOpen, closeMap, toggleExpandMap, location, destination, mode }) {
	const direction =
		location && destination ? (
			<MapViewDirections
				strokeWidth={7}
				strokeColor="#498bf4"
				origin={location}
				destination={destination.coordinate}
				apikey={GOOGLE_MAPS_APIKEY}
				mode={mode}
			/>
		) : null;
	const Content = (
		<Fragment>
			<MapContent provider={PROVIDER_GOOGLE} region={location}>
				{direction}
			</MapContent>
			{toggleExpandMap && closeMap ? (
				<OptionMapButtonGroup>
					<OptionCloseButton onPress={closeMap}>
						<FontAwesome5 size={18} name={'times'} />
					</OptionCloseButton>
					<OptionExpandButton onPress={toggleExpandMap}>
						<FontAwesome5 size={18} name={'expand-arrows-alt'} />
					</OptionExpandButton>
				</OptionMapButtonGroup>
			) : null}
		</Fragment>
	);
	return (
		<Transition
			items={isOpen}
			from={{ opacity: 0 }}
			enter={{ opacity: 1 }}
			leave={{ opacity: 0 }}
			config={{ duration: 200 }}
		>
			{(isOpen) =>
				isOpen &&
				((props) =>
					isFullscreen ? (
						<MapFullScreenContainer style={props}>{Content}</MapFullScreenContainer>
					) : (
						<MapEmbedContainer style={props} height={height}>
							{Content}
						</MapEmbedContainer>
					))}
		</Transition>
	);
}

// {
// 	return isFullscreen ? (
// 		<MapFullScreenContainer style={props}>{Content}</MapFullScreenContainer>
// 	) : (
// 		<MapEmbedContainer style={props} height={height}>{Content}</MapEmbedContainer>
// 	)
// }
