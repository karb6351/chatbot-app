import axios from '../config/axios';

class Axios {
	constructor() {
		this.axios = axios;
	}

	setTokenHeader = (token) => {
		this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	};
}

let a = new Axios();

export default a;
