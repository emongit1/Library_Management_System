
import React from 'react';
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import Frombox from './From';



const Settings = () => {
  return (
    <div>
      <Sidenav />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '64px' }}>
        <Box height={100}>
          <div>
           <Frombox />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Settings;

