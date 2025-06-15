import { useCart } from "../context/contextHandler";
import { Link } from "react-router";
import CartBtn from "../components/CartBtn";

const Cart = () => {
  const { items, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="p-4">
        <h2 className="text-xl">Корзина пуста</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Корзина</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>Количество: {item.qty}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span>${(item.price * item.qty).toFixed(2)}</span>
              {/* <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Удалить
              </button> */}
              <CartBtn item={item} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl font-bold">Итого: ${total.toFixed(2)}</span>
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Очистить корзину
        </button>
      </div>
    </div>
  );
};

export default Cart;
