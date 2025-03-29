import { Card } from "flowbite-react";
import { Link } from "react-router";

export function CategoryCard({ media, name, uuid }) {
  return (
    <Link to={`/products/categories/${uuid}`}>
      <Card className="my-[30px]">
        <div className="flex flex-col items-center pb-10 ">
          <img
            alt="Bonnie image"
            src={
              media ||
              "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
            }
            className="w-[100px] h-[100px] rounded-full object-cover"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
        </div>
      </Card>
    </Link>
  );
}
