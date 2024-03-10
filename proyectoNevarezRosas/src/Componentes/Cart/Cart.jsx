import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { carrito, vaciarCarrito, eliminarArticulo, verTotalCarrito } = useContext(CartContext)

    return (
        <div>
            {Cart.length == 0 ?
                <>
                    <h1>No hay productos para mostrar</h1>
                    <Link to={"/"}>Regresar a Inicio</Link>
                </>
                :
                <>
                    <h1>Lista de articulos</h1>
                    {Cart.map((art) => (
                        <CartItem key={art.id} prod={p} eliminarArticulo={eliminarArticulo}/>
                    ))}

                    <p>Total: ${verTotalCarrito()}</p>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                </>
                 }
        </div>
    )
}
