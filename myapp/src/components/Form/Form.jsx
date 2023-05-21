import React, { useState } from 'react'

export const Form = () => {

    const [email, setEmail] = useState("")
    const [nombre, setNombre]= useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log("email: ", email)
        console.log("nombre: ", nombre)
        console.log("apellido: ", apellido)
        console.log("telefono: ", telefono)
        resetForm()

    }

    const resetForm = ()=>{
        setEmail("")
        setNombre("")
        setApellido("")
        setTelefono("")
    }


  return (
    <div>
        <h3>Terminar Compra</h3>
        <form onSubmit={handleSubmit} className='container mt-3'>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={(e)=> setEmail(e.target.value)} value={email} type="text" className='form-control' />
            </div>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input onChange={(e) => setNombre(e.target.value)} value={nombre} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input onChange={(e) => setApellido(e.target.value)} value={apellido} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Telefono</label>
                <input onChange={(e) => setTelefono(e.target.value)} value={telefono} type="text" className="form-control" />
            </div>
            <button type='submit'  className='btn btn-success mt-3 w-100'>Finalizar Compra</button>
            
        </form>
    </div>
  )
}
