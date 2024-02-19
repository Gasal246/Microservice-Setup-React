import axios from 'axios';

export const postInstance = axios.create({
  baseURL: 'http://localhost:4000', 
});

export const commentInstance = axios.create({
  baseURL: 'http://localhost:4040', 
});
