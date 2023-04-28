import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    //estados y funciones globales
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0)

    //precio total de la compra
    function actualizarTotal() {
        const sumarTotal = cartList.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
        setTotal(sumarTotal)
    }

    //actualizo el valor total en cada cambio del carrito
    useEffect(() => {
        actualizarTotal()
    }, [cartList])

    //agrega al carrito
    const addToCart = (newProduct) => {
        //aqui agregar logica de producto repetido aqui (posiblemente un if)
        const existingProduct = cartList.find(product => product.id === newProduct.id);
        console.log(existingProduct);
        if (existingProduct) {
            const updatedCart = cartList.map(product => {
                if (product.id === existingProduct.id) {
                    return {
                        ...product,
                        cantidad: product.cantidad + newProduct.cantidad
                    }
                }
                return product
            })
            setCartList(updatedCart)
        } else {
            setCartList([...cartList, newProduct])
        }
    }

    //vaciarCarrito
    const vaciarCarrito = () => {
        setCartList([])
    }

    //eliminar por item
    function eliminarProducto(id) {
        const nuevoCartList = cartList.filter((producto) => producto.id !== id)
        setCartList(nuevoCartList)
        console.log('producto eliminado')
    }

    //cantidad total de productos
    function getTotalProductos() {
        const totalProductos = cartList.reduce((acc, prod) => acc + prod.cantidad, 0)
        return totalProductos
    }

    return (
        <CartContext.Provider value={{
            //aqui declaramos los estados y funciones que vamos a utilizar
            cartList,
            total,
            addToCart,
            vaciarCarrito,
            actualizarTotal,
            eliminarProducto,
            getTotalProductos
        }}>
            {children}
        </CartContext.Provider>
    )
}


