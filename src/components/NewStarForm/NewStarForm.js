import React, { Component } from 'react';


class NewStarForm extends Component {

  render() {
    return (
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" value={this.props.newStar.name} placeholder="star name" onChange={this.props.handleChangeForInput('name')} />
          <input type="text" value={this.props.newStar.diameter} placeholder="diameter" onChange={this.props.handleChangeForInput('diameter')} />
          <input type="submit" />
        </form>

    );
  }
}

export default NewStarForm;
