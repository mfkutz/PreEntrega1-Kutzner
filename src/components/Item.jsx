import { Link } from 'react-router-dom';
import '../styles/item.css'

function Item({ id, product, description, price, image, category, stock }) {
  return (
    <div key={id} className='card'>
        <img src={image} className='card-img' alt='imagen'/>
      <div className="card-body">
        <h3>Producto: {product}</h3>
        <label>Descripcion: {description}</label>
        <label>Categoria: {category}</label>
        <label>Precio:$ {price}</label>
        <label>Stock: {stock}</label>
      </div>
      <div className='card-footer'>
        <Link to={`/detail/${id}`} className='detalle-style'>
          detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
