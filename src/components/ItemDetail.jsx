import { Link } from 'react-router-dom'
import '../styles/itemDetail.css'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from './CartContext'

const ItemDetail = ({ id, product, category, description, price, stock, image }) => {

    const [isCant, setIsCant] = useState(false)
    const { addToCart, cartList } = useContext(CartContext)

    const onAdd = (cantidad) => {
        /* console.log('Cantidad agregada', cantidad) */
        addToCart({ id, product, cantidad, price, category, image })
        setIsCant(true)
    }

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
                            <ItemCount initial={1} inStock={7} addToCart={onAdd} />
                            :
                            <>
                                <Link className='terminar-compra' to={'/cart'}>Terminar compra</Link>
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