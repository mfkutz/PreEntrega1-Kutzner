
import { useEffect, useState } from 'react'
/* import { myPromise } from '../utils/myPromise' */
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])


    /* const [producto, setProducto] = useState({}) */


    const [isLoading, setIsLoading] = useState(true)
    const { cid } = useParams()


    /*    const [meGusta, setMeGusta] = useState(false)
   
       const activaDisparo = ()=>{
           setMeGusta(!meGusta)
       } */

    /*     useEffect(() => {
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
        }, [cid]) */


    useEffect(() => {

        //estos se usan en ambos (if y else) asi que los saco afuera
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')
        if (!cid) {
            //traigo todos los productos
            getDocs(queryCollection)
                .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
                .catch(error => console.log(error))
                .finally(() => setIsLoading(false))
        } else {
            //se agrega esta linea usando 'query' y 'where' que recibe 3 parametros
            const queryCollectionFiltered = query(
                queryCollection,
                where('category', '==', cid),
              /*   orderBy('price', 'desc'),
                limit(2) */
            )

            getDocs(queryCollectionFiltered)
                .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
                .catch(error => console.log(error))
                .finally(() => setIsLoading(false))
        }
    }, [cid])




    //Ejemplo para traer un producto
    /*  useEffect(() => {
         const dbFirestore = getFirestore()
         const queryDoc = doc(dbFirestore, 'productos', '8eQTmi7cdi75bVevVtJn')
         getDoc(queryDoc)
             .then(resp => setProducto({id: resp.id, ...resp.data()}))
     },[]) */



    //ejemplo para traer todos los productos
    /*   useEffect(() => {
          const dbFirestore = getFirestore()
          const queryCollection = collection(dbFirestore, 'productos')
  
          getDocs(queryCollection)
              .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
              .catch(error => console.log(error))
              .finally(() => setIsLoading(false))
      }, [])
   */


    //ejemplo para usar un filtro
    /*  useEffect(() => {
         const dbFirestore = getFirestore()
         const queryCollection = collection(dbFirestore, 'productos')
 
         //se agrega esta linea usando 'query' y 'where' que recibe 3 parametros
         const queryCollectionFiltered = query(
             queryCollection, 
             where('price', '>', 280),
             orderBy('price', 'desc'),
             limit(2)
             )
 
         getDocs(queryCollectionFiltered)
             .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
             .catch(error => console.log(error))
             .finally(() => setIsLoading(false))
     }, []) */



    /* console.log(producto); */
    return (
        <div className='container-prod'>
            {isLoading ?
                <BeatLoader color="#36d7b7" />
                :
                <ItemList products={productos} />
            }
            {/*  <button onClick={activaDisparo}>Me gusta</button> */}
        </div>
    )
}
export default ItemListContainer