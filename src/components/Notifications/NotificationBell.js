import { useState } from 'react';
//mui
import { Badge, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
// components
import BasicMenu from '../BasicMenu/BasicMenu';

const notifications = [
  { id: 0, label: 'first notification' },
  { id: 1, label: 'second notification' },
];

const NotificationBell = ({ iconColor, badgeContent }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const notificationMessage = notifications.length
    ? `${notifications.length} new notifications`
    : 'no new notifications';

  return (
    <div>
      <Tooltip title={notificationMessage}>
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleClick : null}
        >
          <Badge badgeContent={notifications.length} color='primary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      {/* drop menu on click */}
      <BasicMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        menuItems={notifications}
      />
    </div>
  );
};

export default NotificationBell;
