import React, { Component } from 'react';
import Planet from '../Planet/Planet'

class PlanetList extends Component {

  render() {
    //Best Map usage
    let plannetListItemArray = this.props.listOfPlanets.map((planet, index) => {
      return <Planet planetData={planet}  key={index}/>
    })

    return (
      <ul className="App-intro">
        {plannetListItemArray}
      </ul>
    );
  }
}

export default PlanetList;