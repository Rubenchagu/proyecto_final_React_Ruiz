import React, { useContext, useState } from 'react'
import { cartContext } from "../Context/CartContext"
import { NavLink } from 'react-router-dom'

const ClientForm = () => {
    
    const {totalQuantity, totalPurchase, saleId, clearCart, confirmPurchase} = useContext(cartContext)
    const [infoClient, setinfoClient] = useState({name:"", email:"", phone:""})
    const [endSalePage, setEndSalePage] = useState(true)
    const [totalReceipt, setTotalReceipt] = useState([])
    
    const endPage = (infoClient) => {
        
        setTotalReceipt([totalQuantity, totalPurchase])
        setEndSalePage(false)
        confirmPurchase(infoClient)
        clearCart()
    }

    return (
        <>
        {endSalePage
            ? 
            <div className='d-flex justify-content-center'>
                <div className="card w-50 m-3">
                    <div className="m-3 form-group">
                        <label className="col-form-label mt-4">NOMBRE</label>
                        <input onChange={ (e) => setinfoClient({...infoClient, name:e.target.value}) } value={infoClient.name} type="text" className="form-control" id="inputDefault"/>
                        <label className="col-form-label mt-4">EMAIL</label>
                        <input onChange={ (e) => setinfoClient({...infoClient, email:e.target.value}) } value={infoClient.email} type="text" className="form-control" id="inputDefault"/>
                        <label className="col-form-label mt-4">TELÉFONO</label>
                        <input onChange={ (e) => setinfoClient({...infoClient, phone:e.target.value}) } value={infoClient.phone} type="text" className="form-control" id="inputDefault"/>
                    </div>
                    <button className='btn btn-info w-50 m-3' disabled={(!!infoClient.name && !!infoClient.email && !!infoClient.phone ? false : true )} onClick={() => endPage(infoClient)}>Confirmar compra</button>
                </div> 
            </div>
            
            : <div className='card m-auto mt-3 w-50'>
                <h3 className='card-header'>Gracias por su compra</h3>
                <div className='card m-3'>
                    <span>Nombre: {infoClient.name}</span>
                    <span>Email: {infoClient.email}</span>
                    <span>Teléfono: {infoClient.phone}</span>
                    <span>Cantidad Total: {totalReceipt[0]}</span>
                    <span>Precio Total: {totalReceipt[1]}</span>
                    <span>ID de compra: {saleId}</span>
                </div>
                <div className='d-flex justify-content'>
                    <NavLink style={{textDecoration:"none", color:"white"}} to="/proyecto_final_React_Ruiz"><button className='btn btn-info'>Ir al INICIO</button></NavLink>
                </div>
            </div>
        }
        </>
    )
}

export default ClientForm