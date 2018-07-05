import React from 'react';
import Tilt from 'react-tilt';
import logo from './userLogo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner">
          <img style={{paddingTop: '5px'}} alt='logo' src={logo}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;