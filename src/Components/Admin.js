import React from 'react'
import AdminNav from './AdminNav';

import { Box } from '@mui/material';
import AdminCard from './AdminCard';


const Admin = () => {
  return (
    <div>
        <AdminNav></AdminNav>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
        <Box height={100}>
        <AdminCard></AdminCard>
        </Box>
        </Box>
        
        </div>
    
  

   
  )
}

export default Admin
