import Axios from '../services/axios';


export const getRoutes = () => {
	return Axios.axios.get('/route');
};
