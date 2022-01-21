import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.11.2:3333",
});

export default API;
