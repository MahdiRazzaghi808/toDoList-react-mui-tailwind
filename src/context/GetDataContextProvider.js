import React, { useState, createContext, useEffect } from 'react'

export const GetDataContext = createContext()

function GetDataContextProvider({ children }) {
    const [mainData, setMainData] = useState([]);

    // mainData && mainData.forEach((value, index) => {
    //     value['id'] = index
    // });




    useEffect(() => {

        if (localStorage.getItem('sortDataLocal')) {
            setMainData(JSON.parse(localStorage.getItem('sortDataLocal')).reverse())
        }

        localStorage.setItem('select', 'all')

    }, []);




    return (
        <GetDataContext.Provider value={{ mainData, setMainData }}>
            {children}
        </GetDataContext.Provider>
    )
}

export default GetDataContextProvider