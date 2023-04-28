
import { useEffect, useState } from 'react'
import { myPromise } from '../utils/myPromise'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { cid } = useParams()
   
    useEffect(() => {
        if (!cid) {
            //llamada a la api
            myPromise()
                //.then(res => res.json())
                .then(result => setProductos(result))
                .catch(error => console.log(error))
                .finally(() => setIsLoading(false))
        } else {
            myPromise()
                .then(result => setProductos(result.filter(producto => producto.category === cid)))
                .catch(error => console.log(error))
                .finally(() => setIsLoading(false))
        }
    }, [cid])

    return (
        <div className='container-prod'>
            {isLoading ?
                <BeatLoader color="#36d7b7" />
                :
                <ItemList products={productos} />
            }
        </div>
    )
}
export default ItemListContainer