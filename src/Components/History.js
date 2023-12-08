import React from 'react'
import Sidenav from './Sidenav';
import { Box } from '@mui/material';

const History = (props) => {
  return (
    <div>
        <Sidenav />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '64px' }}>
            <Box>
                <h1>{props.description}</h1>
                <h2>{props.price}</h2>
            </Box>
        </Box>
       
    </div>
  )
}

export default History;
