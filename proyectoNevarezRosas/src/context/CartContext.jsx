import React, {createContext, useState} from "react";

export const CartContext= createContext(); 

const CartProvider=({children})=>{

    const [carrito, setCarrito]= useState([]);
    const [total, setTotal]= useState(0);
    const [totArticulos, setTotalArticulos]= useState(0);

    const agregarCarrito =(producto, cantidad)=>{
        const existeProd = carrito.find(p => p.producto.id == producto.id)
        if(existeProd)
        {
            const nuevoCarrito = [...carrito]
            nuevoCarrito[existeProd].cantidad += cantidad;
            setCarrito(nuevoCarrito)
        }
        else{
            setCarrito([...carrito,{producto,cantidad}])
        }
    }

    const eliminarArticulo=(id)=>{
        const nuevoCarrito= carrito.filter(p => p.producto.id !== id)
        setCarrito(nuevoCarrito);
    }

    const vaciarCarrito=()=>{
        setCarrito([]);
    }

    const verCantProductos = ()=>{
        const total= carrito.reduce((total, articulos)=> total+articulos.cantidad,0)
        return total;
    }

    const verTotalCarrito = () =>{
        const montoFinal = carrito.reduce((total, articulo)=> total + (articulo.producto.precio * articulo.cantidad),0)
        return montoFinal;
    }

    return(

        <CartContext.Provider value={{ carrito, agregarCarrito, eliminarArticulo, 
        vaciarCarrito, verCantProductos, verTotalCarrito }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider