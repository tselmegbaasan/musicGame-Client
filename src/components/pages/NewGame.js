import React, { useContext } from 'react';
import '../../App.css'
import NewGameForm from '../NewGameForm';
import '../NewGame.css'
import AppContext from '../../store/AppContext';

const NewGame = () => {
    const {state} = useContext(AppContext)

    console.log(state);
    
    return (
        <div className="newGame">
            <div className="form">
                <NewGameForm />
            </div>
        </div>
    )
}


export default NewGame;