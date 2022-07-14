import React, { createContext, useState } from 'react'

export const cartContext = createContext ();
const {Provider} = cartContext;

let quantities = []

const CartProvider = ({children}) => {
    
    const [productsIncart, setProductsIncart] = useState([])
    
    const addProduct = (product, quantity, id) => {
        
        if( productsIncart.some( (prod) => prod.id === id) ) console.log("el producto ya está en el carrito");
        else{
            productsIncart.length>0
            ? setProductsIncart ([...productsIncart, product])
            : setProductsIncart ([product])
            quantities.push(quantity)
        }
    }
    
    const deleteProduct = (id) => {
        setProductsIncart(productsIncart.filter(product => product.id !== id))
        console.log(productsIncart);
    }

    const clearCart = () => {
        setProductsIncart([])
        quantities=[]
    }

    
    

   
    return (
        <Provider value={{productsIncart, quantities, addProduct, deleteProduct, clearCart}}>
            {children}
        </Provider>
    )
}

export default CartProvider