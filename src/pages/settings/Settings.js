import React from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';


const Settings = () => {
    return (
        <div className='settings'>
            <div className='wrapper'>
                <div className='settingsTitle'>
                    <span className='updateTitle'>Update Your Account</span>
                    <span className='deleteTitle'>Delete Account</span>
                </div>
                <form className='form-settings'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img src='https://source.unsplash.com/random' alt='' />
                        <label htmlFor='file-input'>
                          <i className="settingsPP-icon fas fa-user-circle"></i>
                        </label>
                        <input type='file' id='file-input' style={{ display:'none'}}/>
                    </div>
                    <label >Username</label>
                      <input type='text' placeholder='alaa' />
                    <label >Email</label>
                      <input type='email' placeholder='alaa@gmail.com' />
                    <label >password</label>
                      <input type='password' />
                      <button className='settingsUpdate' type='submit'>Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings
