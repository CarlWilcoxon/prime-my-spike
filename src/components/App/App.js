import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { TextField, InputAdornment} from '@material-ui/core';

class App extends Component {
  state = {
    oldInput: 'taco',
    recentInput: 'burrito',
    currentInput: '',
  }

  changeHandler = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      oldInput: this.state.recentInput,
      recentInput: this.state.currentInput,
      currentInput: '',
    })
  } // end login


  render () {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.oldInput + ' ' + this.state.recentInput}
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
              color={"secondary"}
              value={this.state.currentInput}
            />
          </form>
        </header>
      </div>
    )};
}

export default App;
