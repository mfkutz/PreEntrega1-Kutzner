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
                    <li><a href="#">Motherboards</a></li>
                    <li><a href="#">GPU</a></li>
                    <li><a href="#">Memorias</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar