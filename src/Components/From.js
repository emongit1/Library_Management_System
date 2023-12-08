


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const SubmitButton = ({ onClick }) => (
  <Button
    variant="contained"
    color="primary"
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '5vh',
      width: '868px', // Corrected width value
      margin: 'auto',
      marginTop: '5px',
      textAlign: 'center',
    }}
    onClick={onClick}
  >
    Update
  </Button>
);

export default function Form() {
  const [fname, setFname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');
  const [dept, setDept] = useState('');
  
 
  
  const handelfirstnameinput = (event) => {
    setFname(event.target.value);
  };

  const handellastnameinput = (event) => {
    setLastname(event.target.value); // Corrected state to setLastname
  };
  const handelPhoneinput = (event) => {
    setPhone(event.target.value);
  };
  const handelEmailinput = (event) => {
    setEmail(event.target.value);
  };
  const handelIdinput = (event) => {
    setId(event.target.value);
  };
  const handelDeptinput = (event) => {
    setDept(event.target.value);
  };

 

 
  return (
    <div>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '75vh',
        width: '868px',
        margin: 'auto',
        marginTop: '50px',
      }}
    >
   
      <Box
        sx={{
          justifyContent: 'space-between', 
          alignItems: 'center',
          height: '30vh',
          margin: 'auto',
          marginTop: '50px',
        }}
      >
        <TextField
          id="First Name"
         
          label="First Name"
          placeholder="First Name"
          onChange={handelfirstnameinput}
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
        <TextField
          id="Email"
          label="Email"
          onChange={handelEmailinput}
          placeholder="email"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
        <TextField
          id="Student Id"
          label="Student Id"
          placeholder="Student Id"
          onChange={handelIdinput}
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
        <TextField
          id="Phone no"
          label="Phone no"
          onChange={handelPhoneinput}
          placeholder="Student Id"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
        <TextField
          id="Present Address"
          label="Present Address"
          placeholder="Present Address"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
        <TextField
          id="Parmanent Address"
          label="Parmanent Addressd"
          placeholder="Parmanent Address "
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
      </Box>

    
      <Box
        sx={{
        
          justifyContent: 'space-between', 
          alignItems: 'center',
          height: '30vh',
          margin: 'auto',
          marginTop: '50px', 
        }}
      >
        <TextField
          id="Last Name"
          label="Last Name"
          placeholder="Last Name"
          onChange={handellastnameinput}
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
        <TextField
          id="User"
          label="User"
          placeholder="User"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
         
        <TextField
          id="Enroll year"
          label="Enroll year"
          placeholder="Enroll year"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
          <TextField
          id="Department"
          label="Department"
          placeholder="Department"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
          <TextField
          id="Change Password"
          label="Change Password"
          placeholder="Change Password"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
        <SubmitButton onClick={() => console.log({ fname, lastname, email ,phone ,id })} />
  
      </Box>

    </Box>
    </div>
  );
}

