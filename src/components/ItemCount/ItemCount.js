import { useState } from "react"

const ItemCount = ({stock, initial}) => {
  
    const [cantidad, setCantidad] = useState(0)

    //setCantidad(cantidad+initial)
    
    const count = (valor) => {
        const acumulado = cantidad + valor 
        if(acumulado<=stock && acumulado>0){
            setCantidad(cantidad + valor)
        }
    }

    return (
        <div>
            <div className="card-body d-flex flex-row justify-content-center">
                <button onClick={()=>count(-1)}>-</button>
                <span>{cantidad}</span>
                <button onClick={()=>count(+1)}>+</button>
            </div>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount