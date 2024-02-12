import React from 'react'
import "./Item.css";

const Item = ({producto}) => {
  return (
    <div key={producto.id} className='estilo'>
      <h2 className='negritas'>{producto.nombre}</h2>
      <h2 className='negritas'>${producto.precio}</h2>
      <h2 className='negritas'>Stock:{producto.stock}</h2>
      <p className='parrafo'>{producto.description}</p>
    </div>
  )
}

export default Item