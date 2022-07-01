
import { useState } from "react"

const ItemCount = ({stock, initial}) => {
  
    const [cantidad, setCantidad] = useState(initial)
    
    const count = (valor) => {
        const acumulado = cantidad + valor 
        if(acumulado<=stock && acumulado>0){
            setCantidad(cantidad + valor)
        }
    }

    const agregarAlCarrito = () => {
        setCantidad (initial) 
    } 

    return (
        <div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary" onClick={()=>count(-1)}>-</button>
                <span>{cantidad}</span>
                <button className="btn btn-secondary" onClick={()=>count(+1)}>+</button>
            </div>
            <button className="btn btn-primary" onClick={() => agregarAlCarrito()}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount