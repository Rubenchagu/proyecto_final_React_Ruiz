import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"
import { DB } from "../../firebase/firebase";
import {doc, getDoc, collection } from "firebase/firestore"

const ItemDetailContainer = () => {
    
    const [singleNft, setSingleNft] = useState([])
    const [loadingPage, setLoadingPage] = useState(true)
    const {id} = useParams()
    
    useEffect(() => {
        
        const NFTcollection = collection(DB, 'NFT-Collection');
        const refDoc = doc(NFTcollection, id)
        getDoc(refDoc)
        .then(result => {
            setSingleNft({
                id: result.id,
                ...result.data()
            })
        })
        
        .catch((err) => console.log("Error al leer la base de Datos"))
        .finally(() => setLoadingPage(false))
        
    }, [id])
    

    return (
        <div className='d-flex justify-content-center mt-5'>
            {loadingPage 
            ? <img style={{width: "100%", height:"100%"}} src="https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif" alt="Loading"/> 
            : <ItemDetail singleNft={singleNft}/>
            }   
        </div>
    )
}

export default ItemDetailContainer