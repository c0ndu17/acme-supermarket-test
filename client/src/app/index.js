import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'

/**
 * Store
 */
import configureStore from '../configureStore';

/**
 * Containers
 */
import DevTools from '../containers/devTools';
import Sidebar from '../containers/sidebar';

/*
 * Components
 */
import Header from '../components/header';

/**
 * Styles
 */ 
import styles from './styles';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <div>
            <Sidebar />
            <Header />
            <DevTools />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
