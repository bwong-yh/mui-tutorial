// mui
import { Container, Grid } from '@mui/material';
// components
import MyButton from '../components/Button/MyButton';

const Authentication = () => {
  const buttonStyles = {
    backgroundColor: 'red',
    fontSize: 20,
    fontWeight: 700,
    '&:hover': {
      backgroundColor: 'yellow',
    },
  };

  return (
    <Grid Item>
      <h1>Authentication</h1>
      <MyButton size='large' variant='contained' sx={buttonStyles}>
        Text
      </MyButton>
    </Grid>
  );
};

export default Authentication;
