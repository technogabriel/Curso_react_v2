import {React, useContext, useEffect, useState,createContext } from 'react'
import { authenticate } from '../firebase/config'
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'

export const authContext = createContext({})

export const useAuth = () => {
    const context = useContext(authContext)
    console.log("context : " , context)
    if(!context){
        console.log("Error al crear el contexto")
    }
    return context
}

export const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(authenticate, (user)=>{
            //actualiza el estado del usuario cuando cambia el estado de autenticacion
            setUser(user)
        })
        return ()=> unsubscribe() //Limpia el efecto cuando se desmonta el componente(?
    }, [])

    const loginWithGoogle = async()=>{
        const responseGoogle = new GoogleAuthProvider()
        return signInWithPopup(authenticate, responseGoogle)
    }

    const logout = async()=>{
        const res = await signOut(authenticate)
        console.log(res)
    }
  return (
    <authContext.Provider value={{
        loginWithGoogle,
        logout,
        user
    }}>
        {children}
    </authContext.Provider>
  )
}
