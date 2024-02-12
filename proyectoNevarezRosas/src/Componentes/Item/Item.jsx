import React from 'react'
import "./Item.css";

const Item = ({producto}) => {
  return (
    <div key={producto.id} className='estilo'>
      <img src={producto.img} alt={producto.nombre} className='imagen'/>
      <h3 className='negritas'>{producto.nombre}</h3>
      <h4 className='negritas'>${producto.precio}</h4>
      <h4 className='negritas'>Stock:{producto.stock}</h4>
      <p className='parrafo'>{producto.description}</p>
    </div>
  )
}

export default Item