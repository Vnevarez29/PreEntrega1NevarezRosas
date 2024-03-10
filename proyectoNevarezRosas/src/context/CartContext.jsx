import React, {createContext, useState} from "react";

export const CartContext= createContext(); 

const CartProvider=({children})=>{

    const [carrito, setCarrito]= useState([]);
   

    const agregarCarrito =(producto, cantidad)=>{
        const existeProd = carrito.findIndex(p => p.producto.id == producto.id)
        if(existeProd==-1)
        {
            setCarrito([...carrito,{producto,cantidad}])
            
        }
        else{
            const nuevoCarrito = [...carrito]
            nuevoCarrito[existeProd].cantidad += cantidad;
            setCarrito(nuevoCarrito)
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