import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../assets/Assets";

const ProductList = () => {
  const [data, setData] = useState(products);
  const [result, setResult] = useState(false);

  const handleSearch = (e) => {
    const searchItem = e.target.value.toLowerCase();
    if (searchItem) {
      const filterData = data.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchItem)
      );
      setData(filterData);
      if (filterData.length === 0) {
        setResult(!result);
      }
    } else {
      setData(products);
      setResult(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <div className="text-center py-8 text-3xl">
            <div className="inline-flex gap-2 items-center mb-3">
              <p className="text-gray-500">
                ALL
                <span className="text-gray-700 font-medium uppercase">
                  Products
                </span>
              </p>
              <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
          </div>
          {/* Product Sort */}
          <input
            className="border border-gray-300 text-sm px-2 h-10 md:w-[20rem] outline-none rounded-full"
            onChange={handleSearch}
            placeholder="Search Product Here..."
          />
        </div>
        {/* All product */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 gap-y-6">
          {result && (
            <div className="text-red-900 text-lg col-end-5">
              No Result Found...
            </div>
          )}
          {data.map((item) => (
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
    </div>
  );
};

export default ProductList;
