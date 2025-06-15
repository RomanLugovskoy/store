import { useState } from "react";
import { CartContext } from "./contextHandler";

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prev) => {
      const exists = prev.find((x) => x.id === product.id);
      if (exists) {
        return prev.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setItems((prev) =>
      prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x))
    );
  };

  const decreaseQty = (id) => {
    setItems((prev) => {
      const item = prev.find((x) => x.id === id);
      if (item && item.qty === 1) {
        return prev.filter((x) => x.id !== id);
      }
      return prev.map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x));
    });
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  };
  const clearCart = () => setItems([]);
  const total = items.reduce((sum, x) => sum + x.price * x.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
