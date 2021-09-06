import React from 'react';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <span className='sidebar-title'>About Me</span>
                <img className='sidebar-img'
                 src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                 alt=""
                 />
                <p>
                   Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                   amet ex esse.Sunt eu ut nostrud id quis proident.
                 </p>
            </div>

            <div className='sidebar-container'>
              <span className='sidebar-title'>Categories</span>
               <ul className='sidebar-menu'>
                  <li className='sidebar-list'>
                     Life
                  </li>
                  <li className='sidebar-list'>
                     Musique
                  </li>
                  <li className='sidebar-list'>
                   Style
                  </li>
                  <li className='sidebar-list'>
                     Sport
                  </li>
                  <li className='sidebar-list'>
                     Tech
                  </li>
                  <li className='sidebar-list'>
                    Cinema
                  </li>
               </ul>
            </div>

           <div className='sidebar-container'>
              <span className='sidebar-title'>Follow</span>
              <div className='sidebar-social'>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
        </div>
    )
}

export default Sidebar
