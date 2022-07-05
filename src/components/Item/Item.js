import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const Item = ({product, infoNFT, i}) => {
  
  const {name, image, id} = product
  const {precios, stock} = infoNFT
  
  return (
    <div className="card text-white bg-info mb-3 align-items-center" style={{width: "20rem"}}>
        <div className="card-header">{name}</div>
        <div className="card-body">
            <h6 className="card-title">Precio: {precios[id-1]} ETH</h6>
            <img style={{width: "100px", height: "100px"}} src={image} alt={name} />
        </div>  
        <ItemCount stock={stock[id-1]} initial={1}/>
        <ItemDetailContainer product={product}/>
    </div>
  )
}

export default Item