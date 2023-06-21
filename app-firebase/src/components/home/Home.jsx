import React from 'react'
import { useAuth } from '../../context/AuthContext'


export const Home = () => {

  const {user} =useAuth()

  if(!user){
    return (
      <div>
        <p>Para usar este sitio, necesita iniciar sesión</p>
      </div>
    )
  }

  return (
    <div>
    <h1>Bienvenido</h1>
    <h2>{user?.displayName}</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGob-Xc9hUfLD5XNwSz1UQw-XongHRYEg01g&usqp=CAU" alt="" style={{width:'max-width: 1280px;'}} />
    </div>
  )
}
