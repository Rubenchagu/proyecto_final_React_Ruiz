
import { useState } from "react"

const ItemCount = ({stock, initial, goToCart}) => {
  
    const [cantidad, setCantidad] = useState(initial)
    
    const count = (valor) => {
        const acumulado = cantidad + valor 
        if(acumulado<=stock && acumulado>0){
            setCantidad(cantidad + valor)
        }
    }

    const agregarAlCarrito = () => {
        goToCart();
    } 

    return (
        <>
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary" onClick={()=>count(-1)}>-</button>
                <span style={{margin:"10px"}}>{cantidad}</span>
                <button className="btn btn-secondary" onClick={()=>count(+1)}>+</button>
            </div>
            <button style={{margin:"10px"}} className="btn btn-primary" onClick={() => agregarAlCarrito()}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount 