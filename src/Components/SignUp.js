import React, { useState } from 'react';
import './SignUp.css';
import libraryImage from '../Assets/library-with-books.jpg';
import bedipic from '../Assets/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg'
import cloud from '../Assets/cloud-upload.png';

const SignUp = () => {
  
   
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        studentId: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Signup form submitted:', formData);
       
    };
return (
        
     
        <div className="signup-container">
            <div className='gried'>
            <div className="welcome-box" >
                
            <div className="welcome-text">
           <h2>Welcome to the Library</h2>
           </div>
                <img src = {bedipic} alt='lady pic'/>
                <div className="cloudBox">
           
            </div>
             
                  </div>
              
                  
            <div className="signup-image">
                <img src={libraryImage} alt="Signup" />
            </div>
            </div>
        
            <div className="signup-form">
                <h1>Sign Up From</h1>
                <form onSubmit={handleSubmit}>
                <div className="input-containers">
                        <label htmlFor="firstName"></label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
           =
           =
                        <label htmlFor="lastName"></label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                =
                =
                        <label htmlFor="studentId"></label>
                        <input
                            type="text"
                            id="studentId"
                            name="studentId"
                            placeholder="Student ID"
                            value={formData.studentId}
                            onChange={handleChange}
                            required
                        />
               =
               =
                        <label htmlFor="Number"></label>
                        <input
                            type="Phone Number"
                            id="Number"
                            name="Number"
                            placeholder="Phone Number"
                            value={formData.Number}
                            onChange={handleChange}
                            required
                        />
              
                 =
                 =
           
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                  =
                  =
                  
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    =
                    =
                   
                        <label htmlFor="confirmPassword"></label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    =
                    =
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

