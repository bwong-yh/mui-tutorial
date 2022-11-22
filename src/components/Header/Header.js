// mui
import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

// components
import MyButton from '../Button/MyButton';
import NotificationBell from '../Notifications/NotificationBell';

const Header = ({ title }) => {
  const headerStyle = {
    wrapper: {
      backgroundColor: '#009be5',
      display: 'flex',
      flexDirection: 'column',
      padding: '1.25rem',
      width: '100%',
    },
    topRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
      alignItems: 'center',
      marginBottom: '20px',
      '*': {
        marginRight: '5px',
      },
    },
    middleRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
      marginLeft: '320px',
    },
    link: {
      fontWeight: 500,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover': {
        color: '#fff',
        cursor: 'pointer',
      },
    },
    webButton: {
      marginRight: '5px',
    },
  };

  return (
    <Box sx={headerStyle.wrapper}>
      <Box sx={headerStyle.topRow}>
        <Typography sx={headerStyle.link}>Go to Docs</Typography>
        <NotificationBell iconColor='white' />
        <Avatar src='https://mui.com/static/images/avatar/1.jpg' />
      </Box>

      {/* middle row */}
      <Box sx={headerStyle.middleRow}>
        <Typography variant='h1'>{title}</Typography>
        <Box>
          <MyButton variant='outlined' sx={headerStyle.webButton}>
            Web Setup
          </MyButton>
          <Tooltip title='help'>
            <IconButton>
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
