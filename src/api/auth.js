import axios from '../config/axios';

export const login = (username, password) => {
  return axios.post('/login', {
    username, password
  });
}