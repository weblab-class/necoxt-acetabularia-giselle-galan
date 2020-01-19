import React, { Component } from "react";
import NavBar from "../modules/NavBar.js";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Checkpoint from "../modules/Checkpoint.js";


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

  getMousePos = (event) => {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    //alert('x: ' + x + '\ny: ' + y);
    this.setState({position: {x: x, y: y,},});
    // console.log(document.getElementsByClassName("pin"));
    // document.getElementsByClassName("pin").setAttribute('style', 'left:150px;');
    // document.getElementsByClassName("pin").style.top = this.state.position.x;
    return { 'x': x, 'y': y };
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
      <div className="callout primary">
        <div className="row column text-center">
          <h1>Create your Treasure Map</h1>
        </div>
      </div>

      <div className="grid-container">
        <div className="map" onClick={this.getMousePos}>
          <img src="Campus.jpeg" width="956" height="565" alt=""/>
          <div className="pin">
            <Checkpoint position={this.state.position}/>
          </div>
          <p>{JSON.stringify(this.state.position)}</p>
        </div>
      </div>
      </>
    );
  }
}

export default Create;
