import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({prod}) => {
  return (
    <div key={prod.id} className='estilo'>
      <img src={prod.img} alt={prod.nombre} className='imagen'/>
      <h3 className='negritas'>{prod.nombre}</h3>
      <h4 className='negritas'>${prod.precio}</h4>
      <h4 className='negritas'>Stock:{prod.stock}</h4>
      <p className='parrafo'>{prod.description}</p>
      <ItemCount/>
    </div>
  )
}

export default ItemDetail