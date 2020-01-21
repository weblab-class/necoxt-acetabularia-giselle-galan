const mongoose = require('mongoose');

import React, { Component } from "react";
import NavBar from "../modules/NavBar.js";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Checkpoint from "../modules/Checkpoint.js";
import StepCard from "../modules/StepCard.js";


import "../../utilities.css";
import "./Create.css";
import "../foundation.css";

/**
 * 
 * steps is an array of objects:
 * {
 * step_id: String,
 * step: Number,
 * map: String,
 * position: {
 *   x: Number,
 *   y: Number,
 * },
 * description: String,
 * question: String,
 * answer: String,
 * }
 * 
 */

class Create extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      steps: [],
      currentStep: 0,
    };
  }
  
  previousStep = (data) => {
    if (currentStep > 1) {
      let newSteps = this.state.steps;
      // save current step
      if (newSteps) {
        newSteps[data.step - 1] = data;
      }
      this.setState({
        steps: newSteps,
        currentStep: this.state.currentStep - 1,
      });
    }
  }

  finishCreate = () => {
    // const body = [{
    //   step_id: String,
    //   step: Number,
    //   map: String,
    //   position: {
    //     x: Number,
    //     y: Number,
    //   },
    //   description: String,
    //   question: String,
    //   answer: String,
    // }];
    post("/api/treasure", this.state.steps);
    console.log(this.state.steps);
  }

  nextStep = (data) => {
    let newSteps = this.state.steps;
    // save current step
    if (newSteps) {
      newSteps[data.step - 1] = data;
    }

    // add a new step
    if (this.state.currentStep === this.state.steps.length) {
      newSteps.concat([{
        step_id: new mongoose.Types.ObjectId(),
        step: this.state.steps.length + 1,
        map: "CampusMap",
        positions: {
          x: null,
          y: null,
        },
        description: "",
        question: "",
        answer: "",
      }])
    }

    this.setState({
      steps: newSteps,
      currentStep: this.state.steps.length + 1,
    });
  }

  // changeStep = (newStep) => {
  //   if (newStep.current > this.state.step.total) {
  //     this.addStep();
  //     this.setState({
  //       step: {
  //         current: this.state.current + 1,
  //         total: this.state.total + 1,
  //       }
  //     });
  //   } else if (newStep > 0) {
  //     this.setState({
  //       step: {
  //         current: newStep.current,
  //       }
  //     });
  //   } else {
  //     console.log("Invalid step input!");
  //   }
  // }

  componentDidMount() {
    // remember -- api calls go here!
    document.title = "Create Map";
    // get("/api/checkpoints").then((stepObjs) => {
    //   stepObjs.filter((stepObj) => stepObj.treasure_id == this.state.treasure_id)
    // });
    this.nextStep();
  }

  render() {
    if (this.state.currentStep > 0) {
      return (
        <>
        <div className="">
          <div className="">
            <StepCard
              data={this.state.steps[this.state.currentStep]}
              totalSteps={this.state.steps.length}
              previousStep={this.previousStep}
              addStep={this.addStep}
              finishCreate={this.finishCreate}
            />
          </div>
        </div>
        </>
      );
    } else {
      return (<div>rendering...</div>);
    }

  }
}

export default Create;
