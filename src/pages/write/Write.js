import React from 'react';
import './write.css';

const Write = () => {
    return (
        <div className='write'>
           <img className='write-img' src='https://source.unsplash.com/random' alt='' />
           <form className='form'>
             <div className='form-group'>
                <label htmlFor='file-input'>
                  <i className="write-icon fas fa-plus"></i>
                </label>
                 <input type='file' id='file-input' style={{ display:'none'}}/>
                 <input type='text' placeholder='title' className='write-input' autoFocus={true} />
             </div>
             <div className='form-group'>
                <textarea placeholder='tell your Story...' type='text' className='write-input writeText' ></textarea>
             </div>
             <button className='submit'>Publish</button>
           </form>
        </div>
    )
}

export default Write
