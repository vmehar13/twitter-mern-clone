import React from 'react';
import TweetBox from './TweetBox';
import '../../Stylesheet/HomeFeed.css';

const HomeFeed = () => {
    return(
        <div className="HomeFeed_Container">
            <TweetBox />
        </div>
    )
}

export default HomeFeed;