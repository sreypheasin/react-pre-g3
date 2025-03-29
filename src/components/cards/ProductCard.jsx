import { Card } from "flowbite-react";
import { Link } from "react-router";

export default function ProductCard({ thumbnail, name, priceOut, discount, uuid }) {
  return (
    <Card className="mt-[30px]">
      <Link to={`/products/${uuid}`}>
        <img
          src={
            thumbnail ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s"
          }
          alt={name}
        />
      </Link>
      {discount > 0 && (
        <small className="bg-red-600 w-15 text-center text-white p-2 rounded-sm inline">
          {discount}%
        </small>
      )}
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name || "No title"}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${priceOut || 0}
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
