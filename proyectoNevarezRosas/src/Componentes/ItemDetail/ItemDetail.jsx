import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({prod}) => {

  const agregarAlCart =(cantidad)=>
  {
    console.log(cantidad);
  }

  return (
    <div key={prod.id} className='estilo'>
      <img src={prod.img} alt={prod.nombre} className='imagen'/>
      <h3 className='negritas'>{prod.nombre}</h3>
      <h4 className='negritas'>${prod.precio}</h4>
      <h4 className='negritas'>Stock:{prod.stock}</h4>
      <p className='parr'>{prod.description}</p>

      <ItemCount valInicial={1} stock={prod.stock} agregarCarrito={agregarAlCart}/>
    </div>
  )
}

export default ItemDetail