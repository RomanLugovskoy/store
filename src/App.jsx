import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import { CartProvider } from "./context/CartContext";
import { Suspense, lazy } from "react";

const Catalog = lazy(() => import("./pages/Catalog"));
const Cart = lazy(() => import("./pages/Cart"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <Spinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Catalog />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;
