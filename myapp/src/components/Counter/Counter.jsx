import React, { useState } from 'react'
import {GrAdd}from 'react-icons/gr'
import {IoMdRemoveCircleOutline} from 'react-icons/io'



const Counter = () => {

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
    
    <h3>Cantidad de Clicks : {counter}</h3>
    <button onClick={handleSum} style={{margin: '5px'}}><GrAdd /></button>
    <button onClick={handleRest}><IoMdRemoveCircleOutline /> </button>
    </>
  )
}

export default Counter