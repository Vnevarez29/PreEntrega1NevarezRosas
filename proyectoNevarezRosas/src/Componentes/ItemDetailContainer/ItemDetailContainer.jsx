import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [productos, setProductos] = useState([]);
  const {idProd}= useParams();

  useEffect(() => {
    const datosFetch = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json()
        const filtrar= data.find((elemento)=> elemento.id== idProd)
        setProductos(filtrar);
      }
      catch (error) {
        console.log("Error en el fetch" + error);
      }
    }
    datosFetch();
  }, [])
  return (
    <div>
      <ItemDetail prod={productos}/>
    </div>
  )
}

export default ItemDetailContainer