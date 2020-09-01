import axios from "axios";
const API_KEY = "4ef68d";
// http://www.omdbapi.com/?i=tt3896198&apikey=4ef68d
const BASE_URL = "http://www.omdbapi.com/?apikey=4ef68d";

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