import product from "./product";

function Price() {
  return (
    <p className="text-lg font-semibold text-blue-600">
      <span className="text-gray-700">Price:</span> {product.price}
    </p>
  );
}

export default Price;
