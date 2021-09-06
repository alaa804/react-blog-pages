import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import SinglePost from '../../../components/singlepost/SinglePost';
import './single.css';

const Single = () => {
    return (
        <div className='single-page'>
            {/* { post} */}
            <SinglePost/>
            <Sidebar/>
    
        </div>
    )
}

export default Single
