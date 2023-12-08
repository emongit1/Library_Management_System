
// Home.js

import React from 'react';
import Sidenav from './Sidenav';
import MCard from './MCard';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <Sidenav />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
        <Box height={100}>
          <MCard description={state ? state.description : null} price={state ? state.price : null} rating={state ? state.rating : null}></MCard>
        </Box>
      </Box>
    </div>
  );
}
