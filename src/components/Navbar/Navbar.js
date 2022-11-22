import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import navbarItems from './_navbarItems';
import navbarStyles from './_navbarStyles';

const Navbar = () => {
  return (
    <Drawer sx={navbarStyles.drawer} variant='permanent' anchor='left'>
      <Toolbar />
      <Divider />
      <List>
        {navbarItems.map(item => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
              <ListItemText sx={navbarStyles.text} primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Navbar;
