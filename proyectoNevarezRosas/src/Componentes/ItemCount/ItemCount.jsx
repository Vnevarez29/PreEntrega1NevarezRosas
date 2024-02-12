import React, {useState, useEffect} from 'react'
import "./ItemCount.css";

const ItemCount = () => 
{
    const [contador, setContador]= useState(1);

    const aumentar=()=>
    {
        if(contador <10)
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
        if(contador>1)
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
        <h1>Contador de ejemplo</h1>
        <p>Contador: {contador}</p> 
        <button className="boton" onClick={aumentar}>+</button> 
        <button className="boton" onClick={agregarCarrito}>Agregar al carrito</button>
        <button className="boton" onClick={decrementar}>-</button>

    </div>
  )
}

export default ItemCount