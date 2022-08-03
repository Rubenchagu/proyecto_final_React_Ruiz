
import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { FaEthereum } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { cartContext } from "../Context/CartContext";

const ItemDetail = ({singleNft}) => {

    const {addProduct} = useContext(cartContext)
    const [checkOut, setCheckOut ] = useState(true)
    const {image, name, species, gender, created, stock, price} = singleNft
    
    const goToCart = (quantity1) => {
        setCheckOut(false)
        addProduct(singleNft, quantity1, singleNft.id, singleNft.price)
    }

    return (
    
    <div className='d-flex align-items-center'>
        <div className='d-flex justify-content-center w-50'><img src={image} alt="SingleNFT" /></div>
        <div className='card w-50 m-5 text-white bg-info align-items-center' style={{margin:"0 auto"}}>
            <div className="card-header m-3">{name}</div>
            <div className='card-body text-left'>    
                <h6>Nombre: {name}</h6>
                <h6>Especie: {species}</h6>
                <h6>Genero: {gender}</h6>
                <h6>Creado: {created}</h6>
            </div>
            <div className="card-header m-3 w-100 text-white text-center bg-success">Precio:<FaEthereum/> {price} ETH</div>
            
            {
            checkOut
            ? <ItemCount goToCart= {goToCart} stock={stock} initial={1}/>
            : <div> 
                <NavLink to="/Cart"><button className="btn btn-secondary m-1"> Finalizar Compra </button></NavLink>
                <NavLink to="/"><button className="btn btn-primary m-2">Ver más NFTs</button></NavLink>
            </div>
            }
        </div>
    </div>
    )
}

export default ItemDetail