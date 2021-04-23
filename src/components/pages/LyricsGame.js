import React, { useContext } from 'react'
import AppContext from '../../store/AppContext'
import Button from '../Button'
import GameWindow from '../GameWindow'
import Table from '../Table'
import './LyricsGame.css'

const LyricsGame = () => {
    const { state, dispatch } = useContext(AppContext)

    return (
        <div className="lyricsGame">
            <div className="lyricsGame-container">
                <div className="lyricsGame-title">
                    <h1>GUESS THE LYRICS</h1>
                </div>

                <div className="lyricsGame-content-wrapper">
                    <div style={{'width': '30%'}} className="lyricsGame-content-item">
                        <Table
                            name="players"
                            columns={['USERNAME', 'SCORE']}
                            content={state.players}
                        />
                    </div>
                    <div style={{'width': '60%'}} className="lyricsGame-content-item">
                        <GameWindow lyrics="Hello, this is lyrics bla bla bla" player="Tselmeg"/>
                    </div>
                </div>
                <div className="lyricsGame-buttons">
                    <Button link="/newGame" buttonStyle="btn--outline" buttonSize="btn--large">
                        <i class="fas fa-angle-double-left"></i>
                    BACK
                    </Button>
                    <Button buttonSize="btn--large" buttonStyle="btn--outline">

                        FINISH GAME
                                    <i class="fas fa-angle-double-right"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LyricsGame