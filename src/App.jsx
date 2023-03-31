import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer rubro='Insumos Informáticos' metodo='Efectivo y tarjetas de crédito' />
    </div>
  )
}
export default App
