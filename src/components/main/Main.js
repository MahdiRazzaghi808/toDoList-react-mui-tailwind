import React, { useContext } from 'react'
// components
import MainItem from './MainItem'
// context
import { GetDataContext } from '../../context/GetDataContextProvider'


function Main() {
  const { mainData } = useContext(GetDataContext)


  return (
    <div className=
      'w-full  bg-[#293145] rounded-lg shadow-2xl mb-6 p-3 md:p-6 lg:p-8  grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden relative'
      style={{ height: mainData.length ? '' : '60vh' }}
    >



      {
        mainData.length ? mainData.map((item, index) => <MainItem data={item} key={item.title + index} />)
          :
          <p className='text-yellow-500 text-xl absolute top-4 right-4 '	 	>موردی یافت نشد</p>
      }


    </div>
  )
}

export default Main