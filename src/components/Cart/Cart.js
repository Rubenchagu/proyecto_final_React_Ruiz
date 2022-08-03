
import React, { useContext } from 'react'
import { cartContext } from "../Context/CartContext"
import { FaEthereum, FaTrashAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Cart = () => {

  const {productsIncart, quantities, totalQuantity, totalPurchase, deleteProduct, clearCart} = useContext(cartContext)

  return (
    <div className= "card align-items-center">
      {productsIncart.map( (product, i) => 
        <div className='card w-50 m-3' key={i}>
          <h6 className="card-header mb-1">{product.name}</h6>
          <div className="card flex-row align-items-center justify-content-between">
            <img className='card-img-top' style={{padding:"16px", width:"100px"}} src={product.image} alt="SingleNFT" />
            <div>
              <p className="card-text">Cantidad: {quantities.filter(element => element.id === product.id).map(element => element.quantity)}</p>
              <p className='card-text'>Precio: <FaEthereum/> {quantities.filter(element => element.id === product.id).map(element => element.price)} </p>
            </div>
          <button className='btn m-3' onClick={ () => deleteProduct(product.id) } ><FaTrashAlt/></button>
          </div>
        </div>
      )}
      {totalQuantity>0 
      ?<>
          <button className="btn btn-primary w-50 mb-3" onClick={ () => clearCart() }>Vaciar Carrito</button>
          <div className='d-flex mb-2'>
            <h6 className='card-header m-2 bg-info'>Total NFTs: {totalQuantity}</h6>
            <h6 className='card-header m-2 bg-success'>Total Compra: <FaEthereum/> {(totalPurchase).toFixed(2)}</h6>
            <NavLink style={{textDecoration:"none", color:"white"}} to="/ClientForm"><h6 className='card-header m-2 bg-warning'>Finalizar Compra</h6></NavLink>
          </div>
        </>
      :<h6 className='header'>El carrito está vacío, compra <NavLink to="/">Aquí</NavLink></h6>
      }
    </div>
  )
}

export default Cart