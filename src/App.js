// components
import React, { useContext } from 'react';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";
// mui setting
import MuiProvider from "./mui/MuiProvider";
// context
import { ModalOpenContext } from './context/ModalOpenContextProvider'



function App() {
  const { state } = useContext(ModalOpenContext);
  return (
    <MuiProvider>
      <div className="container text-white">
        <Header />
        <Main />
        {state.open && <Modal />}
      </div>
    </MuiProvider>
  );
}

export default App;
