//import { useState} from 'react'
import { NavBar } from './Componentes/Navbar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/itemListContainer'
import ItemCount from './Componentes/ItemCount/ItemCount'
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer />
        <ItemCount />
      </div>

    </>
  )
}

export default App
