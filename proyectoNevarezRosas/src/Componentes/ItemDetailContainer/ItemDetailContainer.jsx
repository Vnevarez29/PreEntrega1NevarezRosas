import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const datosFetch = async () => {
      try {
        const response = await fetch("./productos.json");
        const data = await response.json()
        const filtrar= data.find((elemento)=> elemento.id== id)
        setProductos(filtrar);
      }
      catch (error) {
        console.log("Error en el fetch" + error);
      }
    }
    datosFetch();
  }, [id])
  return (
    <div>
      <ItemDetail prod={productos}/>
    </div>
  )
}

export default ItemDetailContainer