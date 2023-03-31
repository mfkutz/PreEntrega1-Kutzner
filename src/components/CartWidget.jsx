import cart from '../assets/images/icon-cart.svg'
const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="carrito" />
            <span>0</span>
        </div>
    )
}

export default CartWidget