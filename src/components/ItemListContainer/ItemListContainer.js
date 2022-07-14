
import React, { useState, useEffect, } from 'react'
import ItemList from '../ItemList/ItemList';
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
  
  const [products, setProducts]= useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const {specieId} = useParams();
 
  useEffect(() => {
    setLoadingPage(true)
    const URL = specieId ? `https://rickandmortyapi.com/api/character/?species=${specieId}` : "https://rickandmortyapi.com/api/character/?species=humanoid"
    
    setTimeout(() => {
      fetch(URL)
      .then(Response => Response.json())
      .then (({results}) => setProducts(results))
      .catch((err) => console.log("Error al leer la base de Datos"))
      .finally(() => setLoadingPage(false))
    }, 500);
  }, [specieId])
    
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