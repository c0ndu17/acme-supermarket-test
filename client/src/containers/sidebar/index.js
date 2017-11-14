import { connect } from 'react-redux'
import React, { Component } from 'react';

/**
 * Actions
 */
import { openDrawer, closeDrawer } from '../../actions/app.actions';

/**
 * Selectors
 */
import { drawerOpen } from '../../selectors/app.selector';

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
  constructor(props){
    super(props);
  
    this._onRequestChange = this._onRequestChange.bind(this);
  }

  _onRequestChange(open, reason) {
    if (reason === 'clickaway' || reason === 'escape') {
      this.props.closeDrawer();
    }
  }

  render() {
    return (
      <Drawer 
        open={this.props.isDrawerOpen}
        docked={false}
        onRequestChange={this._onRequestChange}
        >

        <MenuItem>Reset</MenuItem>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDrawerOpen: drawerOpen(state)
  }
}


const mapDispatchToProps = dispatch => {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

