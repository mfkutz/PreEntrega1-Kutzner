import { Link } from 'react-router-dom'
import '../styles/itemDetail.css'
import ItemCount from './ItemCount'

const ItemDetail = ({ id, product, category, description, price, stock, image }) => {
    return (
        <div className='container'>
            <div>
                <img src={image} alt="monitor" />
                <div>
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
                <ItemCount initial={1} inStock={7} addToCart={(cantidad) => { console.log('Cantidad agregada:', cantidad) }} />
            </div>
            <Link to='/' className='back'>
                Salir
            </Link>
        </div>
    )
}

export default ItemDetail