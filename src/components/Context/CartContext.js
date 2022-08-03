import React, { createContext, useState } from 'react'
import { DB } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";

export const cartContext = createContext ();
const {Provider} = cartContext;

let quantities = [{quantity:0, id:0, price:0}]

const CartProvider = ({children}) => {
    
    const [productsIncart, setProductsIncart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPurchase, setTotalPurchase] = useState(0)
    const [saleId, setSaleId] = useState("")
    
    const addProduct = (product, quantity, id, priceP) => {

        if( !(productsIncart.some((prod) => prod.id === id)) ){

            productsIncart.length>0
            ? setProductsIncart ([...productsIncart, product])
            : setProductsIncart ([product])
            quantities.push({quantity:quantity, id:id, price:priceP*quantity.toFixed(2)})
            setTotalQuantity(totalQuantity + quantity);
            setTotalPurchase (totalPurchase + priceP*quantity)
        }
        else{
            quantities.filter(element => element.id === id).map(element => {
                element.quantity += quantity
                element.price = (element.price + priceP*quantity).toFixed(2)
                return null
            })
            setTotalQuantity(totalQuantity + quantity);
            setTotalPurchase (totalPurchase + priceP*quantity)
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

    const confirmPurchase = (infoClient) => {
        const sales = collection(DB, "Sales")
        addDoc(sales, {
            ClientData: infoClient,
            items: productsIncart,
            date: serverTimestamp(),
            total: totalQuantity
        })
        .then((result) => {
            setSaleId(result.id)
        })

        productsIncart.forEach((product) => quantities.filter((qty) => qty.id === product.id).forEach((prod) =>{

            const updateSales = doc(DB, "NFT-Collection", `${prod.id}`)
            updateDoc(updateSales, {stock: product.stock - prod.quantity})

        }))

    }

    return (
        <Provider value={{productsIncart, quantities, totalQuantity, totalPurchase, saleId, addProduct, deleteProduct, clearCart, confirmPurchase}}>
            {children}
        </Provider>
    )
}

export default CartProvider