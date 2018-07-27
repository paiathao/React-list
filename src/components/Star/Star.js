import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Call} from '@material-ui/icons'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Star extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      open: false,
    }
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };



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
      <Button color="secondary" variant="outlined" onClick={this.handleClick}>Show/Hide<Call/></Button>
      <Button color="primary" variant="flat" onClick={this.handleGetMoreInfo}>Click for More Info!</Button>

      <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Nunki's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}
}

export default Star;