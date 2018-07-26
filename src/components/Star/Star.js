import React, { Component } from 'react';

class Star extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    }
  }

  handleClick = (event) => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  handleGetMoreInfo = () => {
    this.props.handleGetMoreInfo(this.props.starData)
  }

render() {
  let listItem;
  // how to show and hide things
  if(this.state.isVisible) {
    //return List Items
    listItem = (
      <li>
        The star "{this.props.starData.name}" is {this.props.starData.diameter} million km in diameter.
      </li>
    )
  } else {
    //return empty List Items
    listItem = <li></li>

  }

  return (
    <div>
      {listItem}
      <button onClick={this.handleClick}>Show/Hide</button>
      <button onClick={this.handleGetMoreInfo}>Click for More Info!</button>
    </div>
  );
}
}

export default Star;