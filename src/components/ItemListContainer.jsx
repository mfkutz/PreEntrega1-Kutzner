
import imagenMain from '../assets/images/illustration-intro.png'
import '../styles/itemlistcontainer.css'

const ItemListContainer = ({ rubro, metodo }) => {
    return (
        <div className='main'>
            <img src={imagenMain} alt="ecommerce" className='ecommerce' />
            <div className='texto'>
                <p>Fylo será un Ecommerce de {rubro} </p>
                <p>Podrás comprar con {metodo} </p>
            </div>
        </div>
    )
}
export default ItemListContainer