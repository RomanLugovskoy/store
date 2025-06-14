import { Link } from "react-router";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RxHome } from "react-icons/rx";
import { useCart } from "../context/contextHandler";

const Header = () => {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-20">
      <Link
        to="/"
        className="font-bold hover:scale-105 hover:text-sky-200 transition duration-150 ease-in-out"
      >
        <RxHome size={26} />
      </Link>

      {/* <Link
        to="/cart"
        className="font-bold hover:text-sky-200 transition duration-150 ease-in-out"
      >
        <PiShoppingCartSimpleBold size={26} />
        {totalItems > 0 && (
          <span className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
            {totalItems}
          </span>
        )}
      </Link> */}
      <Link to="/cart" className="relative translate-[-6px]">
        {totalItems > 0 && (
          <div className="top-1 absolute left-3">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-rose-600 p-2.5 text-xs text-white">
              {totalItems}
            </p>
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="file: mt-4 h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Link>
    </header>
  );
};

export default Header;
