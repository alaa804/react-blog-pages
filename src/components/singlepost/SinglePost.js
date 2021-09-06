import React from 'react';
import './singlepost.css';

const SinglePost = () => {
    return (
        <div className='singlepost'>
            <div className='wrapper'>
                <img className='singlepost-img' src='https://source.unsplash.com/random' alt='' />
                <h1 className='singlepostTitle'>
                   lorem ipsum dolor sit amet.
                   <div className='singlepostEdit'>
                    <i className="post-icon far fa-edit"></i>
                    <i className=" post-icon far fa-trash-alt"></i>
                   </div>
                </h1>
                <div className='singlepostInfo'>
                    <span className='singlepostAuthor'>Author: <b>Alaa</b></span>
                    <span className='singlepostDate'>1 Hour ago</span>
                </div>
                <p className='singlepostDesc'>
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                      lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                      lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                      lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                      lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am  lorem ipsum dolor sit am
                      lorem ipsum dolor sit am  lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                      lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am
                    </p>
            </div>
        </div>
    )
}

export default SinglePost
