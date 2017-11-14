import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * Styles
 */ 
import './styles';

class Header extends Component {
  render() {
    return (
      <AppBar 
        title="The Market of Super"
      />
    );
  }
}

export default Header;

