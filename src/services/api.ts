import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.106:8080",
});

export default API;
