import { useState } from "react";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const { addtoCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const handleCartBehavor = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex m-auto justify-around relative">
      <h2>MyShop</h2>
      <button onClick={handleCartBehavor}>Cart ({addtoCart.length})</button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
          {addtoCart.length === 0 ? (
            <p className="text-gray-500 text-sm text-center mb-3">
              Your cart is empty
            </p>
          ) : (
            addtoCart.map((item) => (
              <div key={item.id} className="border-b border-gray-200 py-2">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-600">{item.price}€</p>
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
