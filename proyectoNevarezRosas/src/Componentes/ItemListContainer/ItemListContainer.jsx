import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [arrayProductos, setArrayProductos] = useState([]);
  const{nameCategoria}= useParams();
  
  useEffect(() => {
    const datosFetch = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json()

        if(nameCategoria){
          const filtro = data.filter((e)=>e.categoria == nameCategoria);
          setArrayProductos(filtro);
        }
        else{
          setArrayProductos(data);
        }
      }
      catch (error) {
        console.log("Error en el fetch" + error);
      }
    }
    datosFetch();
  }, [nameCategoria])

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

