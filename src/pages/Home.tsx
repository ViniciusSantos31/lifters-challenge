import { useQuery } from "@tanstack/react-query";
import { GridProducts } from "../components/GridProducts";
import { Header } from "../components/Header";
import { getProducts } from "../services/product";
import { Product } from "../types/product";
import { FilterCategory } from "../components/FilterCategory";

export const Home = () => {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  return (
    <div>
      <Header />
      <div className="w-100">
        <div className="container-fluid bg-black">
          <div id="hero" className="container py-5 bg-black text-white">
            <h3 className="fs-1">Shop Men's</h3>
            <span className="hero d-flex w-100 fs-6">
              Revamp your style with the latest designer trends in men's
              clothing or achieve a perfectly curated wardrobe thanks to our
              line-up of timeless pieces.{" "}
            </span>
          </div>
        </div>
        <div className="container mt-5">
          <h4 className="fs-4">Filters</h4>
          <div className="w-100 row mt-4">
            <div className="col-6 col-md-4">
              <div>
                <h5 className="fs-5 fs-6 mb-3">Categories</h5>
                <FilterCategory />
              </div>
              <div className="mt-4">
                <h5 className="fs-5 fs-6 mb-3">Colors</h5>
                <div className="w-75 d-flex gap-1 flex-wrap">
                  {/* {colors.map((color) => (
                    <button
                      key={color}
                      id={`color-${color}`}
                      className="w-100 rounded-circle bg-danger p-1 border border-black"
                      style={{ maxWidth: 25, minHeight: 25 }}
                    />
                  ))} */}
                </div>
              </div>
            </div>
            <div className="col-6 col-md-8 px-0">
              <div className="w-100 d-flex align-items-center justify-content-end mb-4 fs-8">
                Showing {products?.length} products
              </div>
              <GridProducts products={products ?? []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
