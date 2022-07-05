
import React, { useState, useEffect, } from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  
  const [products, setProducts]= useState([])
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character")
      .then(Response => Response.json())
      .then (({results}) => {
        setProducts(results)
      })
      .catch((err) => console.log("Error al leer la base de Datos"))
      .finally(() => setLoadingPage(false))
    }, 3000);
  }, [])
    
  return (
    <div> 
      {loadingPage 
        ? <img style={{width: "100%", height:"100%"}} src="https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif" alt="Loading"/> 
        : <ItemList products={products}/>
      }   
    </div>
  )
}

export default ItemListContainer