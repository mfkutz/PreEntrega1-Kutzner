import { useState } from 'react'
import '../styles/itemDetailContainer.css'
import { useEffect } from 'react'
/* import { getProductById } from '../utils/myPromise' */
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import { BeatLoader } from 'react-spinners'

const ItemDetailContainer = () => {
    //estado para guardar un product
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams()

    //useEffect -> traer un producto por id -> guardar en el estado
    /*     useEffect(() => {
            getProductById(pid)
                .then(response => {
                    setProduct(response)
                })
                .catch(error => {
                    console.log(error);
                })
        }, []) */

    //con firebase
    //Ejemplo para traer un producto
    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'productos', pid)
        getDoc(queryDoc)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(error => { console.log(error) })
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>

            {isLoading ?
                <div className='container-spin'>
                    <BeatLoader color="#e4db5f" />
                </div>
                :

                <div className='as-detail'>
                    <ItemDetail {...product} />
                </div>
            }

        </>
    )
}

export default ItemDetailContainer