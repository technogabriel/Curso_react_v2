import React, { useEffect, useState } from 'react'

export const Seconds = () => {

    const [time, setTime] = useState(0)
    const [startTimer, setStartTimer] = useState(false)
    const [timerId, setTimerId] = useState(0)

    useEffect(() => {
        let intervalId = null
        if (startTimer) {
            intervalId = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
            setTimerId(intervalId)
        } else {
            clearInterval(timerId)
        }
    }, [startTimer]);

    const reset = () => {
        setTime(0)
    }

    return (
        <>
        <h2>Segundos : {time}</h2>
        <div>

        <button onClick={()=> setStartTimer(true)} className='btn btn-success m-2' >Play</button>
        <button onClick={()=> setStartTimer(false)} className='btn btn-warning m-2'>Stop</button>
        <button onClick={reset} className='btn btn-danger m-2'>Reset</button>
        </div>
        </>
    )
}
