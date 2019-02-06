import axios from 'axios';

import { BASE_API_URL } from '../constant';

const baseUrl = `${BASE_API_URL}/api`;
const baseTimeOut = 10000;

export default axios.create({
	baseURL: baseUrl,
	timeout: baseTimeOut
});
