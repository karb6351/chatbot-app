import axios from 'axios';

const baseUrl = 'http://192.168.2.182:8000/api';
const baseTimeOut = 10000;

export default axios.create({
	baseURL: baseUrl,
	timeout: baseTimeOut
});
