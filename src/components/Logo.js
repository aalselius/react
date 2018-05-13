import React from 'react';

const Logo = (props) => {
    return (
      <div className="logo">
        <img src={require('../img/logo.png')} alt="Giphy Logo"/>
      </div>
    );
}

export default Logo;