//import { useState} from 'react'
import { NavBar } from './Componentes/Navbar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/itemListContainer'
import ItemCount from './Componentes/ItemCount/ItemCount'
import Footer from './Componentes/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './Componentes/ItemDetail/ItemDetail';

function App() {
  return (
    <>
      <div className='body'>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/productos' element={<ItemDetailContainer id={3}/>}/>
          <Route path='*' element={<Error />}/>
        </Routes>
        </BrowserRouter>
        <ItemDetailContainer id={2}/>
      </div>
      <div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
