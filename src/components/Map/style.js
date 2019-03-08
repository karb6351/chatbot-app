import MapView from 'react-native-maps';
import styled, { css } from 'styled-components';
import { Dimensions, View } from 'react-native';
import { Button } from 'native-base';

const absoluteFill = css`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

const mapWidht = 96;

export const MapContent = styled(MapView)`
  flex: 1;
`;

export const MapFullScreenContainer = styled(View)`
  ${absoluteFill};
  z-index: 1;
`;

export const MapEmbedContainer = styled(View)`
  ${absoluteFill};
  z-index: 1;
  top: 15;
  width: ${`${mapWidht}%`};
  max-height: ${(props) => (props.isFullScreen ? '100%' : props.height)};
  height: ${(props) => (props.isFullScreen ? '100%' : props.height)};
  margin-left: ${(props) => (props.isFullScreen ? 0 : Dimensions.get('window').width * (100 - mapWidht) / 100 / 2)};
  margin-right: ${(props) => (props.isFullScreen ? 0 : Dimensions.get('window').width * (100 - mapWidht) / 100 / 2)};
  margin-top: ${(props) => (props.isFullScreen ? 0 : 10)};
  box-shadow: ${(props) => (props.isFullScreen ? 'null' : '0px 0px 5px #cfcdcf')};
`;

const OptionMapButton = styled(Button)`
  padding-top: 5;
  padding-bottom: 5;
  padding-left: 18;
  padding-right: 18;
  color: #5f5f5f;
  background-color: #e9e9e9;
`;

export const OptionCloseButton = styled(OptionMapButton)`
  background-color: #e0e0e0;
  border-radius: 0;
  border-top-left-radius: 8;
  border-bottom-left-radius: 8;
`;

export const OptionExpandButton = styled(OptionMapButton)`
  border-radius: 0;
  border-top-right-radius: 8;
  border-bottom-right-radius: 8;
`;

export const OptionMapButtonGroup = styled(View)`
  z-index: 1;
  position: absolute;
  top: 10;
  left: 5;
  flex-direction: row;
`;
