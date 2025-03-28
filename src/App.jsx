import { useEffect, useState } from "react";
import Button from "./components/button/Button";
import ProductCard from "./components/cards/ProductCard";
import { NavbarComponents } from "./components/layouts/NavbarComponent";

function App() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  // get product function
  async function getAllProduct() {
    const products = await fetch("https://dummyjson.com/products").then(
      (response) => response.json()
    );

    // set state
    setProducts(products.products);
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  console.log("products :>> ", products);
  console.log("Before call");

  return (
    <>
      <h1 className="text-5xl text-blue-700 font-bold">{count}</h1>

      <button onClick={() => setCount(count + 1)}>count</button>
      {/* card section */}
      <section className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </section>
    </>
  );
}

export default App;
