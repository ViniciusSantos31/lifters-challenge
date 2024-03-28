import { ShoppingBagIcon } from "lucide-react";
import { Header } from "../components/Header";
import { FilterSize } from "../components/filter/Size";
import { Navigate, useParams } from "react-router-dom";
import { getProductBySlug } from "../services/product";
import { useQuery } from "@tanstack/react-query";
import { Product as IProduct } from "../types/product";
import { FilterColor } from "../components/filter/Color";

export const Product: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: product, isLoading } = useQuery<IProduct>({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
  });

  if (!product && !isLoading) return <Navigate to="/" />;

  return (
    <div className="flex-column d-flex h-100">
      <Header />
      <div className="container h-100 d-flex align-items-start justify-content-center mt-4 mt-lg-0 align-items-lg-center">
        <div id="grid-structure">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="grid">
                <div className="row row-gap-4">
                  {product?.fotos.slice(0, 4).map((foto) => (
                    <img key={foto.url} className="col-6" src={foto.url} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col d-flex">
              <div className="d-flex flex-column justify-content-between gap-4">
                <div>
                  <div className="w-100 mt-2 mt-lg-0">
                    <h2 className="fs-2 fw-bold">{product?.titulo}</h2>
                    <small className="fs-6 fw-medium">{product?.valor}</small>
                  </div>
                  <div className="gap-4 my-4">
                    <span className="fw-medium">{product?.descricao}</span>
                    <div className="mb-4">
                      <h5 className="fs-5 fs-6 mt-4 mb-2">Colors</h5>
                      <FilterColor product={product} size={50} />
                    </div>
                    <div>
                      <h5 className="fs-5 fs-6 mb-2">Size</h5>
                      <FilterSize product={product} />
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex flex-row gap-2 mb-4 mb-lg-0">
                  <button className="w-100 d-flex gap-2 align-items-center justify-content-center border-0 fw-medium py-2 text-white bg-black">
                    <ShoppingBagIcon size={18} />
                    Add to bag
                  </button>
                  <button className="w-25 border-0 fw-medium py-2 text-black bg-body-secondary">
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
