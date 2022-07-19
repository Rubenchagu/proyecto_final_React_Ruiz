
import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { cartContext } from "../Context/CartContext";


const CartWidget = () => {

  const {totalQuantity} = useContext(cartContext)

  return (
    <div className='d-flex flex-column align-items-center '>
      <FaShoppingCart style={{width:"30px", height:"30px"}}/>
      {totalQuantity>0 ? <span style={{color:"white"}}>{totalQuantity}</span> : <></> }
    </div>
  )
}

export default CartWidget