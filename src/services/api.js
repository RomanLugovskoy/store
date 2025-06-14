import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = () =>
  api.get("/products").then((res) => res.data.products);
