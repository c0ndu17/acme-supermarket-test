import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/*
 * Components
 */
import Header from '../components/header';

/**
 * Styles
 */ 
import styles from './styles';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <Header />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
