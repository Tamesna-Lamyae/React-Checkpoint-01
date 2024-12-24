import product from "./product";

function Image() {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="w-full rounded-lg shadow-lg"
    />
  );
}

export default Image;
