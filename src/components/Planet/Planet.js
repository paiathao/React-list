import React, { Component } from 'react';


class Planet extends Component {

  render() {
    return (
      <li>
        The Planet {this.props.planetData.name} have a population of: {this.props.planetData.population}.
      </li>
    );
  }
}

export default Planet;