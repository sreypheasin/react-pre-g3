import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getData from "../../../services/get/getData";
import ProductCard from "../../../components/cards/ProductCard";

export default function ProductCategoriesPage() {
  const param = useParams();
  console.log(param.uuid);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const productsData = await getData(
        `products/get-by-category/${param.uuid}`
      );

      console.log("data :>> ", productsData.content);
      // update state categories
      setProducts(productsData.content);
    }
    getProduct();
  }, [param.uuid]);

  return (
    <section>
      <h1>Category page</h1>
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
    </section>
  );
}
