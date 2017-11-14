import { connect } from 'react-redux'
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * Actions
 */
import { openDrawer, closeDrawer } from '../../actions/app.actions';

/**
 * Selectors
 */
import { drawerOpen } from '../../selectors/app.selector';

/**
 * Styles
 */ 
import './styles';

class Header extends Component {

  constructor(props) {
    super(props);

    this._handleMenuAction = this._handleMenuAction.bind(this);
  }

  _handleMenuAction() {
    if(this.props.isDrawerOpen) {
      this.props.closeDrawer();
    } else {
      this.props.openDrawer();
    }
  
  }

  render() {
    return (
      <AppBar 
        onLeftIconButtonTouchTap={this._handleMenuAction}
        title="The Market of Super"
      />
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
)(Header);


