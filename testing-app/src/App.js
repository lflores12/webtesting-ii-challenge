import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0
  }
  render(){
   return (
      <div className="App">
        <Display balls = {this.state.balls} strikes = {this.state.strikes} fouls = {this.state.fouls} />
        <Dashboard hit = {this.hit} strike = {this.strike} ball = {this.ball} foul = {this.foul} />
      </div>
        
   )


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
