import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = () =>
  api.get("/products").then((res) => res.data.products);

export const fetchCategories = () =>
  api.get("/products/category-list").then((res) => res.data);

export const fetchProductsByCategory = (category) =>
  api.get(`/products/category/${category}`).then((res) => res.data.products);

export const searchProducts = (query) =>
  api.get(`/products/search?q=${query}`).then((res) => res.data.products);

export const searchInCategory = (category, query) => {
  if (category && query) {
    return api
      .get(`/products/category/${category}`)
      .then((res) =>
        res.data.products.filter(
          (p) =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        )
      );
  } else if (query) {
    return searchProducts(query);
  } else if (category) {
    return fetchProductsByCategory(category);
  } else {
    return fetchProducts();
  }
};
