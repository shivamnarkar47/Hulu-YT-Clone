import React from 'react';
import './Header.css';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <HomeIcon />
      </div>
      <img
        src="https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png"
        alt=""
      />
    </div>
  );
}

export default Header;
