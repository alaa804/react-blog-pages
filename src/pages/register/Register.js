import React from 'react';
import {  Link  } from 'react-router-dom';
import './register.css';

const Register = () => {
    return (
        <div className='register'>
          <span className='register-title'>Register</span>
           <form className='register-form'>
           <label>Username</label>
             <input type='text' placeholder='Enter your username...' autoFocus={true}/>
             <label>Email</label>
             <input type='email' placeholder='Enter your email...' />
             <label>Password</label>
             <input type='password' placeholder='Enter your password...' />
             <label>Confirm Password</label>
             <input type='password' placeholder='Confirm your password...' />
             <button type='submit' className='register-btn'>Register</button>
           </form>
           {/* <button className='login-btn'>
             <Link className='link' to='/login'>Login</Link>
           </button> */}
            <strong className='strong'> if you Are Already logged in please go to <Link className='link color1' to='/login'>Login</Link> page </strong>
        </div>
    )
}

export default Register
