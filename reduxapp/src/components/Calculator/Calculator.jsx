import React, { useState } from 'react'
import {CgMathPlus, CgMathMinus,CgMathDivide} from '../../../node_modules/react-icons/cg'
import {TbLetterX} from '../../../node_modules/react-icons/tb'

export const Calculator = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const handleNum1Change = (e) => {
        setNum1(Number(e.target.value))
    }
    const handleNum2Change = (e) => {
        setNum2(Number(e.target.value))
    }

    const handleAdd = () => {
        setResult(num1 + num2)
    }
    const handleSubstract = () => {
        setResult(num1 - num2)
    }
    const handleMultiply = () => {
        setResult(num1 * num2)
    }
    const handleDivide = () => {
        if (num2 != 0){
            setResult(num1 / num2)
        }else{
            alert('No se puede dividir por cero(0)')
        }
            
    }


    return (
        <div className='container mt-5'>
            <h2>Calculadora</h2>
            <div className="row">
                <div className="col">
                    <input type="number" className='form-control' value={num1} onChange={handleNum1Change} />
                </div>
                <div className="col">
                    <input type="number" className='form-control' value={num2} onChange={handleNum2Change} />
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <button onClick={handleAdd} className='btn btn-dark'><CgMathPlus/></button>
                    </div>
                    <div className="col">
                        <button onClick={handleSubstract} className='btn btn-dark'><CgMathMinus/></button>
                    </div>
                    <div className="col">
                        <button onClick={handleMultiply} className='btn btn-dark'><TbLetterX/></button>
                    </div>
                    <div className="col">
                        <button onClick={handleDivide} className='btn btn-dark'><CgMathDivide/></button>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h4>Resultado : {result}</h4>
                </div>
            </div>


        </div>
    )
}
