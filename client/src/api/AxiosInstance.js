import axios from 'axios';

export const postInstance = axios.create({
  baseURL: 'http://posts.com:31475', 
});

export const commentInstance = axios.create({
  baseURL: 'http://posts.com:31475', 
});

export const queryInstance = axios.create({
  baseURL: 'http://posts.com:31475', 
});
