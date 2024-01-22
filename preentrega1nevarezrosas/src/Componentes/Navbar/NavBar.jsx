import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <>
            <h1>logo</h1>
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
