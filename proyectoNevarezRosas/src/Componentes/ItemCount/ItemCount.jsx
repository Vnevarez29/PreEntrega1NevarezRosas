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
        <button className="my-button" onClick={aumentar}>Incrementar</button> <br /><br />
        <button className="my-button" onClick={agregarCarrito}>Agregar al carrito</button> <br /><br />
        <button className="my-button" onClick={decrementar}>Decrementar</button>

    </div>
  )
}

export default ItemCount