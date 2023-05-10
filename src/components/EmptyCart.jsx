import '../styles/emptyCart.css'
import cartEmpty from '../assets/images/carritoVacio.png'
import { useEffect } from 'react'


const EmptyCart = () => {

  return (
    <div className='empty-container'>
      <img src={cartEmpty} alt="Cart" />
    </div>
  )
}

export default EmptyCart