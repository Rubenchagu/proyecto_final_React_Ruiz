
import React, { useState, useEffect, } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from "react-router-dom";
import {DB} from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  
  const [products, setProducts]= useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const {specieId} = useParams();

  useEffect(() => {

    setLoadingPage(true)
    const NFTcollection = collection(DB, "NFT-Collection")
    const q = query(NFTcollection, where("species","==",`${specieId}`))
    
    const NFTdata = specieId ? q : NFTcollection

    getDocs(NFTdata)
    .then(result => {
      const list = result.docs.map((product) =>{
        return product.data()
      })
      setProducts(list);
    })
    .catch((err) => console.log("Error al leer la base de Datos"))
    .finally(() => setLoadingPage(false))
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