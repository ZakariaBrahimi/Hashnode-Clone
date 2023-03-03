import axios from "axios";


export const axiosAPI = axios.create({
    baseURL: `http://127.0.0.1:8000/hashnode/api/`,
  });


export const axiosAuth = axios.create({
    baseURL: `http://127.0.0.1:8000/auth/`,
  });

