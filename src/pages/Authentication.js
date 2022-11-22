// mui
import { Grid } from '@mui/material';

// components
import NotificationBell from '../components/Notifications/NotificationBell';

const Authentication = () => {
  return (
    <Grid>
      <h1>Authentication</h1>
      <NotificationBell badgeContent={2} />
    </Grid>
  );
};

export default Authentication;
