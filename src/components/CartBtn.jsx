import { useCart } from "../context/contextHandler";

const CartBtn = ({ item }) => {
  const { increaseQty, decreaseQty } = useCart();
  const qty = item.qty;

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => decreaseQty(item.id)}
        type="button"
        id="decrement-button"
        data-input-counter-decrement="counter-input"
        className="shrink-0 bg-rose-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-9 w-9 md:h-6 md:w-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-2.5 h-2.5 text-gray-900 dark:text-white"
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
        id="counter-input"
        data-input-counter
        className="shrink-0 text-gray-900 dark:text-blue-900 border-0 bg-transparent text-md font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
        placeholder=""
        value={qty}
        readOnly
        required
      />
      <button
        onClick={() => increaseQty(item.id)}
        type="button"
        id="increment-button"
        data-input-counter-increment="counter-input"
        className="shrink-0 bg-emerald-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-9 w-9 md:h-6 md:w-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-2.5 h-2.5 text-gray-900 dark:text-white"
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
};

export default CartBtn;
