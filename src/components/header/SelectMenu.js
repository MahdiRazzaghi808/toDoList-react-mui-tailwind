import React, { useContext, useState } from 'react';
// mui
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
// context
import { GetDataContext } from '../../context/GetDataContextProvider';
// helper
import { sortBy } from '../../helper/sortBy';
import { getDataLocal } from '../../helper/getDataLocal';
import { setLocalStorage } from '../../helper/setLocalStorage';

const items = [
  { id: 1, title: 'همه', main: 'all' },
  { id: 2, title: 'زمان دار بیشترین', main: 'timeToUp' },
  { id: 3, title: 'زمان دار کمترین', main: 'timeToDown' },
  { id: 4, title: 'بدون زمان', main: 'noTime' },
  { id: 5, title: 'انجام شده', main: 'complete' },
  { id: 6, title: 'منقضی شده', main: 'expired' },
  { id: 7, title: 'کمتر از یک ساعت', main: 'oneH' },
]


function SelectMenu() {
  const [selected, setSelected] = useState('all');

  const { setMainData } = useContext(GetDataContext)

  const handleChange = (event) => {
    setSelected(event.target.value);


    const array = sortBy(getDataLocal('sortDataLocal'), event.target.value);
    setLocalStorage(array, 'mainData')
    setMainData(array)


  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">فیلتر</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="فیلتر"
          onChange={handleChange}
        >

          {
            items.map(item => <MenuItem key={item.id} value={item.main}>{item.title}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectMenu