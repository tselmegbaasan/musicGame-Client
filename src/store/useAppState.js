import { useReducer } from 'react'

const playersReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PLAYER': {
            let newPlayer = [action.payload.username, action.payload.score]
            return [
                ...state,
                newPlayer
            ]
        }
        case 'DELETE_PLAYER': {
            let userToDelete = action.payload.username
            let newState = state
            newState.splice(newState.indexOf(userToDelete), 1)
            return newState
        }
        case 'ADD_SCORE': {
            let scoreToAdd = action.payload.score
            let userToEdit = action.payload.username
            let currentState = state;

            const findPlayer = (username) => {
                for (let i = 0; i < currentState.length; i++) {
                    let player = currentState[i];
                    if (player[0] === username) {
                        return { Player: player, Index: i }
                    }
                }
            }

            let player = findPlayer(userToEdit).Player
            let index = findPlayer(userToEdit).Index
            player[1] = player[1] + scoreToAdd;
            currentState.splice(index, 1, player)

            return currentState
        }
        default: return state
    }
}

const gameModeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MODE': {
            let gameMode = action.payload.gameMode
            return gameMode
        }
        default: return state
    }
}

const categoriesReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT': {
            let category = action.payload.category
            return [
                ...state,
                category
            ]
        }
        case 'UNSELECT': {
            let category = action.payload.category;
            let newState = state;
            newState.splice(newState.indexOf(category), 1)
            return newState;
        }
        default: return state
    }
}

const selectedPlayersReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_PLAYER': {
            let player = action.payload.username 
            return [
                ...state, 
                player
            ]
        }
        case 'UNSELECT_PLAYER': {
            let player = action.payload.username ;
            let newState = state; 
            newState.splice(newState.indexOf(player), 1)
            return newState
        }
        default: return state
    }
}

const mainReducer = ({ players, gameMode, selectedCategories, selectedPlayers }, action) => ({
    players: playersReducer(players, action),
    gameMode: gameModeReducer(gameMode, action),
    selectedCategories: categoriesReducer(selectedCategories, action),
    selectedPlayers: selectedPlayersReducer(selectedPlayers, action)
})

let initialState = {
    players: [],
    gameMode: '',
    selectedCategories: [],
    selectedPlayers: []
}

const useAppState = () => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return { state, dispatch }
}

export default useAppState;