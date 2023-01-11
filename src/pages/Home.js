import { useState } from 'react';
import '../App.css';

import MTODOList from "../components/MTODOList";
import TODOList from "../components/TODOList";

import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme  } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00363B'
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(',')
  }
});

function Home() {
  const [switchLabel, updateSwitchLabel] = useState('MUI');

  function onSwitch() {
    if (switchLabel === 'MUI') {
      updateSwitchLabel('Manual CSS');
      return;
    }
    
    updateSwitchLabel('MUI');
  }

  return (
    <div className="Home">
        <ThemeProvider theme={ theme }>
          { (switchLabel === 'Manual CSS' &&
            <MTODOList></MTODOList>) ||
            (switchLabel === 'MUI' &&
            <TODOList></TODOList>)
          }
          <Box p={4}>
            <FormControlLabel control={<Switch />} onChange={ onSwitch } label={ switchLabel } />
          </Box>
        </ThemeProvider>
    </div>
  );
}

export default Home;
