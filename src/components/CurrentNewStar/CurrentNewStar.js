import React, { Component } from 'react';

class CurrentNewStar extends Component {

  render() {
    return (
      <div>New Star is {this.props.currentStar.name} and has a diameter of {this.props.currentStar.diameter} units</div>
    );
  }
}

export default CurrentNewStar;
