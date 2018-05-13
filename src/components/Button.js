import React from 'react';

const Button = (props) => {
    return (
      <div className="button">
        <button className="btn" onClick = {props.newPicture}>
          {props.buttonText}
        </button>
      </div>
    );
}

export default Button;