import { GridProducts } from "../components/GridProducts"

export const Home = () => {

  const colors: string[] = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'pink', 'orange', 'brown', 'gray', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet', 'fuchsia', 'gold', 'silver', 'bronze']

  return (
    <div className="w-100">
      <div className="container-fluid bg-black">
        <div id="hero" className="container py-5 bg-black text-white">
          <h3 className="fs-1">Shop Men's</h3>
          <span className="hero d-flex w-100 fs-6">Revamp your style with the latest designer trends in men's clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. </span>
        </div>
      </div>
      <div className="container mt-5">
        <h4 className="fs-4">Filters</h4>
        <div className="w-100 row mt-4">
          <div className="col-6 col-md-4">
            <div>
              <h5 className="fs-5 fs-6 mb-3">Categories</h5>
              <ul className="list-group border-0">
                <li className="list-group-item border-0 p-0">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="categroy-1"
                      value=""
                    />
                    <label
                      className="form-check-label" htmlFor="categroy-1"
                    >
                      Jackets
                    </label>
                  </div>
                </li>
                <li className="list-group-item border-0 p-0">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="categroy-2"
                      value=""
                    />
                    <label className="form-check-label" htmlFor="categroy-2">
                      Fleece
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="fs-5 fs-6 mb-3">Colors</h5>
              <div className="w-75 d-flex gap-1 flex-wrap">
                {colors.map(color => (
                  <button
                    key={color} id={`color-${color}`}
                    className="w-100 rounded-circle bg-danger p-1 border border-black"
                    style={{ maxWidth: 25, minHeight: 25 }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-6 col-md-8 px-0">
            <div
              className="w-100 d-flex align-items-center justify-content-end mb-4 fs-8">
              Showing 1309 products
            </div>
            <GridProducts />
          </div>
        </div>
      </div>
    </div>
  )
}