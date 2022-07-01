import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  
  return (
    <div>
        <div className='d-flex flex-wrap'>
        {products.map((product) => <Item key={product.id}  product={product}/>)}
        </div>
    </div>
  )
}

export default ItemList