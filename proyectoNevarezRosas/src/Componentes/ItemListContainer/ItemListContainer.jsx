import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css";

const ItemListContainer = () => {

  const [arrayProductos, setArrayProductos] = useState([]);

  useEffect(() => {
    const datosFetch = async () => {
      try {
        const response = await fetch("./productos.json");
        const data = await response.json()
        setArrayProductos(data);
      }
      catch (error) {
        console.log("Error en el fetch" + error);
      }
    }
    datosFetch();
  }, [])

  return (
    <div className='estilo'>
      {arrayProductos.length == 0 ? 
      <h1> cargando...</h1> :
        <ItemList productos={arrayProductos}/>
      }
    </div>
  )
}

export default ItemListContainer

