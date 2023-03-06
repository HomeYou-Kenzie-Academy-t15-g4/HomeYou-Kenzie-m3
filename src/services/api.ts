import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://json-server-homeyou.onrender.com',
  timeout: 12000,
});
