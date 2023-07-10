import React, { useContext } from 'react'
// mui
import Button from '@mui/material/Button'
// icon
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
// component
import SelectMenu from './SelectMenu';
// context 
import { ModalOpenContext, initialState } from '../../context/ModalOpenContextProvider';
import { GetDataContext } from '../../context/GetDataContextProvider'
// helper
import { alertBox } from '../../helper/alertBox';

function Header() {
  const { setState } = useContext(ModalOpenContext);
  const { setMainData } = useContext(GetDataContext);


  const newTodoAddBtn = () => {
    setState(
      {
        open: true,
        info: initialState.info,
        update: false
      }
    )
  }

  const deleteAllHandler = () => {
    alertBox('allItem', setMainData, null);

  }
  return (
    <div className='flex flex-col gap-5 my-10 '>

      <div className='flex flex-col justify-between items-center gap-8'>

        <h1 className='text-3xl font-bold '>لیست انجام کار ها</h1>

        <Button variant="contained" color="success" onClick={newTodoAddBtn} sx={[
          {
            '&:hover': {
              color: '#232a3b',
            }
          },
          {
            color: 'white',
          }
        ]}>
          <AddIcon />
        </Button>

      </div>

      <div className='flex justify-between items-center'>

        <SelectMenu />

        <Button variant="contained" sx={[
          {
            '&:hover': {
              color: '#232a3b',
              background: '#a22c28'
            }
          },
          {
            background: '#a22c28',
            color: 'white',
          }

        ]}

          onClick={deleteAllHandler} >
          حذف همه
          <DeleteIcon />
        </Button>

      </div>

    </div>
  )
}

export default Header