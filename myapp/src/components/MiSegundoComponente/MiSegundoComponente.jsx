import React from 'react'

const MiSegundoComponente = ({persona, saludo}) => {
    const {nombre,edad} = persona
 //   const {bienvenida} = props
  return (
    <>
    {/* Ejemplos sin destructuring */}
    <h1>MiSegundoComponente</h1>
    {/* <h2>{bienvenida}</h2> */}
    {/* <h2>{props.nombreUno}</h2> */}

    {/* <div>Mi nombre es : {props.nombreDos}</div>
        <div>Tengo : {props.edad} años </div>
        <div>Vivo en : {props.pais}</div> */}

     {/* Ejemplos con destructuring */}
     {/* <h2>Hola {nombreUno}</h2> */}

     {/* Ejemplo #2 */}
     {/* <div>Mi nombre es : {nombreDos}</div>
        <div>Tengo : {edad} años </div>
        <div>Vivo en : {pais}</div> */}
        {/* <div className='container -fluid'>
            <div>Nombre : {propsObjectTwo.nombre}</div>
            <div>edad: {propsObjectTwo.edad}</div>
            <div>Pais: {propsObjectTwo.pais}</div>
            <div>Nacionalidad: {propsObjectTwo.nacionalidad}</div>
        </div> */}

        <div className='container -fluid'>
        <div>{saludo}, Nombre : {nombre}</div>
            <div>edad: {edad}</div>

        </div>

    </>
  )
}

export default MiSegundoComponente