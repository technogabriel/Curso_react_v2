import React, { useState } from 'react'
import {GrAdd}from 'react-icons/gr'
import {IoMdRemoveCircleOutline} from 'react-icons/io'



const Counter = () => {
    //Ejercicios de hooks
    //Ejemplo 1:
    const botonPresionado = () =>{
        console.log('Estas son las veces que el boton ha sido presionado');
    }

    //ejemplo 2:
    const [hora, setHora] = useState("")
    const mostrarHora =()=>{
        const date = new Date();
        const horaLocal = date.toLocaleTimeString();
        setHora(horaLocal);
        
    }

    //Ejemplo 3:
    const [isWhite, setIsWhite] = useState(true)
    const [isBlack, setIsBlack] = useState(false)

    const handleWhite = () =>{
        setIsWhite(true)
        setIsBlack(false)
    }

    const handleBlack = () =>{
        setIsBlack(true)
        setIsWhite(false)
    }

    //Ejemplo4
    const [counter, setCounter] = useState(0)

    const handleSum = ()=>{
        setCounter(counter +1)
    }

    const handleRest =() =>{
        if(counter >0)
            setCounter(counter -1);
    }
    


  return (
    <>
    <h3>Mis estados</h3>
    <hr/>
    <button onClick={botonPresionado}>Apretame y mira la consola</button>
    <hr/>
    <p>{hora}</p>
    <button onClick={mostrarHora}>Mostrar Hora</button>
    <hr/>

    <div style={{
       backgroundColor: isWhite 
       ? 'white' : 'black', color: isBlack ? 'white' : 'black'

    }}>
        <h2>Color Cambiante</h2>
        <button onClick={handleWhite}>Blanco</button>
        <button onClick={handleBlack}>Negro</button>
    </div>
    <hr/>

    <h3>Cantidad de Clicks : {counter}</h3>
    <button onClick={handleSum} style={{margin: '5px'}}><GrAdd /></button>
    <button onClick={handleRest}><IoMdRemoveCircleOutline /> </button>
    </>
  )
}

export default Counter