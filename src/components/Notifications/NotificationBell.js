import { Badge, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationBell = ({ iconColor, badgeContent }) => {
  const notificationMessage = badgeContent
    ? `${badgeContent} new notifications`
    : 'no new notifications';

  return (
    <Tooltip title={notificationMessage}>
      <IconButton color={iconColor}>
        <Badge badgeContent={badgeContent} color='primary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default NotificationBell;
