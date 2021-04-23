import React, { useEffect, useState } from 'react'
import'./Timer.css'


const Timer = (props) => {
    const [seconds, setSeconds] = useState('00');
    const [counter, setCounter] = useState(59);
    const [warning, setWarning] = useState(false);
    const [timeout, setTimeout] = useState(false);

    useEffect(() => {
        let intervalID;

        if (props.isActive && !timeout) {
            intervalID = setInterval(() => {
                setCounter(counter => counter - 1);
                
                let secondsString = counter < 10 ? '0' + counter.toString() : counter.toString()
                setSeconds(secondsString) 
                
                setWarning(counter <= 10)
                setTimeout(counter < 1)
            }, 1000)  
        }
        return () => clearInterval(intervalID);
    }, [props.isActive, counter])

    return (
        <div className="container">
            {
                timeout ? <div className="timeout-text"> Your time is up! </div>
                
                : 

                <div className={warning ? "warning-time" : "time"}>
                <span className="minutes">{counter >= 59 ? '01' : '00'}</span>
                <span>:</span>
                <span className="seconds">{seconds}</span>
            </div>
            }
            
        </div>
    )
}

export default Timer