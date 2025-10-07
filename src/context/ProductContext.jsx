import { createContext, useEffect, useState, useContext } from "react";
const ProductList = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const mydata = await response.json();
        setProducts(mydata.products);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ProductList.Provider value={{ products, setProducts }}>
      {children}
    </ProductList.Provider>
  );
};

export const useProduct = () => useContext(ProductList);
