import { ProductItem } from "./Product";
import { Product } from "../types/product";
import { useNavigate } from "react-router-dom";

type GridProductsProps = {
  products: Product[];
};

export const GridProducts: React.FC<GridProductsProps> = ({ products }) => {
  const navigate = useNavigate();
  return (
    <div className="row">
      {products.map((product) => (
        <ProductItem
          product={product}
          onClick={() => navigate(`/product/${product.slug}`)}
        />
      ))}
    </div>
  );
};
