import React from 'react';

const InfoText = (props) => {
    return (
      <div className="infoText">
        <p>
          {props.infoText}
        </p>
      </div>
    );
}

export default InfoText;