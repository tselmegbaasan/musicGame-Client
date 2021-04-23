import React, { useContext, useState } from 'react'
import Button from './Button'
import './NewGame.css'
import AddPlayerForm from './AddPlayerForm';
import { Link } from 'react-router-dom';
import CategoryTable from './CategoryTable';
import AppContext from '../store/AppContext';

const NewGameForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [page, setPage] = useState(0);

    const chooseMode = (value) => {
        dispatch({ type: 'SET_MODE', payload: { gameMode: value } })
    }

    const nextPage = () => {
        let newPage = page + 1;
        setPage(newPage)
    }

    const prevPage = () => {
        let newPage = page - 1;
        setPage(newPage)
    }

    return (
        <div className="newGameForm-container">
            <h1>START A NEW GAME</h1>
            {
                page === 0 ? (
                    <div className="newGameForm-wrapper">
                        <div className="newGameForm-element">
                            <h3>1. SELECT A GAME MODE</h3>
                            <div className="gameMode-btns">
                                <Button onClick={() => chooseMode('lyricsGame')} buttonSize="btn--medium" buttonStyle={state.gameMode === 'lyricsGame' ? "btn--active btn--outline" : "btn--outline"}>GUESS THE LYRICS</Button>
                                <div className="divider-15px" />
                                <Button onClick={() => chooseMode('albumGame')} buttonSize="btn--medium" buttonStyle={state.gameMode === 'albumGame' ? "btn--active btn--outline" : "btn--primary btn--outline"}>GUESS THE ALBUM</Button>
                            </div>
                        </div>
                        {state.gameMode === '' ?
                            null :
                            <div className="newGameForm-element">
                                <h3>2. ADD PLAYERS</h3>
                                <p style={{ 'opacity': '50%', 'alignSelf': 'center' }}>Add one or more players</p>
                                <div className="addPlayersForm">
                                    <AddPlayerForm />
                                </div>
                            </div>}
                        {state.players.length < 1 ?
                            null :
                            <div className="single-btn">
                                <Button buttonStyle="btn--outline" buttonSize="btn--medium" onClick={nextPage}>
                                    NEXT <i class="fas fa-angle-double-right"></i>
                                </Button>
                            </div>}
                    </div>

                )
                    :
                    (
                        <div className="newGameForm-wrapper">
                            <div className="newGameForm-element">
                                <h3>SELECTED GAME:</h3>
                                <h2>{state.gameMode === "lyricsGame" ? "GUESS THE LYRICS" : "GUESS THE ALBUM"}</h2>
                            </div>
                            <div className="newGameForm-element">
                                <h3>3. CHOOSE CATEGORIES</h3>
                                <p style={{ 'opacity': '50%' }}>Choose one or more categories from the list below. The game will include {state.gameMode === "lyricsGame" ? "lyrics" : "albums"} from the selected categories.</p>
                            </div>
                            <div className="newGameForm-element">
                                <CategoryTable />
                            </div>
                            <div className="newGameForm-element">
                                <div className="bottom-btns">
                                    <Button buttonStyle="btn--outline" buttonSize="btn--medium" onClick={prevPage}>
                                        <i class="fas fa-angle-double-left"></i>
                                    BACK
                                    </Button>
                                    <div className="divider-30px" />

                                    <Button link={`/${state.gameMode}`} disabled={state.selectedCategories.length < 1} buttonStyle="btn--outline" buttonSize="btn--medium" >

                                        NEXT <i class="fas fa-angle-double-right"></i>

                                    </Button>

                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default NewGameForm;