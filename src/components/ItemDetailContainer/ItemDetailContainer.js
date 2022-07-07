import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    
    const [singleNft, setSingleNft] = useState([])
    const [loadingPage, setLoadingPage] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        
        setTimeout(() => {
          fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then(Response => Response.json())
          .then ((data) => setSingleNft(data))
          .catch((err) => console.log("Error al leer la base de Datos"))
          .finally(() => setLoadingPage(false))
        }, 2000);
    }, [id])
    

    return (
        <div style={{margin:"20px 0 0 0"}}>
            {loadingPage 
            ? <img style={{width: "100%", height:"100%"}} src="https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif" alt="Loading"/> 
            : <ItemDetail singleNft={singleNft}/>
            }   
        </div>
    )
}

export default ItemDetailContainer