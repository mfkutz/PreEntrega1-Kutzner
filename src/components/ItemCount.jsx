import '../styles/itemCount.css'
import { useState } from "react"

const ItemCount = ({ initial, inStock, addToCart }) => {
    const [qOfItem, setqOfItem] = useState(initial)

    const increment = () => {
        if (qOfItem < inStock) {
            setqOfItem(qOfItem + 1)
        }
    }
    const decrement = () => {
        if (qOfItem > 1) {
            setqOfItem(qOfItem - 1)
        }
    }

    return (
        <div className='count-container'>
            <div className="num">
                <button className="btn-dec" onClick={decrement}>Clic -</button>
                {qOfItem}
                <button className="btn-inc" onClick={increment}>Clic +</button>
            </div>
            <div>
                <button className='addToCart' onClick={() => addToCart(qOfItem)} disabled={!inStock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount