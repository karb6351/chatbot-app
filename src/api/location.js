import Axios from '../services/axios';

export const update = location => {
	return Axios.axios.put('/location/update', {
    location
  });
};
