import { useParams } from "react-router-dom";
import { products } from "../assets/Assets";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === (id, 10));
  return <div>{product.name}</div>;
};

export default ProductDetails;
