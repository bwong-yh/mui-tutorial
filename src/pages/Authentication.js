// mui
import { Grid } from '@mui/material';
// components
import MyButton from '../components/Button/MyButton';

const Authentication = () => {
  // const buttonStyles = {
  //   borderRadius: 2.5,
  //   fontSize: '0.875rem',
  //   fontWeight: 600,
  //   textTransformation: 'capitalize',
  //   '&.MuiButton-contained': {
  //     backgroundColor: '#009be5',
  //     '&:hover': {
  //       backgroundColor: '#006db3',
  //     },
  //   },
  //   '&.MuiButton-outlined': {
  //     color: '#fff',
  //     borderColor: '#fff',
  //     '&:hover': {
  //       backgroundColor: 'transparent',
  //     },
  //   },
  // };

  return (
    <Grid>
      <h1>Authentication</h1>
      <MyButton size='large' variant='contained'>
        All User
      </MyButton>
      <MyButton>Web Setup</MyButton>
    </Grid>
  );
};

export default Authentication;
