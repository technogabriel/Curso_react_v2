import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export const Profile = () => {

    const {user,logout} =useAuth()
    const navigate = useNavigate()

    const handleLogout = async() =>{
      await logout()
      navigate('/login')
    }

  return (
    <div>
        <p>Nombre : {user?.displayName}</p>
        <p>Email : {user?.email}</p>
    <button className='btn btn-danger' onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}
