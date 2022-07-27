import React from 'react'
import {NavLink} from "react-router-dom"

const Item = ({product}) => { 
  
  const {name, image, id, price} = product
  
  return (
    <div className="card text-white bg-info mb-3 align-items-center" style={{width: "20rem", margin:"20px"}}>
        <div className="card-header">{name}</div>
        <div className="card-body">
            <h6 className="card-title">Precio: {price} ETH</h6>
            <img style={{width: "100px", height: "100px"}} src={image} alt={name} />
        </div>  
        <NavLink to={`/character/${id}`} className="nav-link active">
          <button className="btn btn-primary"> Ver Información </button>
        </NavLink>
    </div>
  )
}

export default Item