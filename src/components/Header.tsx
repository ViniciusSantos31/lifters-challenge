import { ShoppingBagIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useShoppingCartStore } from '../store';

export const Header: React.FC = () => {

  const { items } = useShoppingCartStore();

  const navigate = useNavigate();

  const goToBag = () => {
    navigate('/checkout');
  }

  return (
    <nav
      className="w-100 navbar navbar-expand-lg bg-black border-bottom border-dark">
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
          </ul>
        </div>
        <div className='d-flex align-items-center justify-content-center text-white gap-4'>
          <button onClick={goToBag} className="text-white border-0 bg-transparent">
            <ShoppingBagIcon />
            {items.length > 0 && <span className="badge">{items.length}</span>}
          </button>
          <a href="#" className='link link-light link-underline-dark m-0'>Login</a>
        </div>
      </div>
    </nav>
  )
}