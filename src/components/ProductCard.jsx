import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 object-contain mb-2 rounded"
      />
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      <p className="text-sm text-gray-600 flex-1">
        {product.description.substring(0, 60)}...
      </p>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-bold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 cursor-pointer"
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
