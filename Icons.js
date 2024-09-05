import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import { IconButton } from '@mui/material';

function App() {
  return (
    <div style={{justifyContent:'center',textAlign:'center'}}>
      <IconButton>
        <HomeIcon style={{ fontSize: 40, color: 'blue', }} />
      </IconButton>
      <IconButton>
        < AutoAwesomeMotionIcon style={{ fontSize: 40, color: 'blue' }} />
      </IconButton>
      <IconButton>
        <BrowserUpdatedIcon style={{ fontSize: 40, color: 'blue' }} />
      </IconButton>
    </div>
  );
}

export default App;
