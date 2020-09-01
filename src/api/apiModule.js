import axios from "axios";
const BASE_URL = "https://www.omdbapi.com/?apikey=4ef68d";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getLocalStorage = (key) => {
  let value = localStorage.getItem(key);
  return value;
};
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
