import { Outlet, useLocation } from 'react-router-dom';

// mui
import { Grid } from '@mui/material';

// components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';

function App() {
  const route = useLocation().pathname;
  const [title, setTitle] = useState('Authentication');

  useEffect(() => {
    route === '/'
      ? setTitle('Authentication')
      : setTitle(
          route
            .slice(1)
            .split('-')
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(' ')
        );
  }, [route]);

  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;
