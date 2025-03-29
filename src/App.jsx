import { useEffect, useState } from "react";
import getData from "./services/get/getData";
import { CategoryCard } from "./components/cards/CategoryCard";
import ProductCard from "./components/cards/ProductCard";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const data = await getData("categories");
      const productsData = await getData("products");

      console.log("data :>> ", data.content);
      // update state categories
      setCategories(data.content);
      setProducts(productsData.content);
    }
    getProduct();
  }, []);

  console.log("categories :>> ", categories);
  return (
    <>
      {/* categories section */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 text-center">
          Popular Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {categories.slice(0, 5).map((category, index) => (
            <CategoryCard
              key={index}
              media={category.media}
              name={category.name}
              uuid={category.uuid}
            />
          ))}
        </div>
      </section>
      {/* product section */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 text-center">
          Discount Products
        </h1>
        <div className="grid grid-cols-4 gap-5">
          {products
            .filter((product) => product.discount > 0)
            .map((product, index) => (
              <ProductCard
                key={index}
                thumbnail={product.thumbnail}
                name={product.name}
                priceOut={product.priceOut}
                discount={product.discount}
                uuid={product.uuid}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default App;
