import axios from 'axios';

export const postInstance = axios.create({
  baseURL: 'http://posts.com:30089', 
});

export const commentInstance = axios.create({
  baseURL: 'http://posts.com:30089', 
});

export const queryInstance = axios.create({
  baseURL: 'http://posts.com:30089',
});
