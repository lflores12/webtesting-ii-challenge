import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0
  }
  render(){
  return (
    <div className="App">
      <div>
        <div>Balls: {this.state.balls}</div>
        <div>Strikes: {this.state.strikes}</div>
      </div>

      <div>
        <button onClick = {this.strike}>Strike</button>
        <button onClick = {this.ball}>Ball</button>
        <button onClick = {this.foul}>Foul</button>
        <button onClick = {this.hit}>Hit</button>
      </div>
    </div>
  );

  }

  hit = () =>{
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0
    });
  }

  strike = () => {
    if(this.state.strikes >= 2){
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0
      })
    } else {
      this.setState(prevState => {
        return {
          strikes: prevState. strikes +1
        }
      })
    }
  }

  ball = () => {
    if(this.state.balls >= 3 ){
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0
      })
    }else {
      this.setState( prevState => {
        return {
          balls: prevState.balls +1
        }
      })
    }
  }

  foul = () => {
    if(this.state.strikes < 2){
      this.setState( prevState => {
        return{
        strikes: prevState.strikes +1
        }
      })
    }
  }
}

export default App;
