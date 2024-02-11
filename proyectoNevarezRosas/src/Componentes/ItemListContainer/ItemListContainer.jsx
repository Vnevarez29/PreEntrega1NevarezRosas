import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {

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
    <div>
      <p>{greeting}</p>
      {arrayProductos.length == 0 ? <h1> cargando...</h1> :
        arrayProductos.map((elemento, indice) => {
          return (
            <>
              <div key={elemento.id} className='estilo'>
                <h2 className='negritas'>{elemento.nombre}</h2>
                <h2 className='negritas'>${elemento.precio}</h2>
                <h2 className='negritas'>Stock:{elemento.stock}</h2>
                <h2>{elemento.description}</h2>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default ItemListContainer

