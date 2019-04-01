import { GiftedChat } from 'react-native-gifted-chat';

import * as actionType from '../actions/chatAction/actionType';

const initState = { context: null, intent: null, messageList: [], location: { origin: null, destination: null}, isJoin: false };

export default function(state = initState, { type, payload }) {
	switch (type) {
		case actionType.ADD_MESSAGE_LIST_ITEM:
		case actionType.SET_MESSAGE_LIST:
			return {
				...state,
				messageList: GiftedChat.append(state.messageList, payload)
			};
		case actionType.DELETE_MESSAGE_LIST_ITEM:
			return {
				...state,
				messageList: state.messageList.filter((item) => item._id !== payload)
			};
		case actionType.SET_CONTEXT:
			return {
				...state,
				context: payload
			}
		case actionType.SET_INTENT:
			return {
				...state,
				intent: payload
			}
		case actionType.SET_ORIGIN_LOCATION:
			return {
				...state,
				location: {
					...state.location,
					origin: payload
				}
			}
		case actionType.SET_DESTINATION:
			return {
				...state,
				location: {
					...state.location,
					destination: payload
				}
			}
		case actionType.SET_IS_JOIN:
			return {
				...state,
				isJoin: payload
			}
		default:
			return state;
	}
}
