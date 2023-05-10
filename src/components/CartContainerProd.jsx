import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import '../styles/cartContainerProd.css'
import { RiDeleteBin5Fill } from "react-icons/ri"
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'


const CartContainerProd = () => {
    const { cartList, vaciarCarrito, total, eliminarProducto } = useContext(CartContext)
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    /* console.log(cartList); */
    const generarOrden = (evt) => {
        evt.preventDefault()
        alert('gracias por tu compra')
        vaciarCarrito()
        const order = {}
        order.buyer = dataForm //anteriormente hardcodeado { name: 'martin', phone: '735122222', email: 'mfk@gmail.com' }
        order.items = cartList.map(({ id, product, cantidad, price }) => ({ id, product, cantidad, price }))
        order.total = total
        /* console.log(order); */


        //insertar la orden a firebase
        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'orders')

        addDoc(ordersCollection, order)//insert
            .then(resp => console.log(resp))


        //ACTUALIZAR EN FIRESTORE
        /* const queryDoc = doc(dbFirestore, 'productos', '1fqudWVZX9cyt6r6uU3w') */


        //CUANDO LE DA A GENERAR ORDEN HAY QUE VERIFICAR QUE HAYA STOCK, SI HAY SIGUE Y SE DESCUENTA
        /*   updateDoc(queryDoc, {
              stock: 13
          }) */

    }


    const handleOnChange = (evt) => {
        /* console.log('Nombre del input', evt.target.name); */
        /* console.log('Valor del input', evt.target.value); */
        setDataForm({
            //el spread hace persistente los datos, para no perderlos y que no se pisen
            ...dataForm,
            //campo dinamico
            [evt.target.name]: evt.target.value
        })
    }

    console.log(dataForm);

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

                {/* HACER FORMULARIO, poner 4 input, 2 para validar correo */}

                <form onSubmit={generarOrden}>
                    <input
                        type="text"
                        name="name"
                        onChange={handleOnChange}
                        value={dataForm.name}
                        placeholder="Ingrese el nombre"
                        />
                    <input
                        type="text"
                        name="phone"
                        onChange={handleOnChange}
                        value={dataForm.phone}
                        placeholder="Ingrese el teléfono"
                        />
                    <input
                        type="text"
                        name="email"
                        onChange={handleOnChange}
                        value={dataForm.email}
                        placeholder="Ingrese el Email"
                        />


                    {/* ACCIONES */}
                    <div className="acciones disabled">

                        <div>

                        </div>

                        <div className="carrito-acciones-der">
                            <div className="carrito-acciones-total">
                                <p>Total:</p>
                                <p>${total}</p>
                            </div>
                            <button className="carrito-acciones-comprar">Comprar ahora</button>
                            <button className="carrito-acciones-vaciar" onClick={vaciarCarrito}>Vaciar Carrito</button>
                        </div>

                    </div>
                </form>


            </div>
        </>
    )
}

export default CartContainerProd