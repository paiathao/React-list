import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar'
import StarList from '../StarList/StarList'
import NewStarForm from '../NewStarForm/NewStarForm'
import axios from 'axios'
import PlanetList from '../PlanetList/PlanetList'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'
import red from '@material-ui/core/colors'
import 'typeface-roboto'



const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: '#00ACB0',
    },
  },
});

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
      },

      planetList: [],
    }
  }

  //will be called Once, basically when page load
  componentDidMount () {
    console.log('Component mounted')
    //this is a good place to make an initial GET request
    this.getPlanets();
  }

  getPlanets = () => {
    //GET
    axios.get('https://swapi.co/api/planets/?format=json').then((response)=>{
      console.log(response);
      this.setState({
        planetList : response.data.results
      })
      console.log(this.state.planetList)
    })
    
  }

  handleGetMoreInfo = (star) => {
    console.log('on click', star)
  }

  handleFormSubmit = (event) => {
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

    return (
      <MuiThemeProvider theme={theme} >
      <div className="App">
      <Header/>
      <CurrentNewStar currentStar={this.state.newStar}/>
      <NewStarForm 
        newStar={this.state.newStar} 
        handleChangeForInput={this.handleChangeFor}
        handleSubmit={this.handleFormSubmit}
        />
      <StarList listOfStars={this.state.starList} handleGetMoreInfo={this.handleGetMoreInfo}/>
      <PlanetList listOfPlanets = {this.state.planetList}/>
      <Footer/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
