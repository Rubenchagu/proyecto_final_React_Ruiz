import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({product}) => {
  
  const {name, price, img, stock} = product  
  return (
    <div className="card text-white bg-info mb-3 align-items-center" style={{width: "20rem"}}>
        <div className="card-header">{name}</div>
        <div className="card-body">
            <h6 className="card-title">Precio: {price} ETH</h6>
            <img src={img} alt={name} />
        </div>
        <ItemCount stock={stock} initial={1}/>
    </div>
  )
}

export default Item