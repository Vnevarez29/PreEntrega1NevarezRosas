import React from 'react'

export const CartItem = (articulo, eliminarArticulo) => {
  return (
    <div>
        <h3>{articulo.articulo.nombre}</h3>
        <img src={articulo.articulo.img} alt={articulo.articulo.nombre}/>
        <p>Cantidad: {articulo.cantidad}</p>
        <p>Costo Unitario: ${articulo.articulo.precio * articulo.cantidad}</p>
        <button onClick={()=> eliminarArticulo(articulo.articulo.id)}>Eliminar articulo</button>

    </div>
  )
}
