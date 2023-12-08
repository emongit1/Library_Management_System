import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { IoMdSettings } from 'react-icons/io';
import { FaHistory } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import records from './data.json';

const drawerWidth = 240;

const SearchBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
  },
  width: '100%',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const data = records;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    // console.log(e.target.value)
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           
          </Typography>
          {location.pathname === '/home' && (
            <SearchBar>
              <SearchIcon />
              <SearchInput
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </SearchBar>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}></IconButton>
        </DrawerHeader>
        <Divider />
     

<List>
  {['Admin'].map((text, index) => (
    <ListItem key={text} disablePadding onClick={() => navigate('/admin')} sx={{ backgroundColor: location.pathname === '/home' ? theme.palette.primary.main : 'transparent', '&:hover': { backgroundColor: theme.palette.primary.light } }}>
      <IoMdHome style={{ fontSize: 25, color: location.pathname === '/admin' ? theme.palette.background.paper : theme.palette.text.primary }} />
      <ListItemButton>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>
    </ListItem>
  ))}
</List>
<Divider />


<Divider />


<List>
  {['LogOut'].map((text, index) => (
    <ListItem key={text} disablePadding onClick={() => navigate('/')} sx={{ backgroundColor: location.pathname === '/' ? theme.palette.primary.main : 'transparent', '&:hover': { backgroundColor: 'red' } }}>
      <FiLogOut style={{ fontSize: 25, color: location.pathname === '/' ? theme.palette.background.paper : theme.palette.text.primary }} />
      <ListItemButton>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="LogOut" />
      </ListItemButton>
    </ListItem>
  ))}
</List>



      </Drawer>
    </Box>
  );
}












