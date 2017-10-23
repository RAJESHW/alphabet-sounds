import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      letter: null,
      currentState: null,
      currentIndex: 0
    }
  }
  componentDidMount() {
    this.setState({
      letter : 'A',
      currentState: 'first',
      currentIndex: 0
    })
  }
  handleEvent = (e) => {
    // const { audio_tag } = this.refs;
    const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
    const lastLetter = letters[letters.length - 1];
    const firstLetter = letters[0];
    let { currentIndex } = this.state;
    if(e.target.classList.contains('lastButton')) {
      this.setState({
        letter: lastLetter,
        currentState: 'last',
        currentIndex: 25
      })
    } else if(e.target.classList.contains('firstButton')) {
      this.setState({
        letter: firstLetter,
        currentState: 'first',
        currentIndex: 0
      })
    } else if(e.target.classList.contains('previousButton')) {
      if(this.state.currentState === 'first') {
        this.setState({
          letter: lastLetter,
          currentState: 'last',
          currentIndex: 25
        })
      } else if(this.state.currentState === 'last') {
        const letterY = letters[letters.length - 2];
        this.setState({
          letter: letterY,
          currentState: 'middle'
        })
      } else if(this.state.currentState === 'middle') {
        currentIndex--;
        if(currentIndex < 0) {
          this.setState({
            letter: letters[currentIndex],
            currentState: 'middle',
            currentIndex
          })
        } else {
          currentIndex = 25;
        }
      }
    } else if(e.target.classList.contains('nextButton')) {
      if(this.state.currentState === 'last') {
        this.setState({
          letter: firstLetter,
          currentState: 'first',
          currentIndex: 0
        })
      } else if(this.state.currentState === 'first') {
        currentIndex =+ 1;
        const letterB = letters[currentIndex];
        this.setState({
          letter: letterB,
          currentState: 'middle',
          currentIndex
        })
      } else if(this.state.currentState === 'middle') {
        currentIndex++;
        if(currentIndex < 0) {
          this.setState({
            letter: letters[currentIndex],
            currentState: 'middle',
            currentIndex
          })
        } else {
          currentIndex = 25;
        }
        
      }
    }
  }
  render() {
    const { letter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Alphabet Sounds</h1>
        </header>
        <div className="mainContent">
          <div className="letterSection">
            <span><h1>{ letter }</h1></span>
          </div>
          <div className="imageSection">
            <img src={ require('./images/apple-163602_640.jpg') } alt="Apple"/>
          </div>
        </div>
        <audio controls="controls" ref="audio_tag">
            <source src={ require('./audio/alphabet-audio.m4a') } type="audio/mp4" />
        </audio>
        <div className="buttonSection">
          <button className="previousButton" onClick={this.handleEvent}>Previous</button>
          <button className="nextButton" onClick={this.handleEvent}>Next</button>
          <button className="firstButton" onClick={this.handleEvent}>First</button>
          <button className="lastButton" onClick={this.handleEvent}>Last</button>
        </div>
      </div>
    );
  }
}

export default App;
