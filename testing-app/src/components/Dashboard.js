import React from 'react';

const Dashboard = props => {
    return (
        <div className="controls">
          <div>
            <button onClick = {props.strike}>Strike</button>
            <button onClick = {props.ball}>Ball</button>
            <button onClick = {props.foul}>Foul</button>
            <button onClick = {props.hit}>Hit</button>
          </div>
        </div>
    )
}

export default Dashboard;