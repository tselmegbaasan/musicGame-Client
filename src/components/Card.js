import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../store/AppContext'
import './Cards.css'

const Card = (props) => {
    const {state, dispatch} = useContext(AppContext)

    const setMode = (mode) => {
        dispatch({type: 'SET_MODE', payload: {gameMode: mode}})
    }

    return (
        <>
            <li onClick={() => setMode(props.name)} className="card-list-item">
                <Link to={props.link} className="card-link">
                    <figure className="card-img-wrapper">
                        <img src={props.imgsrc} alt={props.label} className="card-img" />
                    </figure>
                    <div className="card-info">
                        <h5 className="card-info-text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default Card;