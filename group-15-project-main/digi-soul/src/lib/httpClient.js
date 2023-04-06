import axios from "axios";

export const httpClient = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_URL,
  // baseURL: "http://localhost:3002/api",
  baseURL: "https://digi-soul.onrender.com/api",
});
