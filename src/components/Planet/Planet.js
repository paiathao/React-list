import React, { Component } from 'react';


class Planet extends Component {

  render() {
    return (
      <li>
        {this.props.planetData.name}
      </li>
    );
  }
}

export default Planet;