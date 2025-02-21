import { useParams } from "react-router-dom";
import { products } from "../assets/Assets";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));
  return (
    <div className="my-10">
      <div className="flex lg:flex-row flex-col gap-10 items-center">
        <img src={product.images} alt="" className="h-[33em]" />
        <div className="flex flex-col">
          <p className="text-gray-900 uppercase font-bold">{product.name}</p>
          <div>
            <p className="text-gray-500">
              <span className="font-semibold">price:</span> {product.price}
            </p>
            <p className="text-gray-500">{product.description}</p>
          </div>
          <br />
          <p className="text-gray-500 font-semibold">Suitable For:</p>
          <br />
          <p className="text-gray-900 flex gap-2">
            {product.suitableFor.map((suit, i) => (
              <p className="border text-gray-500 roundend p-3" key={i}>
                {suit}
              </p>
            ))}
          </p>
          <br />
          <button className="border p-3 py-4 lg:w-[10em]">Add To Cart</button>
          <br />
          <p className="text-gray-500 border-t">100% Original product.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
