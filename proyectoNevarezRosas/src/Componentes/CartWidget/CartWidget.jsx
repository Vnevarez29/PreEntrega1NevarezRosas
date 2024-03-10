import React, {useContext} from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

  const {totArticulos}= useContext(CartContext);
  return (
    <>
        <img src="./empty-car.png" alt="" className='carrito'/>
        <p>{totArticulos ==0 ? null : totArticulos}</p>
    </>
    
  )
}
