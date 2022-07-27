
import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { FaEthereum } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { cartContext } from "../Context/CartContext";

const ItemDetail = ({singleNft}) => {

    const {addProduct} = useContext(cartContext)
    const [checkOut, setCheckOut ] = useState(true)

    const goToCart = (quantity1) => {
        setCheckOut(false)
        addProduct(singleNft, quantity1, singleNft.id, singleNft.price)
    }
    
    const {image, name, species, gender, created, stock, price} = singleNft
    return (
    <div className='card text-white w-50 h-100 bg-info mb-3 align-items-center' style={{margin:"0 auto"}}>
        <div className="card-header m-3">{name}</div>
        <img className='card-img-top' style={{padding:"16px"}} src={image} alt="SingleNFT" />
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
    )
}

export default ItemDetail