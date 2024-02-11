//import { useState} from 'react'
import { NavBar } from './Componentes/Navbar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/itemListContainer'
import ItemCount from './Componentes/ItemCount/ItemCount'

function App() {
  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenido a mi E-commerce"}/>
        <ItemCount/>
      </div>
      
    </>
  )
}

export default App
