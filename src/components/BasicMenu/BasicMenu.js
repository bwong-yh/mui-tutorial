import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BasicMenu = ({ anchorEl, handleClose, open, menuItems }) => {
  return (
    <div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map(item => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default BasicMenu;
