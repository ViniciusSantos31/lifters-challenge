import { useQuery } from "@tanstack/react-query";
import { ShoppingBagIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { FilterColor } from "../components/filters/Color";
import { FilterSize } from "../components/filters/Size";
import { getProductBySlug } from "../services/product";
import { useShoppingCartStore } from "../store";
import { Cor, Product as IProduct } from "../types/product";

import { toast } from 'sonner';

export const Product: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem, items } = useShoppingCartStore();

  const [colorSelected, setColorSelected] = useState<Cor>();
  const [sizeSelected, setSizeSelected] = useState<string>();

  const { data: product, isLoading } = useQuery<IProduct>({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
  });

  const handleAddItem = () => {

    const productToAdd = {
      ...product,
      cores: colorSelected ? [colorSelected] : [],
      tamanhos: sizeSelected ? [sizeSelected] : [],
    } as IProduct;

    if (!productToAdd || items.includes(productToAdd)) return;

    addItem(productToAdd as IProduct);
    toast.success('Product added to cart', {
      description: `${productToAdd.titulo} was added to your cart`,
      duration: 3000
    });
  }

  const isAdded = useMemo(() => {
    return !!items.find(item => item.slug === product?.slug);
  }, [items, product]);

  const isValid = useMemo(() => {
    if (!product) return false;

    if (product.cores.length > 0 && !colorSelected) return false;
    if (product.tamanhos.length > 0 && !sizeSelected) return false;

    return true;
  }, [colorSelected, product, sizeSelected])

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
                      <FilterColor
                        product={product}
                        size={50}
                        setColor={setColorSelected} />
                    </div>
                    <div>
                      <h5 className="fs-5 fs-6 mb-2">Size</h5>
                      <FilterSize
                        product={product}
                        sizeSelected={sizeSelected}
                        setSize={setSizeSelected}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex flex-row gap-2 mb-4 mb-lg-0">
                  <button id="add-to-cart" disabled={isAdded || !isValid} onClick={handleAddItem} className="w-100 d-flex gap-2 align-items-center justify-content-center border-0 fw-medium py-2 text-white bg-black">
                    <ShoppingBagIcon size={18} />
                    {isAdded ?  "Added" : "Add to bag"}
                  </button>
                  <button onClick={() => navigate(-1)} className="w-25 border-0 fw-medium py-2 text-black bg-body-secondary">
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
