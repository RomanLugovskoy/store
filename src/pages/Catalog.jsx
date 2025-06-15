import { useEffect, useState } from "react";
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
  searchProducts,
} from "../utils/api";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    fetchCategories().then(setCategories).catch(console.error);
    fetchProducts().then(setProducts).catch(console.error);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      searchProducts(debouncedSearch).then(setProducts).catch(console.error);
    } else if (selectedCategory) {
      fetchProductsByCategory(selectedCategory)
        .then(setProducts)
        .catch(console.error);
    } else {
      fetchProducts().then(setProducts).catch(console.error);
    }
  }, [debouncedSearch, selectedCategory]);

  return (
    <div className="p-4 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white w-full p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="bg-white w-full p-2 border rounded font-roboto capitalize"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((cat, i) => (
          <option className="capitalize" key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
