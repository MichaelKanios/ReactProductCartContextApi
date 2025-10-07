import { useCart } from "../context/CartContext";

const ProductList = ({ product }) => {
  const { addtoCart, setAddtoCart } = useCart();

  const handleAddtoCart = () => {
    setAddtoCart([...addtoCart, product]);
  };
  return (
    <div>
      <ul>
        <img className="w-sm" src={product.images[0]} alt={product.title} />
        <li>{product.title}</li>
        <p>{product.price}€</p>
        <button onClick={handleAddtoCart} className="px-1 py-2 bg-rose-200">
          Add to cart
        </button>
      </ul>
    </div>
  );
};

export default ProductList;
