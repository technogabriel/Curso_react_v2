import React, { useContext } from 'react'
import {useAuth} from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {AiFillGoogleCircle} from 'react-icons/ai'


export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLoginGoogle = (e) =>{
        e.preventDefault()
        auth.loginWithGoogle()
        navigate('/')
    }
  return (
    <div>
        <form className='container mt-1' style={{backgroundColor:'gray', border:'1px solid black', padding:'20px', borderRadius:'10px'}}>
            <div className='mb-3'>
                <button onClick={(e)=> handleLoginGoogle(e)} style={{marginBottom:'10px'}}>
                    <AiFillGoogleCircle size={20} style={{marginRight:'10px'}}/>
                    Iniciar sesion con Google

                </button>
            </div>
        </form>

    </div>
  )
}
