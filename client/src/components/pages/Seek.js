import React, { Component } from "react";
import StepCardSeek from "../modules/StepCardSeek.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Seek.css";
import "../foundation.css";
import "../pages/Collection.css"

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
            <div className="title">
              <h1><b>map title</b></h1>
              <h4><b><i>{(this.state.treasureMapData[0].creator_name).toLowerCase()} has hidden a treasure for you.</i></b></h4>
            </div>
            {/* <div> */}
              <StepCardSeek 
                _id={this.props._id}
                // data={this.state.treasureMapData[0].treasureSteps[this.state.currentStep]}
                data={this.state.treasureMapData[0].treasureSteps}
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