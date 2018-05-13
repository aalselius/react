import React from 'react';

const Header = (props) => {
    return (
      <div className="header">
        <h1 className={props.headerClass}>{props.headerText}</h1>
      </div>
    );
}

export default Header;