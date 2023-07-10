import React, { useState, createContext } from 'react'

export const ModalOpenContext = createContext()

export const initialState = {
    open: false,
    info: { title: '', body: '', bgColor: '#764F82', check: false, dateShow: '', dateEnd: '', isComplete: false },
    update: false
}

function ModalOpenContextProvider({ children }) {
    const [state, setState] = useState(initialState);

    return (
        <ModalOpenContext.Provider value={{ state, setState }}>
            {children}
        </ModalOpenContext.Provider>
    )
}

export default ModalOpenContextProvider