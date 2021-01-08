import React from "react";
import "./SwipeButton.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';

function SwipeButton() {
    return (
        <div className="swipeButton">
            <IconButton>
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton >
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton >
                <StarIcon fontSize="large"/>
            </IconButton>
            <IconButton > 
                <FavoriteIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButton; 