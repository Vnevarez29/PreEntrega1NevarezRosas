import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [productos, setProductos] = useState([]);
  const {idProd}= useParams();

  useEffect(() => {
    const db= getFirestore();

    const productosNew=  doc(db, "productos", idProd)
    getDoc(productosNew) .then(respuesta=>{
      const data= respuesta.data()
      const detalle = {id: respuesta.idProd, ...data}
      setProductos(detalle)
    })
    .catch(error=> console.log(error))
    // const datosFetch = async () => {
    //   try {
    //     const response = await fetch("/productos.json");
    //     const data = await response.json()
    //     const filtrar= data.find((elemento)=> elemento.id== idProd)
    //     setProductos(filtrar);
    //   }
    //   catch (error) {
    //     console.log("Error en el fetch" + error);
    //   }
    // }
    // datosFetch();
  }, [])
  return (
    <div>
      <ItemDetail prod={productos}/>
    </div>
  )
}

export default ItemDetailContainer