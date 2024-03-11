import React from 'react'

export const CartItem = ({producto, eliminarArticulo}) => {
  return (
    <div>
       
        <h3>{producto.producto.nombre}</h3>
       
        <img src={producto.producto.img} alt={producto.producto.nombre}/>
        <p>Cantidad: {producto.cantidad}</p>
        <p>Costo Unitario: ${producto.producto.precio * producto.cantidad}</p>
        <button onClick={()=> eliminarArticulo(producto.producto.id)}>Eliminar articulo</button>

    </div>
  )
  
}
