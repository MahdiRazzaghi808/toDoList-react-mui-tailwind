import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// icon 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
// helper
import { findTodo } from '../../helper/findTodo';
import { alertBox } from '../../helper/alertBox';
// context
import { ModalOpenContext } from '../../context/ModalOpenContextProvider'






function ItemMenu({ option }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { setState } = useContext(ModalOpenContext);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const editHandler = (id) => {
    setState(
      {
        open: true,
        info: findTodo(id),
        update: true
      }
    );
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    setAnchorEl(null);


  }

  const deleteHandler = (id) => {
    setAnchorEl(null);
    alertBox('oneItem', option.setMainData, id);
  }


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => editHandler(option.id)} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          ویرایش
          <EditRoundedIcon />
        </MenuItem>

        <MenuItem onClick={() => deleteHandler(option.id)} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          حذف
          <DeleteRoundedIcon />

        </MenuItem>

      </Menu>
    </div>
  );
}


export default ItemMenu