import React from 'react';
import {  Link  } from 'react-router-dom';
import './topbar.css';


const TopBar = () => {
  
    return (
        <div className='navbar'>
             <div className='navbar-left'>
               <i className="fab fa-facebook-square"></i>
               <i className="fab fa-twitter-square"></i>
               <i className="fab fa-instagram-square"></i>
               <i className="fab fa-linkedin"></i>
             </div>
            <div className='navbar-center'>
            <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li> 
                  <li>
                    <Link to='/'>Contact</Link>
                  </li>  
                  <li>
                    <Link to='/write'>write</Link>
                  </li>   
                  <li>
                    <Link to='/register'>Register</Link>
                  </li>  
                  <li>
                     <Link to='/login'>Login</Link>
                  </li> 
                  <li>
                    <Link to='/login'>Logout</Link>
                  </li> 
              </ul>
            </div>
            <div className='navbar-right'>
            <img
              className="navbar-img"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <i className="fas fa-search"></i>
            </div>
         </div>
    )
}

export default TopBar
