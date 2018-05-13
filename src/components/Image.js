import React from 'react';

const Image = (props) => {
    return (
      <div className="image">
          <img src={props.url} alt="Giphy" className="giphImage"/>
      </div>
    );
}

export default Image;