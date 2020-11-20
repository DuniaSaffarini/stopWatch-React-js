import React, { Component } from "react";
import "./App.css";
class Stopwatch extends Component {
  state = {
    TimerOn: false,
    counter: 0,
  };
  startTimer = () => {
    this.setState({
      TimerOn: true,
    });
    this.timer = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 10);
  };

  resetTimer = () => {
    this.setState({
      TimerOn: false,
      counter: 0,
    });
    clearInterval(this.timer);
  };

  stopTimer = () => {
    this.setState({
      TimerOn: false,
    });
    clearInterval(this.timer);
  };

  render() {
    const { counter } = this.state;
    let centiseconds = ("0" + (Math.floor(counter / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(counter / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(counter / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(counter / 3600000)).slice(-2);

    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
          {hours}h : {minutes}m : {seconds}s : {centiseconds}
        </div>
        {this.state.TimerOn === false && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.TimerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}

        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}
export default Stopwatch;
