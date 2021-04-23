import React, { useContext } from 'react'
import AppContext from '../store/AppContext'
import './Table.css'

const Table = (props) => {
    const { state, dispatch } = useContext(AppContext)

    const onSelect = (value) => {
        if (props.name === 'categories') {
            if (state.selectedCategories.includes(value)) {
                dispatch({ type: 'UNSELECT', payload: { category: value } })
            } else {
                dispatch({ type: 'SELECT', payload: { category: value } })
            }
        }

        if (props.name === 'players') {
            if (state.selectedPlayers.includes(value)) {
                dispatch({ type: 'UNSELECT_PLAYER', payload: { username: value } })
            } else {
                dispatch({ type: 'SELECT_PLAYER', payload: { username: value } })
            }
        }
    }

    return (
        <table className="styled-table">
            <thead>
                <tr>
                    {props.columns.map(col => {
                        return (
                            <th>{col}</th>
                        )
                    })}
                </tr>
            </thead>

            <tbody>
                {props.content.map(row => {
                    return (
                        <tr onClick={() => onSelect(row[0])} className={
                            props.name === "categories" ?
                                state.selectedCategories.includes(row[0]) ? "active-row" : "row"
                                :
                                state.selectedPlayers.includes(row[0]) ? "active-row" : "row"
                        }>
                            {row.map(data => {
                                return (
                                    <td>{data}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export default Table;