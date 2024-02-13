import React, {useState, useEffect} from 'react'
import "./ItemCount.css";

const ItemCount = ({valInicial, stock}) => 
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

    const agregarCarrito =()=>
    {
        alert("Se han agregado "+contador+" elementos al carrito")
    }

  return (
    <div>
        <p className='parrafo'>{contador}</p> 
        <button className="boton" onClick={aumentar}>+</button> 
        <button className="botonAdd" onClick={agregarCarrito}>Agregar al carrito</button>
        <button className="boton" onClick={decrementar}>-</button>
    </div>
  )
}

export default ItemCount