import { useContext } from "react"
import { CartContext } from "./CartContext"
import CartContainerProd from "./CartContainerProd"
import EmptyCart from "./EmptyCart"


const CartContainer = () => {

    const { cartList } = useContext(CartContext)

    /* console.log(cartList.length); */
    return (
        <div>
            {
                cartList.length > 0 ?

                    <CartContainerProd />
                    :
                    <EmptyCart />

            }
        </div>

    )
}

export default CartContainer