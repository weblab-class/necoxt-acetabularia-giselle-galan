import React, { Component } from "react";
import NavBar from "../modules/NavBar.js";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Checkpoint from "../modules/Checkpoint.js";
import StepCard from "../modules/StepCard.js";


import "../../utilities.css";
import "./Create.css";
import "../foundation.css";

class Create extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      steps: [],
      position: {
        x: null,
        y: null,
      },
    };
  }

  setPos = (event) => {
    let e = event || window.event;
    let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    let x = e.pageX || e.clientX + scrollX;
    let y = e.pageY || e.clientY + scrollY;
    let xMapContainer = document.getElementById('mapThumbnailContainerID').offsetLeft;
    let yMapContainer = document.getElementById('mapThumbnailContainerID').offsetTop;
    // let xMap = document.getElementById('imageID').offsetLeft;
    // let yMap = document.getElementById('imageID').offsetTop;
    let xMap = 4; // border from thumbnail
    let yMap = 4; // border from thumbnail
    this.setState({position: {x: x-xMapContainer-xMap, y: y-yMapContainer-yMap,},});
  }

  clearCheckpoint = () => {
    this.setState({
      position: {x: null, y: null,},
    });
  }

  componentDidMount() {
    // remember -- api calls go here!
    // document.title = "Create Map";
    // get("/api/checkpoints").then((stepObjs) => {
    //   stepObjs.map((stepObj) => {
    //     this.setState({ steps: this.state.steps.concat([storyObj]) });
    //   });
    // });
  }

  render() {
    let stepList = null;
    return (
      <>
      <div className="">
        <div className="">
          <StepCard 
            position={this.state.position}
            setPos={this.setPos}
            clearCheckpoint={this.clearCheckpoint}
          />
        </div>
      </div>
      </>
    );
  }
}

export default Create;
