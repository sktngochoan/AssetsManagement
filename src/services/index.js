import { ENDPOINTS } from "../appConstants/Endpoint.js";
import API from "./API";
const { get, del, put, post } = API;
export const getUserByUsername = async (username) => {
  return get(`${ENDPOINTS.USER}?username=${username}`);
};

export const createUser = async (data) => {
  return post(ENDPOINTS.USER, data);
};

export const getListUser = async (page, search, sort, type) => {
  return get(
    `${ENDPOINTS.USER}?page=${page}&&search=${search}&&sort=${sort}&&type=${type}`
  );
};

export const updateUser = async (data) => {
  return post(ENDPOINTS.USER, data);
};

export const disableUser = async (username) => {
  return post(`${ENDPOINTS.USER}/:${username}/disable`);
};

export const login = async (data) => {
  return post(ENDPOINTS.LOGIN, data);
};