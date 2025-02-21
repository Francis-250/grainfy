import { Link } from "react-router-dom";
import { products } from "../assets/Assets";

const ProductCard = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            LATEST <span className="text-gray-700 font-medium">COLLECTION</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>
      {/* products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {products.slice(0, 5).map((item) => (
          <Link
            key={item.id}
            className="text-gray-700 cursor-pointer"
            to={`/product/${item.id}`}
          >
            <div className="overflow-hidden">
              <img
                src={item.images[0]}
                className="hover:scale-110 transition ease-in-out"
                alt=""
              />
            </div>
            <p className="pt-3 pb-1 text-sm">{item.name}</p>
            <p className="text-sm font-medium">${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
