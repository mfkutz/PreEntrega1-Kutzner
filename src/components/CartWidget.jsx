import { useContext } from 'react'
import { CartContext } from "./CartContext"
import cart from '../assets/images/icon-cart.svg'

const CartWidget = () => {

    const { getTotalProductos } = useContext(CartContext)
    return (
        <div>
            <img src={cart} alt="carrito" />
            <span>
                {getTotalProductos() !== 0 && getTotalProductos()}
            </span>
        </div>
    )
}

export default CartWidget