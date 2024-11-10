import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const verifiedInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

verifiedInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user'); // 로컬스토리지에서 user 값을 가져옵니다.
    if (token) {
      config.headers['token'] = `${token}`; //
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;