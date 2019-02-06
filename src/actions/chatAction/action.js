import * as actionType from './actionType'

export function addMessageItem(item) {
	return {
		type: actionType.ADD_MESSAGE_LIST_ITEM,
		payload: item
	}
}

export function deleteMessageItem(id) {
	return {
		type: actionType.DELETE_MESSAGE_LIST_ITEM,
		payload: id
	}
}

export function setMessageList(list){
	return {
		type: actionType.SET_MESSAGE_LIST,
		payload: list
	}
}

export function setContext(context){
	return {
		type: actionType.SET_CONTEXT,
		payload: context
	}
}

export function setIntent(intent){
	return {
		type: actionType.SET_INTENT,
		payload: intent
	}
}

