const mongoose = require('mongoose');

import React, { Component } from "react";
import NavBar from "../modules/NavBar.js";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Checkpoint from "../modules/Checkpoint.js";
import StepCard from "../modules/StepCard.js";
import { get } from "../../utilities";
import { post } from "../../utilities";


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
    if (this.state.currentStep > 1) {
      let newSteps = this.state.steps;
      // save current step
      if (newSteps && data) {
        newSteps[this.state.currentStep - 1] = data;
      }
      this.setState({
        steps: newSteps,
        currentStep: this.state.currentStep - 1,
      });
    } else {
      alert("This is the first step");
    }
  }

  finishCreate = (data) => {
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
    if (this.props.userId) {
      let newSteps = this.state.steps;
      // save current step
      if (newSteps) {
        newSteps[data.step - 1] = data;
      }
      this.setState({
        steps: newSteps.map((stepObj, i) => (
          {...stepObj, step: i + 1,}
        )),
        currentStep: 1,
      });
      post("/api/treasure", this.state.steps)
    } else {
      alert("Please Login");
    }
  }

  deleteStep = () => {
    let newSteps = this.state.steps;
    newSteps.splice(this.state.currentStep-1, 1);
    this.setState({
      steps: newSteps,
      currentStep: this.state.currentStep - 1,
    });
  }

  nextStep = (data) => {
    let newSteps = this.state.steps;
    // save current step
    if (newSteps && data) {
      newSteps[this.state.currentStep - 1] = data;
    }

    // add a new step

    if (this.state.currentStep === this.state.steps.length) {
      newSteps = newSteps.concat([{
        step_id: new mongoose.Types.ObjectId(),
        map: "CampusMap",
        position: {
          x: null,
          y: null,
        },
        description: "",
        question: "",
        answer: "",
      }]);
    }

    this.setState({
      steps: newSteps,
      currentStep: this.state.currentStep + 1,
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
      console.log(this.state, this.state.steps[this.state.currentStep - 1]);
      return (
        <>
        <div className="">
          <div className="">
            <StepCard
              key={this.state.steps[this.state.currentStep - 1].step_id}
              data={this.state.steps[this.state.currentStep - 1]}
              currentStep={this.state.currentStep}
              totalSteps={this.state.steps.length}
              previousStep={this.previousStep}
              nextStep={this.nextStep}
              finishCreate={this.finishCreate}
              deleteStep={this.deleteStep}
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
