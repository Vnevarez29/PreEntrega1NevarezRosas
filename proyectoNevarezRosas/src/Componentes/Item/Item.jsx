import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <Link to={`/detalle/${producto.id}`} className='enlace'>
      <div key={producto.id} className='estilo'>
        <img src={producto.img} alt={producto.nombre} className='imagen' />
        <h3>{producto.nombre}</h3>
      </div>
    </Link>

  )
}

export default Item