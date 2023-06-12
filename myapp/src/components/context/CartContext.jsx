import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) =>{

  const [carrito, setCarrito] = useState(init)

  useEffect(() =>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const addToCart = (item) =>{
    setCarrito([...carrito, item])
  }

  const calcularCantidad = () =>{
    return carrito.reduce((acc,prod)=> acc + prod.counter,0)
  }

  const precioTotal =()=>{
    return carrito.reduce((acc, prod)=> acc + prod.price * prod.counter, 0)
  }

  const vaciarCarrito = () =>{
    setCarrito([])
  }

  return(
    <CartContext.Provider value = {{
      addToCart,
      calcularCantidad,
      precioTotal,
      vaciarCarrito,
      carrito
    }}>
      {children}
    </CartContext.Provider>
  )

}
