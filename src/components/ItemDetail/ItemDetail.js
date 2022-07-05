import React from 'react'

const ItemDetail = ({product}) => {
    
    const { name, species, gender, created} = product
    return (
    <div>
        <ul>
            <li>Nombre: {name}</li>
            <li>Especie: {species}</li>
            <li>Genero: {gender}</li>
            <li>Creado: {created}</li>
        </ul>
    </div>
    )
}

export default ItemDetail