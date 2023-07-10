import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// context
import ModalOpenContextProvider from "./context/ModalOpenContextProvider";
import GetDataContextProvider from './context/GetDataContextProvider';
import SortContextProvider from './context/SortContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <GetDataContextProvider>
        <ModalOpenContextProvider>
            <SortContextProvider>

                <App />
            </SortContextProvider>

        </ModalOpenContextProvider>
    </GetDataContextProvider>
)


