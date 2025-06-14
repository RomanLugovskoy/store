import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">
        Каталог
      </Link>
      <Link to="/cart" className="font-bold">
        Корзина
      </Link>
    </header>
  );
};

export default Header;
