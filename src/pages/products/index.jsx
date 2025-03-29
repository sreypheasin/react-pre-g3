import React, { useEffect, useState } from "react";
import getData from "../../services/get/getData";
import ProductCard from "../../components/cards/ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const data = await getData("products");

      console.log("data :>> ", data.content);
      // update state products
      setProducts(data.content);
    }
    getProduct();
  }, []);

  //
  return (
    <div>
      {/* card section */}
      <section className="grid grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            thumbnail={product.thumbnail}
            name={product.name}
            priceOut={product.priceOut}
            discount={product.discount}
            uuid={product.uuid}
          />
        ))}
      </section>
    </div>
  );
}
