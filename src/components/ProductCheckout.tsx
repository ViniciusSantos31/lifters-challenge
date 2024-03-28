import { ColorButton } from "./ColorButton"
import { SizeButton } from "./SizeButton"

import { Trash2Icon } from 'lucide-react'

export const ProductCheckoutItem: React.FC = () => {
  return (
    <li className='list-group-item border-0 p-2 mb-2 d-flex flex-row w-100'>
      <img src='https://via.placeholder.com/130' alt='product' />
      <div className='w-100 d-flex justify-content-between flex-column ms-2'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fs-3 fw-normal'>Product Name</h3>
          <span className='text-end fw-bold fs-3'>$99</span>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='w-100 d-flex align-items-center gap-3'>
            <SizeButton size='S' />
            <ColorButton
              size={50}
              color={{ codigo: "#ff0000", nome: "Vermelho" }}
            />

          </div>
          <button className='border-0 bg-transparent'>
            <Trash2Icon size={24} color='#000001' />
          </button>
        </div>
      </div>
    </li>
  )
}