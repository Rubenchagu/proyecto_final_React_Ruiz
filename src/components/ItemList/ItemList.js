
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {

    console.log(products);
    const infoNFT = {
        precios:  [10, 10, 0.7, 0.7, 0.5, 2.3, 8, 5, 3, 3.3, 6, 1.1, 4, 7.4, 6.5, 0.2, 2.7, 7, 0.4, 0.1],
        stock:  [5, 4, 7, 17, 15, 3, 5, 10, 3, 13, 6, 11, 4, 7, 6, 21, 5, 7, 4, 9]
    }
    return (
        <div>
            <div className='d-flex flex-wrap justify-content-center'>
            {products.map((product) => <Item key={product.id}  product={product} infoNFT={infoNFT}/>)}
            </div>
        </div>
    )
}

export default ItemList