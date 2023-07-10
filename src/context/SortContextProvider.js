import React, { useState, createContext, useEffect } from 'react'



export const SortContext = createContext()

function SortContextProvider({ children }) {
    const [sortData, setSortData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('data')) {
            setSortData(JSON.parse(localStorage.getItem('data')))
        }
    }, [])







    return (
        <SortContext.Provider value={{ sortData, setSortData }}>
            {children}
        </SortContext.Provider>
    )
}

export default SortContextProvider