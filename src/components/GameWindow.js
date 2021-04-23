import React, { useState } from 'react'
import Button from './Button'
import './GameWindow.css'
import Timer from './Timer'


const GameWindow = (props) => {
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [displayLyrics, setDisplayLyrics] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);


    const stopTimer = () => {
        setIsTimerActive(false)
    }

    const startTimer = () => {
        setIsTimerActive(true)
    }

    const startGame = () => {
        setDisplayLyrics(true);
        startTimer();
        setGameStarted(true);
    }

    return (
        <>
            <div className="gameWindow-container">
                <div className="gameWindow-lyrics-container">
                    {displayLyrics ? <span className="lyrics">{props.lyrics}</span> : null}
                </div>
                <div className="gameWindow-input-timer-container">
                    <div className="gameWindow-input-container">
                        <input placeholder="What's the song title?"></input>
                        <input placeholder="Who's the singer?"></input>
                    </div>
                    <div className="gameWindow-timer-container">
                        <Timer isActive={isTimerActive} />
                    </div>
                </div>
                <div className="gameWindow-button-container">
                    {
                        !gameStarted ?
                        <>
                        <Button onClick={startGame} buttonStyle="btn--outline" buttonSize="btn--medium">{`CLICK WHEN READY: ${(props.player).toUpperCase()}`}</Button>
                        </> 
                            :
                            <>
                                <Button onClick={stopTimer} buttonStyle="btn--outline" buttonSize="btn--medium">GUESS!</Button>
                                <div className="divider" />
                                <Button buttonStyle="btn--outline" buttonSize="btn--medium">PASS! </Button>
                            </>
                    }

                </div>
            </div>
        </>
    )

}


export default GameWindow;