import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom';
// mui
import { TextField, Switch, Button } from '@mui/material';
// icon
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// component
import DateEnd from './DateEnd';
import { ModalOpenContext } from '../../context/ModalOpenContextProvider'
// helper
import { createTodoOnLocal } from '../../helper/createOnLocal';
import { setLocalStorage } from '../../helper/setLocalStorage';
import { getDataLocal } from '../../helper/getDataLocal';
import { sortBy } from '../../helper/sortBy';
// context
import { GetDataContext } from '../../context/GetDataContextProvider';


// setting label
const label = { inputProps: { 'aria-label': 'Switch demo' } };


const colors = ['#764F82','#A22C28', '#1E7C61', '#607440', '#175A8B', '#635147']


function Modal() {
  const { state, setState } = useContext(ModalOpenContext);
  const {  setMainData } = useContext(GetDataContext);
  const [values, setValues] = useState(state.info);

  const changeHandler = (event, name) => {
    if (name === 'check') {
      setValues(prev => ({ ...prev, [name]: event.target.checked }));
    } else if (name === 'date') {
      setValues(prev => ({ ...prev, dateShow: `${event.month.number}/${event.day}/${event.year} ${event.hour}:${event.minute}:${event.second}`, dateEnd: event.unix * 1000 }));
    } else {
      if (name === 'title') {
        if (event.target.value.length < 20) {
          setValues(prev => ({ ...prev, title: event.target.value }));
        }
      } else {
        if (event.target.value.length < 350) {
          setValues(prev => ({ ...prev, body: event.target.value }));
        }
      }
    }

  }

  const colorClickHandler = (color) => {
    setValues(prev => ({ ...prev, bgColor: color }));
  }

  const closeBtn = () => {
    setState(prev => ({ ...prev, open: false }))
  }


  const createTodoHandler = (update) => {
    if (update) {

      const allDataToSave = getDataLocal('sortDataLocal').map(item => {
        if (item.id === values.id) {
          item = values;
        }
        return item

      });

      setLocalStorage(allDataToSave, 'sortDataLocal')


      const array = sortBy(getDataLocal('sortDataLocal'), localStorage.getItem('select'));

      setLocalStorage(array, 'mainData')

      setMainData(getDataLocal('mainData'));

    } else {
      createTodoOnLocal(values, setMainData)
    }
    setState(prev => ({ ...prev, open: false }))
  }

  return ReactDOM.createPortal(


    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#99999949] w-full h-full z-40 '>
      <div className='w-full sm:w-[25rem] md:w-[35rem] p-6 mx-auto sm:rounded-lg text-white bg-[#1e2533] flex flex-col gap-10 '>


        {/* header */}
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-bold'>
            {
              state.update ? 'ویرایش' : 'جدید'
            }
          </p>

          <CloseRoundedIcon className='cursor-pointer' onClick={closeBtn} />
        </div>


        {/* text */}
        <div className='flex flex-col gap-10'>
          <TextField id="outlined-basic"
            label="عنوان"
            fullWidth
            variant="outlined"
            value={values.title}
            onChange={(event) => changeHandler(event, 'title')} />

          <TextField
            id="outlined-multiline-flexible"
            label="توضیحات"
            multiline
            rows={8}
            value={values.body}
            onChange={(event) => changeHandler(event, 'body')}
          />

        </div>


        {/*  choose color */}
        <div className='flex flex-col gap-4'>
          <p>انتحاب رنگ</p>

          <div className='flex gap-6'>
            {
              colors.map((color, index) =>

                <div key={index} className={`w-6 h-6 rounded-full  cursor-pointer transition duration-200 ${values.bgColor === color ? 'scale-125 border-2 border-white opacity-1' : 'opacity-50'}`} onClick={() => colorClickHandler(color)}
                  style={{ background: `${color}` }}
                >

                </div>
              )
            }


          </div>

        </div>


        {/* time end */}
        <div className='flex flex-col gap-6'>

          <div className='flex items-center'>
            <span>زمان پایان</span>
            <Switch
              {...label}
              color="secondary"
              checked={values.check}
              onChange={(event) => changeHandler(event, 'check')}
            />
          </div>

          <div className={`${values.check ? 'block' : 'hidden'} mx-auto text-black`}>
            <DateEnd data={{ values, changeHandler }} />
          </div>

        </div>

        {/* create btn */}
        <div className='mx-auto'>
          <Button variant="contained" onClick={() => createTodoHandler(state.update)}>
            {
              state.update ? 'اعمال تغییر' : 'ایجاد'
            }
          </Button>
        </div>

      </div>


    </div >


    , document.getElementById('modal')
  );
}

export default Modal