import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import NotFound404 from './components/NotFound404'
import { CartContextProvider } from './components/CartContext'
import CartContainer from './components/CartContainer'
import CartWidget from './components/CartWidget'
import TecnicaDeRendering from './components/TecnicaDeRendering'
import EmptyCart from './components/EmptyCart'



function App() {

  //para inyectar en CarContext necesito tener aqui las funciones que vaya a declarar en CartContext, como en el ej que hicimos con "ContextoApp", siempre se declaran
  //arriba del return. y debajo de la funcion "principal" en este caso "App"

  return (
    //este CartContext viene del archivo CartContext.jsx

    //aqui van los estados y funciones globales
    <CartContextProvider>
      <Router className="App">
        <NavBar />
        {/* <CartWidget /> */}
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
        {/* <TecnicaDeRendering /> */}
    
      </Router>
    </CartContextProvider>

  )
}
export default App
