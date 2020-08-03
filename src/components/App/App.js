import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { TextField, InputAdornment} from '@material-ui/core';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    currentInput: '',
    arrayOfWords: ['taco', 'burrito'],
  }

  changeHandler = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    let arrayOfWords = this.state.currentInput.toUpperCase().split(' ');
    this.setState({
      ...this.state,
      arrayOfWords,
      currentInput: '',
    })
    if (this.state.arrayOfWords.length > 1) {
      this.props.dispatch({
        type: arrayOfWords[0],
        payload: arrayOfWords,
      });
    } else {
      this.props.dispatch({
        type: arrayOfWords[0]
      })
    }
}

  render () {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.arrayOfWords.map((word, index) => <span key={index}>{word + ' '}</span>)}
        </p>
        <form onSubmit={this.submitHandler}>
          <TextField
            onChange={(e) => this.changeHandler('currentInput', e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {">"}
                </InputAdornment>
              ),
            }}              variant={'standard'}
            color={"secondary"}  //Change color to flourescent green
            value={this.state.currentInput}
          />
        </form>
      </header>
    </div>
  )};
}
const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
