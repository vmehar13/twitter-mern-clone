import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import '../../Stylesheet/TweetBox.css';

const TweetBox = () => {
    return(
        <div className="TweetBox_Container">
            <div className="TweetBox_Title">
                <h2>HOME</h2>
            </div>
            <div className="TweetBox">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <TextareaAutosize className="Tweet_Text" aria-label="empty textarea" placeholder="Write Your Tweet?" />

            </div>
            <div className="Tweet_Upload">
                <div className="file">
                    <input type="file" />
                </div>
                <div className="Tweet_Button">
                    <button>Tweet</button>
                </div>
            </div>
        </div>
    );
};

export default TweetBox;