import { useCart } from "../context/contextHandler";

const ProductBtn = ({ isInCart, product }) => {
  const { addToCart, increaseQty, decreaseQty, items } = useCart();
  const item = items.find((x) => x.id === product.id);
  const qty = item ? item.qty : 0;

  if (isInCart) {
    return (
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          onClick={() => decreaseQty(product.id)}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-rose-700 dark:border-gray-600 hover:bg-rose-700 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-rose-700 focus:ring-1 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          value={qty}
          readOnly
          className="bg-gray-50 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-default"
        />
        <button
          type="button"
          onClick={() => increaseQty(product.id)}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-emerald-600 dark:border-gray-600 hover:bg-emerald-600 border border-gray-300 rounded-e-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-emerald-700 focus:ring-1 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300 ease-in-out font-medium"
      >
        Add
      </button>
    );
  }
};

export default ProductBtn;
