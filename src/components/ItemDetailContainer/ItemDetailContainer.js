import React, { useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({product}) => {
    
    const [Detail, setDetail] = useState(true)
    
    const verInfo = () => {
        setDetail (false)
    }

    const ocultarInfo = () => {
        setDetail (true)
    }

  return (
    <div>
        {Detail 
        ? <button className="btn btn-primary" onClick={() => verInfo()}>Ver info</button> 
        :<div className='card'>
            <ItemDetail product={product}/>
            <button className="btn btn-primary" onClick={() => ocultarInfo()}>Ocultar info</button>
        </div>
        }   
    </div>
  )
}

export default ItemDetailContainer