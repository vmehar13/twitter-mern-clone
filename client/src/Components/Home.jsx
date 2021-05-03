import React from 'react';
import Trends from './Trends';
import SideBar from './SlideBar/SideBar';
import HomeFeed from './HomeFeed/HomeFeed';
import "../Stylesheet/Home.css";

const Home = () => {
    return (
        <div className="Home_Container">
            <SideBar />
            <HomeFeed />
            <Trends />
        </div>
    );
};

export default Home;