//import { useState} from 'react'
import { NavBar } from './Componentes/Navbar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/itemListContainer'
import ItemCount from './Componentes/ItemCount/ItemCount'
import Footer from './Componentes/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './Componentes/ItemDetail/ItemDetail';
import { Cart } from './Componentes/Cart/Cart';
import CartProvider from './context/CartContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
//import { useEffect, useState } from 'react';
//import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
//import { getFirestore, collection, getDocs,query, where } from 'firebase/firestore';

function App() {

//   //const [producto, setProducto]= useState(null);
//   useEffect(()=>
//   {
//     const db= getFirestore();
//     const referenciaProducto= doc(db, "productos", "1b7syDwH1DJmNWCX7RKr")
//
//     getDoc(referenciaProducto).then((snapshot)=>{
//       if(snapshot.exists)
//       {
//         setProducto({id: snapshot.id,...snapshot.data()})
//       }
//     })
//   },[])
// console.log(producto);

// const [coleccionProductos, setColeccionProductos]= useState(null);
// useEffect(()=>{
//   const db=getFirestore();
//   const coleccionItems= collection(db, "productos");
//   getDocs(coleccionItems).then((snapshot)=>{
//     setColeccionProductos(snapshot.docs.map((doc)=>(
//       {id: doc.id,...doc.data()}
//     )))
//   })
// },[])

// const [productos, setProductos]= useState([])
// useEffect(()=>{
//   const db=getFirestore();
//   const consulta= query(collection(db, "productos"), where("categoria","==", "floral"))
//   getDocs(consulta).then((snapshot)=>{
//     if(snapshot.size ===0)
//     {
//       console.log("no hay productos");
//     }
//     setProductos(snapshot.docs.map((doc)=>(
//       {id: doc.id,...doc.data()}
//     )))
//   })
// },[])

  return (
    <>
      <div>
        <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/detalle/:idProd' element={<ItemDetailContainer/>}/>
          <Route path='/categoria/:nameCategoria' element={<ItemListContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<Error />}/>
        </Routes>
        </CartProvider>
        </BrowserRouter>
        {/* <ItemDetailContainer id={2}/> */}
      </div>
      <div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
