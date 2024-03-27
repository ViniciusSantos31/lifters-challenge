import { ShoppingBagIcon } from "lucide-react";
import { Header } from "../components/Header";

export const Product: React.FC = () => {
  return (
    <div className="flex-column d-flex h-100">
      <Header />
      <div className="container h-100 d-flex align-items-start justify-content-center mt-4 mt-md-0 align-items-md-center">
        <div id="grid-structure">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="grid">
                <div className="row row-gap-4">
                  <img
                    className="col-6 col-md-6"
                    src="https://via.placeholder.com/200"
                  />
                  <img
                    className="col-6 col-md-6"
                    src="https://via.placeholder.com/200"
                  />
                  <img
                    className="col-6 col-md-6"
                    src="https://via.placeholder.com/200"
                  />
                  <img
                    className="col-6 col-md-6"
                    src="https://via.placeholder.com/200"
                  />
                </div>
              </div>
            </div>
            <div className="col d-flex">
              <div className="d-flex flex-column justify-content-between gap-4">
                <div>
                  <div className="w-100 mt-2 mt-md-0">
                    <h2 className="fs-2 fw-bold">Nome do produto</h2>
                    <small className="fs-6 fw-medium">R$ 99,00</small>
                  </div>
                  <div className="gap-4 my-4">
                    <span className="fw-medium">
                      Revamp your style with the latest designer trends in men's
                      clothing or achieve a perfectly curated wardrobe thanks to
                      our line-up of timeless pieces.
                    </span>
                    <div>
                      <h5 className="fs-5 fs-6 mt-4 mb-2">Colors</h5>
                      <div className="w-75 d-flex gap-1 flex-wrap">
                        <button
                          id="color-1"
                          className="w-100 rounded-circle bg-danger p-1 border border-black mb-2"
                          style={{ maxWidth: 50, minHeight: 50 }}
                        />
                      </div>
                    </div>
                    <div>
                      <h5 className="fs-5 fs-6 mb-2">Size</h5>
                      <div className="w-75 d-flex gap-1 flex-wrap">
                        <button
                          id="color-1"
                          className="w-100 border p-1 text-black border-black bg-transparent"
                          style={{ maxWidth: 50, minHeight: 50 }}>
                          XS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex flex-row gap-2 mb-4 mb-md-0">
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
