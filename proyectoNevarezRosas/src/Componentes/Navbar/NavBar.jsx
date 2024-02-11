import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
    
            <img src='./logo.jpg' alt='' className='logo'></img>
            <ul>
                <li>
                    <a>Inicio</a>
                </li>
                <li>
                    <a>Productos</a>
                </li>
                <li>
                    <a>Contacto</a>
                </li>
            </ul>
            
            {/* Componente cardwidget */}
            <CartWidget/>

        </>

    )
}
