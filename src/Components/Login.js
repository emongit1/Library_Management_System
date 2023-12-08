import React, { useState } from 'react';

import './Login.css';
import Sidenav from './Sidenav';

import user from '../Assets/user.png';
import passwordicon from '../Assets/padlock.png';

import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const handleSubmit = () => {
        if (!email || !password) {
          setErr('Fill in your full info');
        } else {
         
          if (email === 'admin123@gmail.com') {
           
            navigate('./admin');
          } else {
       
            navigate('./home');
          }
        }
      };

    return (
        <div className='container'>
            <div className='input-container'>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ backgroundImage: `url(${user})` }}
                />
            </div>
            <div className='input-container'>
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ backgroundImage: `url(${passwordicon})` }}
                />
            </div>
   
                <button onClick={handleSubmit}>LOG IN</button>
                
            <div className='signup-message'>
                Not a member? <Link to='/signup'>Sign Up</Link>
                
               
            </div>
        </div>
    );
};


export default Login;

