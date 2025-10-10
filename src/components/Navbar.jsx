import { useState } from "react";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const { addtoCart, setAddtoCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const handleCartBehavor = () => {
    setIsOpen(!isOpen);
  };

  const removeItem = (id) => {
    const updatedCart = addtoCart.filter((item) => item.id !== id);
    setAddtoCart(updatedCart);
  };
  const increaseQuantity = (id) => {
    setAddtoCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setAddtoCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="flex m-auto justify-around relative">
      <h2>MyShop</h2>
      <button onClick={handleCartBehavor}>Cart ({addtoCart.length})</button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
          {addtoCart.length === 0 ? (
            <p className="text-gray-500 text-sm text-center mb-3">
              Your cart is empty
            </p>
          ) : (
            addtoCart.map((item) => (
              <div
                key={item.id}
                className="flex border-b border-gray-200 py-2 px-2"
              >
                <button
                  onClick={() => removeItem(item.id)}
                  className="mr-2 text-red-500 font-bold hover:text-red-700"
                >
                  x
                </button>
                <div className="">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.price}€</p>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <span>Item Price:{item.quantity * item.price}</span>
                </div>
              </div>
            ))
          )}

          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-3 bg-rose-200 hover:bg-rose-300 text-sm font-medium py-1 rounded-md"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
