// mui
import { Avatar } from '@mui/material';
import MyButton from '../Button/MyButton';

// components
import NotificationBell from '../Notifications/NotificationBell';

const Header = () => {
  return (
    <div>
      <MyButton variant='default'>Go to Docs</MyButton>
      <NotificationBell badgeContent={2} />
      <Avatar src='https://mui.com/static/images/avatar/1.jpg' />
    </div>
  );
};

export default Header;
