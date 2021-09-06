import React,{ Fragment } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';


const Home = () => {
    return (
        <Fragment>
            <Header/>
           <div className='home'>
            <Posts/>
            <Sidebar/>
           </div>
        </Fragment>
    )
}

export default Home
