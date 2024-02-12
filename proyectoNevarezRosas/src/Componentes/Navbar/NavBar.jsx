import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"
import Navbar from 'react-bootstrap/Button';
import { NavbarBrand } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <>
            <div className='barra'>
                <img src='./logo.png' alt='' className='logo'></img>

                <li>
                    <a>Inicio</a>
                </li>
                <li>
                    <a>Productos</a>
                </li>
                <li>
                    <a>Buscar</a>
                </li>



                {/* Componente cardwidget */}
                <CartWidget />

            </div>

        </>

    )
}
