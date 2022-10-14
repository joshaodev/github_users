import axios from "axios";

export const myApi = axios.create({
  baseURL: "http://localhost:5000",
});

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
});
