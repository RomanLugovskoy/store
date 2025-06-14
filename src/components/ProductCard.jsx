import { useCart } from "../context/contextHandler";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-xl p-6 flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative z-10">
      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-sm text-gray-500 flex-1 line-clamp-3">
        {product.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900">
          ${product.price}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out font-medium"
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
