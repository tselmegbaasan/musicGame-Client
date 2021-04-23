import React from 'react'
import useAppState from './useAppState'
import AppContext from './AppContext'


const AppStateProvider = ({children}) => {
    return <AppContext.Provider value={useAppState()}>{children}</AppContext.Provider>
}

export default AppStateProvider;