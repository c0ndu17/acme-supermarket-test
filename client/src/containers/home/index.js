import { connect } from 'react-redux'
import React, { Component } from 'react';



/**
 * Styles
 */ 
import './styles';

class Home extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}


const mapDispatchToProps = dispatch => {
  return {
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

