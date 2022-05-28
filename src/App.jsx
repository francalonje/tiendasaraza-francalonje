import React from 'react'
import Typography from '@mui/material/Typography'
import NavBar from './Components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const theme = createTheme({
  
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
  },
});


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="body1" color="initial">
          <NavBar></NavBar>
          <Typography variant="h1" color="initial">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur commodi ullam ipsam iusto iure quaerat hic itaque minus cumque quibusdam pariatur quasi maiores, placeat natus doloremque. Nobis sint iure beatae.
          </Typography>

         </Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
