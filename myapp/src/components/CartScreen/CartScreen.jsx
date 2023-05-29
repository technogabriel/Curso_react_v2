import React from 'react'
import {BsTrash3} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export const CartScreen = () => {
  return (
    <div className='container my-5'>
        <h3>Resumen de Compra</h3>
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
       

    </div>
  )
}
