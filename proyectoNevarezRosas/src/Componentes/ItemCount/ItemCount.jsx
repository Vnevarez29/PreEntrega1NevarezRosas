import React, {useState, useEffect} from 'react'
import "./ItemCount.css";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemCount = ({valInicial, stock, agregarCarrito}) => 
{
    const [contador, setContador]= useState(1);

    const aumentar=()=>
    {
        if(contador < stock)
        {
            setContador(contador+1);
        }
        else
        {
            alert("Has agregado el limite de stock")
        }
    }

    const decrementar =() =>
    {
        if(contador > valInicial)
        {
            setContador(contador-1);
        }
        else
        {
            alert ("Agrega algo al carrito");
        }
    }

    const agregarCart =() =>
    {
        agregarCarrito(contador);
    }


  return (
    <div>
        <p className='parrafo'>{contador}</p> 
        <button className="boton" onClick={aumentar}>+</button> 
        <button className="botonAdd" onClick={agregarCart}>Agregar al carrito</button>
        <button className="boton" onClick={decrementar}>-</button>
    </div>
  )
}

export default ItemCount