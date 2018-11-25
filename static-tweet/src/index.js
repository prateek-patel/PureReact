import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Avatar from './components/avatar';
import Message from './components/message';
import NameWithHandle from './components/namewithhandle';
import Time from './components/time';
import LikeButton from './components/likebutton';
import MoreOptionsButton from './components/moreoptionsbutton';
import ReplyButton from './components/replybutton';
import RetweetButton from './components/retweetbutton';


function Tweet() {
    return (
        <div className="tweet">
            <Avatar/>
            <div className="content">
                <NameWithHandle/><Time/>
                <Message/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
        
    );
}

ReactDOM.render(<Tweet/>, document.querySelector('#root'));
