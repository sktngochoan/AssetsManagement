import { CONFIG } from "./Config";
import { PATHS } from "./Path";

export const ENDPOINTS = {
  USER: CONFIG.API_URL + PATHS.USER,
  LOGIN: CONFIG.API_URL + PATHS.AUTH,
};
