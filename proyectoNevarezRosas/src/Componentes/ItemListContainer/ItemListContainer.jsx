import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const [arrayProductos, setArrayProductos] = useState([]);
  const{nameCategoria}= useParams();
  
  useEffect(() => {

    const db= getFirestore();
  
    const filtrarProd= 
    nameCategoria ?
    query(collection(db, "productos"), where("categoria", "==", nameCategoria))
    :
    collection(db,"productos");

    getDocs(filtrarProd).then((respuesta)=>{
      const nuevaColeccion= respuesta.docs.map((doc)=>{
        const data= doc.data()
        return {id: doc.id,...data} 
      })
      setArrayProductos(nuevaColeccion);
      console.log(nuevaColeccion);
    })
    .catch((error)=> console.log(error));


    // const datosFetch = async () => {
    //   try {
    //     const response = await fetch("/productos.json");
    //     const data = await response.json()

    //     if(nameCategoria){
    //       const filtro = data.filter((e)=>e.categoria == nameCategoria);
    //       setArrayProductos(filtro);
    //     }
    //     else{
    //       setArrayProductos(data);
    //     }
    //   }
    //   catch (error) {
    //     console.log("Error en el fetch" + error);
    //   }
    // }
    // datosFetch();
   
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

