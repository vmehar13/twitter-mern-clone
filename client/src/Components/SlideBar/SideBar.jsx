import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExplicitIcon from '@material-ui/icons/Explicit';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SideBarLayout from './SideBarLayot';
import '../../Stylesheet/SideBar.css';

const SideBar = () => {
    return (
        <div className="SideBar_Container">
            <div className="SideBar_HomeIcon">
                <TwitterIcon className="SideBar_BrandIcon"/>
            </div>
            <div className="SideBar">
                <SideBarLayout Icon={HomeIcon} text={"Home"} />
                <SideBarLayout Icon={ExplicitIcon} text={"Explore"} />
                <SideBarLayout Icon={NotificationsNoneIcon} text={"Notifications"} />
                <SideBarLayout Icon={ChatBubbleOutlineIcon} text={"Message"} />
                <SideBarLayout Icon={BookmarkBorderIcon} text={"Bookmarks"} />
                <SideBarLayout Icon={ReceiptIcon} text={"List"} />
                <SideBarLayout Icon={PersonIcon} text={"Profile"} />
                <SideBarLayout Icon={MoreHorizIcon} text={"More"} />
            </div>
        </div>
    );
}

export default SideBar;