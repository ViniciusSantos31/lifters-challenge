import { useShoppingCartStore } from "../store"
import { Product } from "../types/product"
import { ColorButton } from "./ColorButton"
import { SizeButton } from "./SizeButton"

import { Trash2Icon } from 'lucide-react'

type ProductCheckoutItemProps = {
  item: Product;
}

export const ProductCheckoutItem: React.FC<ProductCheckoutItemProps> =
  ({ item }) => {
  
  const { removeItem } = useShoppingCartStore()
  const handleRemoveItem = () => { 
    removeItem(item.slug)
  }

  return (
    <li className='list-group-item border-0 p-2 mb-2 d-flex flex-row w-100'>
      <img
        src={item.fotos.find(foto => foto.capa)?.url}
        alt='product'
        style={{ width: 130, height: 130 }}
      />
      <div className='w-100 d-flex justify-content-between flex-column ms-2'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fs-3 fw-normal'>{item.titulo}</h3>
          <span className='text-end fw-bold fs-3'>{item.valor}</span>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='w-100 d-flex align-items-center gap-3'>
            <SizeButton size={item.tamanhos[0]} />
            <ColorButton
              size={50}
              color={{ codigo: item.cores[0].codigo, nome: item.cores[0].nome }}
            />

          </div>
          <button onClick={handleRemoveItem} className='border-0 bg-transparent'>
            <Trash2Icon size={24} color='#000001' />
          </button>
        </div>
      </div>
    </li>
  )
}