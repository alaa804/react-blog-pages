import React from 'react'
import './header.css';


const Header = () => {
    return (
        <div className='header'>
            <div className='headerTitles'>
               <span className='header-sm'>React & Node</span>
               <span className='header-lg'>Blog</span>
            </div>
            {/* <img
               className="header-img"
               src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
               alt='' /> */}
        </div>
    )
}

export default Header
