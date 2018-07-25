import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      starList: [
        {
          name: 'Nunki',
          diameter: 132
        },
        {
          name: 'Menkar',
          diameter: 109
        },
        {
          name: 'Polaris',
          diameter: 90
        },
      ],

      newStar: {
        name: '',
        diameter: '',
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    //take values on newStar and add them to starList
    this.setState({
      starList: [
        ...this.state.starList,
        this.state.newStar
      ],
      newStar : {
        name: '',
        diameter: '',
      }
    })
  }

  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value
        }
      })
    }
  }
  

  render() {

    // let starListItemArray = [];
    // for (let i = 0; i < this.state.starList.length; i++) {
    //   starListItemArray.push(<li>{this.state.starList[i]}</li>)

    // }

    // eh still pushing
    // for(let star of this.state.starList) {
    //   starListItemArray.push(<li>{star}</li>)
    // }

    //map! still pushing!
    // this.state.starList.map(function (star){
    //   starListItemArray.push(<li>{star}</li>)
    // })

    //better Map usage
    // let starListItemArray = this.state.starList.map(function (star){
    //   return <li>{star}</li>
    // })

    //Best Map usage
    let starListItemArray = this.state.starList.map((star, index) => {
      return <li key={index}>The star "{star.name}" is {star.diameter} million km in diameter.</li>
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newStar.name} placeholder="star name" onChange={this.handleChangeFor('name')} />
          <input type="text" value={this.state.newStar.diameter} placeholder="diameter" onChange={this.handleChangeFor('diameter')} />
          <input type="submit" />
        </form>

        <ul className="App-intro">
          {starListItemArray}
        </ul>

      </div>
    );
  }
}

export default App;
