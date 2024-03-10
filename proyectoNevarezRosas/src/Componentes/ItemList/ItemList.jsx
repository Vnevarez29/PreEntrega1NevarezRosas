import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className='estiloItem' >
      {
        productos.map((producto)=>
        {
          return(
            <Item key={producto.id} producto={producto}/>
          )
        })
        
      }
    </div>
  )
}

export default ItemList