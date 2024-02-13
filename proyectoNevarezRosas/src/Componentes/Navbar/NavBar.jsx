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
                    <NavLink to={'/categoria/Dulce'}className='links'>Perfumes Dulce</NavLink>
                </li>
                <li>
                    <NavLink to={'/categoria/Floral'}className='links'>Perfumes Floral</NavLink>
                </li>
                <li>
                    <NavLink to={'/categoria/Tropical'}className='links'>Perfumes Tropical</NavLink>
                </li>
                
                {/* Componente cardwidget */}
                <CartWidget />

            </div>

        </>

    )
}
