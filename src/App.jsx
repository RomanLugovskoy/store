import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
