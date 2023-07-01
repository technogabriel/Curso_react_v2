import React, { useContext } from 'react'
import Counter from '../Counter/Counter'
import { CartContext } from '../context/CartContext'

export const ItemList = ({productos=[]}) => {

  const {carrito,addToCart} = useContext(CartContext)


  return (
    <>
        <div className='container-fluid d-flex p-3'>
        {
          productos.map((item)=>(
            <div className='card mx-2'style={{ width: "18rem" }}>
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.description}</p>
                <p className='card-text'>${item.price}</p>
                <img className="card-img-top w-70 h-70 mx-auto" src={item.photo} alt={item.photo}  />
                <Counter/>
                <button onClick={()=> addToCart({...carrito,item})} className='btn btn-success m-2'>Agregar al carrito</button>
              </div>

            </div>
          ))
        }

    </div>
    </>
  )
}
