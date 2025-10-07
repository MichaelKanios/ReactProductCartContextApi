import { useProduct } from "../context/ProductContext";
import ProductList from "./ProductList";
const Products = () => {
  const { products } = useProduct();
  return (
    <main className="grid grid-cols-2 justify-center text-center gap-8 py-16 max-w-[1280px] mx-auto">
      {products.map((product) => (
        <ProductList key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Products;
