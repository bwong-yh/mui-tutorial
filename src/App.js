import { Outlet } from 'react-router-dom';

// mui
import { Grid } from '@mui/material';

// components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Grid container>
      <Navbar />

      <Outlet />
    </Grid>
  );
}

export default App;
