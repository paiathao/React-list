import React, { Component } from 'react';
import Star from '../Star/Star.js'

class StarList extends Component {

  render() {
    //Best Map usage
    let starListItemArray = this.props.listOfStars.map((star, index) => {
      return <Star handleGetMoreInfo={this.props.handleGetMoreInfo} starData={star}  key={index}/>
    })

    return (
      <ul className="App-intro">
        {starListItemArray}
      </ul>
    );
  }
}

export default StarList;
