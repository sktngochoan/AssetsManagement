import { CONFIG } from "./config";
import { PATHS } from "./path";

export const ENDPOINTS = {
    USER: CONFIG.API_URL +PATHS.USER,
    LOGIN: CONFIG.API_URL +PATHS.AUTH
}