import React, { useState, useContext } from 'react'
// mui
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import ItemMenu from './ItemMenu';
// 
import { GetDataContext } from '../../context/GetDataContextProvider';
// helper
import { setLocalStorage } from '../../helper/setLocalStorage';
import { getDataLocal } from '../../helper/getDataLocal';
import { dateEndShow } from '../../helper/dateEndShow'
import { sortBy } from '../../helper/sortBy'
import { statusCheck } from '../../helper/statusCheck';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function MainItem({ data }) {
  const { id, title, body, dateEnd, bgColor, isComplete } = data;
  const [isCompleteState, setIsCompleteState] = useState(isComplete);

  const { mainData, setMainData } = useContext(GetDataContext);
  const isCompleteHandler = (id) => {

    setIsCompleteState(prev => !prev)


    const allDataToSave = getDataLocal('sortDataLocal').map(item => {
      if (item.id === id) {
        item.isComplete = !isComplete;
      }
      return item

    });

    setLocalStorage(allDataToSave, 'sortDataLocal')


    const array = sortBy(getDataLocal('sortDataLocal'), localStorage.getItem('select'));

    setLocalStorage(array, 'mainData')
    setMainData(getDataLocal('mainData'));





  }



  return (
    <div className={`rounded-md shadow-lg shadow-neutral-600 relative w-full h-[25rem] md:h-[23rem] ${statusCheck(dateEnd, isComplete)} ${isComplete ? 'opacity-40' : 'opacity-100'} `}
      style={{ background: isComplete ? '#3D6F58' : `${bgColor}` }}

    >

      <div className='child'
        style={{ background: isComplete ? '#3D6F58' : `${bgColor}` }}

      >
        <div className='container flex justify-between items-center mb-4'>

          <p className='font-bold text-xl'>{title}</p>


          <Checkbox
            {...label}
            onChange={() => isCompleteHandler(id)}
            checked={isComplete}
          />

        </div>

        <p className='container h-72 md:h-64 text-justify break-all	overflow-hidden'>
          {body}
        </p>

        <Divider />

        <div className='container flex justify-between items-center py-2 '>
          <ItemMenu option={{ id, mainData, setMainData }} />

          <p className='text-sm'>{dateEndShow(isComplete, dateEnd ? dateEnd : '')}</p>
        </div>
      </div>
    </div >
  )
}

export default MainItem