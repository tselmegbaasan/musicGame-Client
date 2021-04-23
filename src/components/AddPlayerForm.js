import React, { useState, useContext } from 'react';
import Button from './Button';
import Table from './Table';
import AppContext from '../store/AppContext'
import './AddPlayerForm.css'


const AddPlayerForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [input, setInput] = useState("");

    const addPlayer = () => {
        dispatch({ type: 'ADD_PLAYER', payload: { username: input, score: 0 } })
        setInput("")
    }

    const deletePlayer = () => {
        state.selectedPlayers.map(player => {
            dispatch({ type: 'DELETE_PLAYER', payload: { username: player } })
            dispatch({ type: 'UNSELECT_PLAYER', payload: { username: player } })
        })
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <div className="addPlayerForm-container">
            <div className="playersList-wrapper">
                <Table
                    name="players"
                    columns={['USERNAME', 'SCORE']}
                    content={state.players}
                />
            </div>
            <div className="addPlayerForm-input-section">
                <Button buttonSize="btn--medium" buttonStyle="btn--outline" disabled={state.selectedPlayers.length < 1} onClick={deletePlayer}>-</Button>
                <input className="newPlayer-input" onChange={handleChange} placeholder="Enter username" value={input} />
                <Button buttonSize="btn--medium" buttonStyle="btn--outline" disabled={input === ""} onClick={addPlayer}>+</Button>
            </div>
        </div>
    )
}

export default AddPlayerForm;