import { ProductItem } from "./Product";
import { Product } from "../types/product";

type GridProductsProps = {
  products: Product[];
};

export const GridProducts: React.FC<GridProductsProps> = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};
