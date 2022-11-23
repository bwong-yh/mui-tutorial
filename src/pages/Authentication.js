import { useState } from 'react';
//mui
import { Box, Grid, IconButton, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
// components
import MyButton from '../components/Button/MyButton';
import MyCard from '../components/Card/MyCard';
import Searchbar from '../components/Searchbar/Searchbar';
import GridWrapper from '../GridWrapper/GridWrapper';
import MyModal from '../components/Modal/MyModal';

const Authentication = () => {
  const [open, setOpen] = useState(false);

  const cardHeaderStyles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '20px',
      paddingRight: '20px',
      height: '65px',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    addUserButton: {
      fontSize: '1.05rem',
    },
  };

  const getSearchbar = () => {
    const handleChange = value => console.log(value);
    const addUser = () => {
      setOpen(true);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <Searchbar
          placeholder='Search by Email, Phone Number, or UUID'
          onChange={e => handleChange(e.target.value)}
          searchBarWidth='720px'
        />
        <MyButton
          variant='contained'
          onClick={addUser}
          size='large'
          sx={cardHeaderStyles.addUserButton}
        >
          Add User
        </MyButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
      </Box>
    );
  };

  const getContent = () => (
    <Typography
      align='center'
      sx={{
        margin: '40px 16px',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: '1.3rem',
      }}
    >
      No users for this project yet
    </Typography>
  );

  return (
    <GridWrapper>
      <MyCard header={getSearchbar()} content={getContent()} />
      <MyModal open={open} onClose={() => setOpen(false)} />
    </GridWrapper>
  );
};

export default Authentication;
