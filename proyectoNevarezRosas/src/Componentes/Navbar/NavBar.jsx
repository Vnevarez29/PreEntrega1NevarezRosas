import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"
import Navbar from 'react-bootstrap/Button';
import { NavbarBrand } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <div className='barra'>
                <img src='./logo.png' alt='' className='logo'></img>
                <li>
                    <NavLink to={'/'}className='links'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to={'/productos'}className='links'>Productos</NavLink>
                </li>
                
                {/* Componente cardwidget */}
                <CartWidget />

            </div>

        </>

    )
}
