import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = () =>
  api.get("/products").then((res) => res.data.products);

export const fetchCategories = () =>
  api.get("/products/categories").then((res) => res.data);

export const fetchProductsByCategory = (category) =>
  api.get(`/products/category/${category}`).then((res) => res.data.products);
