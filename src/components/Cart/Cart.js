
import React, { useContext } from 'react'
import { cartContext } from "../Context/CartContext";

const Cart = () => {

  const {productsIncart, quantities, deleteProduct, clearCart} = useContext(cartContext)

  return (
    <div className= "card align-items-center m-3">
      {productsIncart.map( (product, i) => 
        <div className='card w-50 mb-3' key={i}>
          <h6 className="card-header mb-1">{product.name}</h6>
          <div className="card flex-row align-items-center">
            <img className='card-img-top' style={{padding:"16px", width:"100px"}} src={product.image} alt="SingleNFT" />
            <p className="card-text">Cantidad= {quantities[i]}</p>
          </div>
          <button onClick={ () => deleteProduct(product.id) } >eliminar</button>
        </div>
      )}
      <button className="btn btn-primary w-50 mb-3" onClick={ () => clearCart() }>Vaciar Carrito</button>
    </div>
  )
}

export default Cart