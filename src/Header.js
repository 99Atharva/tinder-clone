import React from "react";
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from "@material-ui/core";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';



function Header() {
return (

    <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
        <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          className="header_icon" alt="tinder-logo" />
        <IconButton>
            <ChatBubbleIcon fontSize="large" className="header_icon" />
        </IconButton>
    </div>
 ); 
}

export default Header;