import product from "./product";

function Description() {
  return (
    <p className="text-gray-600 mt-2">
      <span className="font-semibold">Description:</span> {product.description}
    </p>
  );
}

export default Description;
