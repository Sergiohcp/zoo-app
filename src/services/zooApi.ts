import axios from "axios";

export const zooApi = axios.create({
  baseURL: "https://zoo-animal-api.herokuapp.com",
  timeout: 15000,
});
