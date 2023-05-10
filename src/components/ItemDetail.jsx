import { Link } from 'react-router-dom'
import '../styles/itemDetail.css'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from './CartContext'


const ItemDetail = ({ id, product, category, description, price, stock, image }) => {

    const [isCant, setIsCant] = useState(false)
    const { addToCart, cartList } = useContext(CartContext)

    /* const [availableStock, setAvailableStock] = useState(stock) // aquí se agrega el estado del stock disponible */

    const onAdd = (cantidad) => {

        /*  const currentCantidad = cartList.reduce((acc, item) => item.id === id ? acc + item.cantidad : acc, 0)
         const newAvailableStock = stock - currentCantidad - cantidad // aquí se calcula el stock disponible restando la cantidad actual y la cantidad a agregar */

        /* console.log('stock', stock); */
        /* console.log('currentCantidad', currentCantidad) */
        /* console.log('stock disponible', newAvailableStock); */
        /* console.log('availableStock', availableStock); */

        /*     if (newAvailableStock < 0) {
                alert(`No hay suficiente stock disponible. Solo hay ${availableStock} elementos en stock.`);
                return;
            } */

        addToCart({ id, product, cantidad, price, category, image, stock })
        setIsCant(true)
        /*  setAvailableStock(newAvailableStock) // aquí se actualiza el estado de stock disponible */
    }

    /* console.log('veamos lo que hay en el cart', cartList); */
    return (

      
                <div className='container'>
                    <div>
                        <img src={image} alt="product" />
                        <div className='container-detail'>

                            <h2>
                                {product}
                            </h2>
                            <h3>
                                {description}
                            </h3>
                            <h4>
                                Precio: ${price}
                            </h4>
                        </div>

                        <div className='continue-shop'>
                            {
                                !isCant ?
                                    <ItemCount initial={1} inStock={stock} addToCart={onAdd} />
                                    :
                                    <>
                                        <Link className='terminar-compra' to={'/cart'}>Ir al Carrito</Link>
                                        <Link className='seguir-comprando' to={'/'}>Seguir comprando</Link>
                                    </>
                            }
                        </div>

                    </div>
                    <Link to='/' className='back'>
                        Salir
                    </Link>
                </div>
            
    )
}

export default ItemDetail