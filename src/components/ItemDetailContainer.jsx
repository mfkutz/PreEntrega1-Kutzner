import { useState } from 'react'
import '../styles/itemDetailContainer.css'
import { useEffect } from 'react'
import { getProductById } from '../utils/myPromise'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    //estado para guardar un product
    const [product, setProduct] = useState(null)
    const { pid } = useParams()

    //useEffect -> traer un producto por id -> guardar en el estado
    useEffect(() => {
        getProductById(pid)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className='as-detail'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer