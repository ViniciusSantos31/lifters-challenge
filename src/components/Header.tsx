
export const Header: React.FC = () => {
  return (
    <nav className="w-100 navbar navbar-expand-lg bg-black border-bottom">
      <div className="container-fluid gap-3 container">
        <a className="navbar-brand text-white fs-5 fw-bold" href="/">Lifters Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Stories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" aria-disabled="true">About</a>
            </li>
            {/* <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">Search</button>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}