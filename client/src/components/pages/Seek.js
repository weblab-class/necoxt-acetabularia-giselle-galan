import React, { Component } from "react";
import StepCardSeek from "../modules/StepCardSeek.js";
import { get } from "../../utilities";
import NavBar from "../modules/NavBar";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Seek.css";
import "../foundation.css";
import "../pages/Collection.css"
import "../pages/Home.css"

class Seek extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        // steps: [],
        // mapsData: [],
        // mapData: []
        treasureMapData: null,
        // totalStepNumber: null,
        // currentStep: 0,
        // firstStep: true,
        // lastStep: false
      };
    }
    
    // updateStep = () => {
    //   if (this.state.firstStep) {
    //     this.setState({ currentStep: 0});
    //     this.setState({firstStep: false});
    //   }
    //   else {
    //     this.setState({ currentStep: this.state.currentStep+1 });
    //     this.state.currentStep == this.state.totalStepNumber-1 && this.setState({ lastStep: true });
    //   }
    // }

    componentDidMount() {
      // get map content with single step
      // get(`/api/checkpoint`, { _id: this.props.map_id}).then((mapContentObj) => {
      //   this.setState({ mapData: mapContentObj });
      // });
      // get treasure map content with multiple steps
      get(`/api/treasure`, { _id: this.props.treasure_id }).then((treasureMapObj) => {
        this.setState({ treasureMapData: treasureMapObj })
      });
      // this.setState({ totalStepNumber: this.state.treasureMapData.length});
      // this.updateStep();
    }
  
    render() {
      
      if (this.state.treasureMapData) {
        // console.log(this.state.treasureMapData[0].treasureSteps);
        // console.log(this.state.treasureMapData[0].treasureSteps[this.state.currentStep]);
        // return null;
        return (
          <div className="pageContainer">
            <NavBar 
              handleLogin={this.props.handleLogin}
              handleLogout={this.props.handleLogout}
              userId={this.props.userId}
            />
            <div className="u-title">.seek</div>
            <div className="u-subtitle">{(this.state.treasureMapData[0].creator_name)} has hidden a treasure for you</div>
            {/* <div> */}
              <StepCardSeek 
                _id={this.props._id}
                // data={this.state.treasureMapData[0].treasureSteps[this.state.currentStep]}
                data={this.state.treasureMapData[0].treasureSteps}
                treasure_is={this.state.treasureMapData[0].treasureContent.treasure_is}
                // lastStep={this.state.lastStep}
                // updateStep={this.updateStep}
              />
            {/* </div> */}
          </div>
        );
      }
    else {
      return (<div>rendering</div>)
    }
  }
  
}

export default Seek;