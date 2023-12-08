
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import adduserimg from '../Assets/add-user.png';
import ManageUserimg from '../Assets/transaction.png';
import ManageBooks from '../Assets/add.png';
import addHistoryimg from '../Assets/history.png';
import addGaphimg from '../Assets/graph.png';
import { Link } from 'react-router-dom';

const AdminCard = () => {
  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const rowStyle = {
    display: 'flex',
    gap: '20px',
  };

  const cardStyle = {
    minWidth: 275,
    minHeight: 200,
    backgroundColor: 'rgba(12, 97, 128, 0.5)',
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(12, 97, 128, 0.8)',
    },
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
  };

  const typographyStyle = {
    '&:hover': {
      color: '#ffeb3b',
    },
  };

  return (
    <Box sx={cardContainerStyle}>
      <Box sx={rowStyle}>
      
      <Link to='/admin/adduser' style={linkStyle}>
        <Card sx={cardStyle}>
          
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={adduserimg} alt="Add User" style={{ width: '40px', marginBottom: '15px' }} />
            <Typography variant="h5" component="div" sx={typographyStyle}>
              Add user
            </Typography>
          </CardContent>
        </Card>
        </Link>

        <Link to='/admin/manageuser' style={linkStyle}>
        <Card sx={cardStyle}>
        
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={ManageUserimg} alt="ManageUserimg" style={{ width: '40px', marginBottom: '15px' }} />
            <Typography variant="h5" component="div" sx={typographyStyle}>
             Manage User
            </Typography>
          </CardContent>
        </Card>
        </Link>
      </Box>
     

      <Box sx={rowStyle}>
      <Link to='/admin/managebooks' style={linkStyle}>
        <Card sx={cardStyle}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={ManageBooks} alt="ManageBooks" style={{ width: '50px', marginBottom: '15px' }} />
            <Typography variant="h5" component="div" sx={typographyStyle}>
              Manage Books
            </Typography>
          </CardContent>
        </Card>
        </Link>

        <Link to='/admin/history' style={linkStyle}>
        <Card sx={cardStyle}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={addHistoryimg} alt="History" style={{ width: '40px', marginBottom: '15px' }} />
            <Typography variant="h5" component="div" sx={typographyStyle}>
              History
            </Typography>
          </CardContent>
        </Card>
        </Link>

        <Link to='/admin/reports' style={linkStyle}>
        <Card sx={cardStyle}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={addGaphimg} alt="Reports" style={{ width: '40px', marginBottom: '15px' }} />
            <Typography variant="h5" component="div" sx={typographyStyle}>
             Reports
            </Typography>
          </CardContent>
        </Card>
        </Link>
      </Box>
    </Box>
  );
};

export default AdminCard;
