import { Link } from "react-router";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RxHome } from "react-icons/rx";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between sticky top-0 z-20">
      <Link
        to="/"
        className="font-bold hover:scale-105 hover:text-sky-200 transition duration-150 ease-in-out"
      >
        <RxHome size={26} />
      </Link>
      <Link
        to="/cart"
        className="font-bold hover:scale-105 hover:text-sky-200 transition duration-150 ease-in-out"
      >
        <PiShoppingCartSimpleBold size={26} />
      </Link>
    </header>
  );
};

export default Header;
