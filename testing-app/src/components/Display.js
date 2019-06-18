import React from 'react';

const Display = props => {
    return (
          <div>
            <div>Balls: {props.balls}</div>
            <div>Strikes: {props.strikes}</div>
            <div>Fouls: {props.fouls}</div>
          </div>
    )
}

export default Display;
