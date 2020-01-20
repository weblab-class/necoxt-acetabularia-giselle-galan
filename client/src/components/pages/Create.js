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
      clickPosition: {
        x: null,
        y: null,
      },
      mapPosition: {
        x: null,
        y: null,
      },
    };
  }

  getMousePos = (event) => {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    this.setState({clickPosition: {x: x, y: y,},});
  }

  getMapPos = () => {
    this.setState({
      mapPosition: {
        x: document.getElementById('mapThumbnailContainerID').offsetLeft,
        y: document.getElementById('mapThumbnailContainerID').offsetTop,
      },
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
            clickPosition={this.state.clickPosition}
            mapPosition={this.state.mapPosition}
            getMousePos={this.getMousePos}
            getMapPos={this.getMapPos}
          />
        </div>
      </div>
      </>
    );
  }
}

export default Create;
