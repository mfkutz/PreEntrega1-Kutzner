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
                    <CartWidget />
                    <Link to='/' className='an'>
                        Inicio
                    </Link>
                    <NavLink to='/category/monitor'>
                        Monitores
                    </NavLink>
                    <NavLink to='/category/GPU'>
                        GPU
                    </NavLink>
                    <NavLink to='/category/Notebook'>
                        Notebook
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar