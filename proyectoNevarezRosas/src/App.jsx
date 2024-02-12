//import { useState} from 'react'
import { NavBar } from './Componentes/Navbar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/itemListContainer'
import ItemCount from './Componentes/ItemCount/ItemCount'
import Footer from './Componentes/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className='body'>
        <NavBar/>
        <ItemListContainer />
        <ItemCount />

      </div>
      <div>
        <footer />
      </div>
    </>
  )
}

export default App
