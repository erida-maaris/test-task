import axios from 'axios';

const service = axios.create({
  baseURL: `${import.meta.env.VITE_API}`,
  validateStatus: (status) => status >= 200 && status < 300,
});

export default service;
