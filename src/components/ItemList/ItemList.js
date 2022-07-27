
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {

    return (
        <div>
            <div className='d-flex flex-wrap justify-content-center'>
            {products.map((product, i) => <Item key={i}  product={product}/>)}
            </div>
        </div>
    )
}

export default ItemList