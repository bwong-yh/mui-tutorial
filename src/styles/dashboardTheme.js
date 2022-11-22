import { createTheme } from '@mui/material';

const dashboardTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2.5,
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransformation: 'capitalize',
        },
        contained: {
          backgroundColor: '#009be5',
          '&:hover': {
            backgroundColor: '#006db3',
          },
        },
        outlined: {
          color: '#fff',
          borderColor: '#fff',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});

export default dashboardTheme;
