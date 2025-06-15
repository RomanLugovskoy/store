import { useCart } from "../context/contextHandler";
import { Link } from "react-router";
import CartBtn from "../components/CartBtn";

const Cart = () => {
  const { items, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="p-4">
        <h2 className="text-2xl mb-3">Your cart is empty</h2>
        <Link to="/" className="text-blue-600 hover:underline text-xl">
          Back to catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Cart</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>Quantity: {item.qty}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span>${(item.price * item.qty).toFixed(2)}</span>
              <CartBtn item={item} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
        <div className="flex gap-1">
          <button
            disabled
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500"
          >
            Checkout
          </button>
          <button
            onClick={() => {
              confirm("Are you sure you want to clear the cart?") &&
                clearCart();
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
