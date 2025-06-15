import { useCart } from "../context/contextHandler";
import ProductBtn from "./ProductBtn";

const ProductCard = ({ product }) => {
  const { items } = useCart();
  const isInCart = items.some((item) => item.id === product.id);

  return (
    <article className="border border-gray-200 rounded-xl p-6 flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative z-10">
      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-roboto text-xl font-bold text-gray-900 mb-2 line-clamp-1">
        {product.title}
      </h3>
      <p className="text-sm text-gray-500 flex-1 line-clamp-3 lg:line-clamp-none">
        {product.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900">
          ${product.price}
        </span>
        <ProductBtn isInCart={isInCart} product={product} />
      </div>
    </article>
  );
};

export default ProductCard;
