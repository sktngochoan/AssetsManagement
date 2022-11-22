import Axios from "axios";
import { Cookies } from "react-cookie";
import { CONFIG } from "../appConstants/Config.js";
import { ENDPOINTS } from "../appConstants/Endpoint.js";
import { PATHS } from "../appConstants/Path.js";

const PUBLIC_URLS = [ENDPOINTS.LOGIN];

const axios = Axios.create({
  baseURL: CONFIG.API_URL,
  timeout: 30000,
});

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      const response = await axios.post(
        "/auth/refreshToken",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["token"]}`;
        return axios(error.config);
      } else {
        const cookies = new Cookies();
        localStorage.clear();
        cookies.remove(CONFIG.AUTH_TOKEN_KEY);
        setTimeout(() => {
          window.location.href = PATHS.LOGIN;
        }, 500);
      }
    }
    refresh = false;
    return error;
  }
);

axios.interceptors.request.use(
  function (config) {
    //don't add auth header if url match ignore list
    if (
      PUBLIC_URLS.indexOf(config.url) >= 0 ||
      config.url.indexOf("public") >= 0
    ) {
      return config;
    }
    //if token is passed in server side
    if (config && config.token) {
      //modify header here to include token
      Object.assign(config.headers, {
        Authorization: `Bearer ${config.token}`,
      });
    } else {
      const token = sessionStorage.getItem(CONFIG.AUTH_TOKEN_KEY);
      if (token) {
        Object.assign(config.headers, { Authorization: `Bearer ${token}` });
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   function (response) {
//     if (response?.config?.url === ENDPOINTS.LOGIN) {
//       // console.log(response.data);
//       const jwt = response.data.data.jwt;
//       sessionStorage.setItem(CONFIG.AUTH_TOKEN_KEY, jwt);
//     }
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     const status = error.response?.status ?? "";
//     if (status === 401) {
//       sessionStorage.removeItem(CONFIG.AUTH_TOKEN_KEY);
//       setTimeout(() => {
//         window.location.href = PATHS.LOGIN;
//       }, 500);
//     }
//     return Promise.reject(error);
//   }
// );

const API = {
  get: (endpoint, params = {}) => axios.get(endpoint, { params }),
  post: (endpoint, data = {}) => axios.post(endpoint, data),
  put: (endpoint, data) => axios.put(endpoint, data),
  del: (endpoint, params = {}) => axios.delete(endpoint, { params }),
};

export default API;
