import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import infoExtra from '../../infoExtra'
import { FaEthereum } from 'react-icons/fa';

const ItemDetail = ({singleNft}) => {
    
    const { id, image, name, species, gender, created} = singleNft
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
        <div className="card-header m-3 w-100 text-white text-center bg-success">Precio:<FaEthereum/> {infoExtra.precios[id-1]} ETH</div>
        <ItemCount stock={infoExtra.stock[id-1]} initial={1}/>
    </div>
    )
}

export default ItemDetail