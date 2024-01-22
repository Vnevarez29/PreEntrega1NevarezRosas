import { useState } from 'react'
import { NavBar } from './Componentes/Navbar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/itemListContainer'

function App() {
  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenido a mi e-commerce"}/>
      </div>
    </>
  )
}

export default App
