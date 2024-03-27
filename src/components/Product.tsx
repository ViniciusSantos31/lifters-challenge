import { Product } from "../types/product";

type ProductItemProps = {
  product: Product;
};

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
      <div className="w-100 card border-0">
        <img src={product.fotos[0].url} className="card-img-top" />
        <div className="card-body px-0">
          <h5 className="card-title fs-5">{product.titulo}</h5>
          <p className="card-text fs-6">{product.valor}</p>
        </div>
      </div>
    </div>
  );
};
