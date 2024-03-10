import React, {createContext, useState} from "react";

export const CartContext= createContext(); 

const CartProvider=({children})=>{

    const [carrito, setCarrito]= useState([]);
    const [total, setTotal]= useState(0);
    const [totArticulos, setTotalArticulos]= useState(0);

    const agregarCarrito =(producto, cantidad)=>{
        const product={'Producto:': producto, 'Cantidad:': cantidad}
    }

    const eliminarArticulo=()=>{

    }

    const vaciarCarrito=()=>{

    }

    const verCantProductos = ()=>{

    }

    const verTotalCarrito = () =>{

    }

    return(

        <CartContext.Provider value={{ carrito, total, totArticulos, 
        agregarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider