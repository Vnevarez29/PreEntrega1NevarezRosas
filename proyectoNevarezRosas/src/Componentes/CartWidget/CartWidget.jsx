import React, {useContext} from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

  const {verCantProductos}= useContext(CartContext);

  return (
    <>
        <img src="./empty-car.png" alt="" className='carrito'/>
        <p>{verCantProductos() == 0 ? null : verCantProductos()}</p>
    </>
    
  )
}
