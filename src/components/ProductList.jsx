import { useCart } from "../context/CartContext";

const ProductList = ({ product }) => {
  const { addtoCart, setAddtoCart } = useCart();

  const handleAddtoCart = (product) => {
    const alreadyInCart = addtoCart.some((item) => item.id === product.id);

    if (!alreadyInCart) {
      setAddtoCart([...addtoCart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div>
      <ul>
        <img className="w-sm" src={product.images[0]} alt={product.title} />
        <li>{product.title}</li>
        <p>{product.price}€</p>
        <button
          onClick={() => handleAddtoCart(product)}
          className="px-1 py-2 bg-rose-200"
        >
          Add to cart
        </button>
      </ul>
    </div>
  );
};

export default ProductList;
