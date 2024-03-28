import { Product } from "../types/product";

interface ProductItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  ...rest
}) => {
  const urlCover = product.fotos.filter((foto) => foto.capa)[0].url;

  return (
    <button
      className="col-12 col-md-6 col-lg-4 d-flex justify-content-center bg-transparent border-0"
      {...rest}>
      <div className="w-100 card border-0">
        <div className="overflow-hidden rounded">
          <img src={urlCover} className="card-img-top" />
        </div>
        <div className="card-body px-0">
          <h5 className="card-title fs-5 text-start">{product.titulo}</h5>
          <p className="card-text fs-6 text-start">{product.valor}</p>
        </div>
      </div>
    </button>
  );
};
