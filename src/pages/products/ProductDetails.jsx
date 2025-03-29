import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getData from "../../services/get/getData";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const param = useParams();

  useEffect(() => {
    async function getProduct() {
      const data = await getData(`products/${param.uuid}`);
      setProduct(data);
    }
    getProduct();
  }, [param.uuid]);
  console.log(param.uuid);
  return (
    <section>
      <img src={product.thumbnail} alt={product.name} />
      <h1 className="text-4xl font-bold text-blue-900 mt-5">{product.name}</h1>
    </section>
  );
}
