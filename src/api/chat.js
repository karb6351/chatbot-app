import Axios from '../services/axios';


export const init = (identifier, username = null) => {
	return Axios.axios.post('/chat/init', {
		identifier,
		username
	});
};

export const join = () => {

}

export const message = (message, context, intent) => {
	return Axios.axios.post('/chat/message', {
		message,
		context,
		intent
	});
};
