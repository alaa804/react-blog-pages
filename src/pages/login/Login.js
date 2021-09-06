import React from 'react';
import {  Link  } from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <div className='login'>
           <span className='login-title'>Login</span>
           <form className='login-form'>
             <label>Email</label>
             <input type='email' placeholder='Enter your email...' autoFocus={true} />
             <label>Password</label>
             <input type='password' placeholder='Enter your password...' />
             <button type='submit' className='login-btn'>Login</button>
           </form>
           {/* <button className='register-btn'>
             <Link className='link' to='register'>Register</Link>
           </button> */}
           <strong className='strong'> if you Are not logged in please go to <Link className='link color' to='/register'>Register</Link> page </strong>
        </div>
    )
}

export default Login
