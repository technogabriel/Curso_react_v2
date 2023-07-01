import React, { useContext } from 'react'
import {BsTrash3} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


export const CartScreen = () => {

  const {carrito, precioTotal,vaciarCarrito} = useContext(CartContext)

  return (
    <div className='container my-5'>
      {
        carrito.length === 0 ?
        <>
        <h3>El carrito esta vacio...</h3>
        <hr />
        <NavLink to='/' className='btn btn-success'>Volver al Inicio</NavLink>
        </>
        :
        <>
          <h3>Resumen de Compras</h3>
        {
          carrito.map((prod)=>(
            <>
              <div>
              <p>Producto:</p>
              <p>$Precio:</p>
              <p>Cantidad :</p>
              </div>
            </>
          ))
        }
        <hr />
        <strong>Precio Total : </strong>
        <hr />
        <button onClick={()=> vaciarCarrito()}  className='btn btn-danger'>Vaciar Carrito</button>
        <NavLink className='btn btn-success'>Terminar Comprar</NavLink>
        </>
      }

    </div>
  )
}

/* <h3>Resumen de Compra</h3>
        <hr />

        <div>
            <p>Producto: </p>
            <p>Precio: </p>
            <p>Cantidad: </p>
            <button className='btn btn-warning m-3'><BsTrash3/></button>
        </div>
        <hr />
        <div>
            <h4>Precio Total:</h4>
            <hr />
        </div>

        <button className='btn btn-danger m-3'>Vaciar Carrito</button>
        <NavLink className='btn btn-success m-3' >Terminar Compra</NavLink>
        */
