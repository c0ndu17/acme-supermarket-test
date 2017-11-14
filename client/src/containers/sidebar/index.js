import React, { Component } from 'react';

/**
 * 
 */
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

/**
 * Styles
 */ 
import './styles';

class Sidebar extends Component {
  render() {
    return (
      <Drawer open={this.state.open}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

export default Sidebar;

