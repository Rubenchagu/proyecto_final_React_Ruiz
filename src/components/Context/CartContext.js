import React, { createContext, useState } from 'react'
import infoExtra from '../../infoExtra'

export const cartContext = createContext ();
const {Provider} = cartContext;

let quantities = [{quantity:0, id:0, price:0}]

const CartProvider = ({children}) => {
    
    const [productsIncart, setProductsIncart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPurchase, setTotalPurchase] = useState(0)
    
    const addProduct = (product, quantity, id) => {

        if( !(productsIncart.some((prod) => prod.id === id)) ){

            productsIncart.length>0
            ? setProductsIncart ([...productsIncart, product])
            : setProductsIncart ([product])
            quantities.push({quantity:quantity, id:id, price:(infoExtra.precios[id-1]*quantity).toFixed(2)})
            setTotalQuantity(totalQuantity + quantity);
            setTotalPurchase (totalPurchase + (infoExtra.precios[id-1]*quantity))
        }
        else{
            quantities.filter(element => element.id === id).map(element => {
                element.quantity += quantity
                element.price = (element.price + (infoExtra.precios[id-1]*quantity)).toFixed(2)
                return null
            })
            setTotalQuantity(totalQuantity + quantity);
            setTotalPurchase (totalPurchase + (infoExtra.precios[id-1]*quantity))
        }
    }

    const deleteProduct = (id) => {
        
        let quantityDelete = quantities.filter(element => element.id === id).map((element) => element.quantity)
        setTotalQuantity(totalQuantity - parseInt(quantityDelete[0]))
        let priceDelete = quantities.filter((element) => element.id === id).map((element) => element.price )
        setTotalPurchase(totalPurchase - parseFloat(priceDelete[0]))
        
        setProductsIncart(productsIncart.filter(product => product.id !== id))
        quantities = quantities.filter(product => product.id !== id);

    }

    const clearCart = () => {
        setProductsIncart([])
        quantities=[]
        setTotalQuantity(0)
        setTotalPurchase(0)
    }

    return (
        <Provider value={{productsIncart, quantities, totalQuantity, totalPurchase, addProduct, deleteProduct, clearCart}}>
            {children}
        </Provider>
    )
}

export default CartProvider