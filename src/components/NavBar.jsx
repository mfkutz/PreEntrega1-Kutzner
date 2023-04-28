import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import '../styles/navbar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <header className='header'>
            <img src={logo} className='logo' />
            <nav>
                <ul className='ul-nav'>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                    <Link to='/' className='an'>
                        Inicio
                    </Link>
                    <Link to='/category/monitor'>
                        Monitores
                    </Link>
                    <Link to='/category/GPU'>
                        GPU
                    </Link>
                    <Link to='/category/Notebook'>
                        Notebook
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar