import { useContext } from "react"
import { CartContext } from "./CartContext"
import '../styles/cartContainer.css'
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from 'sweetalert2';



const CartContainer = () => {
    const { cartList, vaciarCarrito, total, eliminarProducto, getTotalProductos } = useContext(CartContext)

    const disparo = () => {
        Swal.fire({
            title: 'Desea vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Vaciar'
        }).then((result) => {
            if (result.isConfirmed) {
                vaciarCarrito()
                Swal.fire(
                    'Carrito vaciado!',
                    'Puedes seguir agregando productos',
                    'success'
                )
            }
        })
    }


    return (
        <>
            <div className="container-cart">
                {cartList.map(prod => (
                    <div className="cart-order" key={prod.id}>
                        <img src={prod.image} className="image-cart-order" />
                        <div className="producto-carrito-titulo">
                            <small>Producto</small>
                            <h3>{prod.product}</h3>
                        </div>
                        <div className="producto-carrito-cantidad">
                            <small>Cantidad</small>
                            <p>{prod.cantidad}</p>
                        </div>
                        <div className="producto-carrito-precio">
                            <small>Precio</small>
                            <p>$ {prod.price}</p>
                        </div>
                        <div className="producto-carrito-subtotal">
                            <small>Subtotal</small>
                            <p>$ {prod.price * prod.cantidad}</p>
                        </div>
                        <button className="producto-carrito-eliminar" onClick={() => eliminarProducto(prod.id)} ><RiDeleteBin5Fill /></button>
                    </div>
                ))}
                <div className="acciones disabled">

                    <div>

                    </div>

                    <div className="carrito-acciones-der">
                        <div className="carrito-acciones-total">
                            <p>Total:</p>
                            <p>${total}</p>
                        </div>
                        <button className="carrito-acciones-vaciar" onClick={disparo}>Vaciar Carrito</button>
                        <button className="carrito-acciones-comprar">Comprar ahora</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CartContainer