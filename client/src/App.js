import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';



/**
 * Styles
 */ 
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <RaisedButton label="Hello World" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
