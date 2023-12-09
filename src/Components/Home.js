
// Home.js

import React from 'react';
import Sidenav from './Sidenav';
import MCard from './MCard';
import { Box } from '@mui/material';


export default function Home() {

  return (
    <div>
      <Sidenav />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
        <Box height={100}>
          <MCard ></MCard>
        </Box>
      </Box>
    </div>
  );
}
