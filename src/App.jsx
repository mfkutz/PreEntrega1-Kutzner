import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import NotFound404 from './components/NotFound404'


function App() {
  return (
    <Router className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:cid' element={<ItemListContainer />} />
        <Route path='/detail/:pid' element={<ItemDetailContainer />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </Router>
  )
}
export default App
