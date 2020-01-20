import React, { Component } from "react";
import StepCardSeek from "../modules/StepCardSeek.js";

import "../../utilities.css";
import "./Seek.css";
import "../foundation.css";

const data = {
    // position: { x: 666, y: 590 },
    description: "This is a description of the location.",
    question: "This is a question about the location.",
    answer: "answer",
};

class Seek extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        totalStepNumber: null,
        currentStepNumber: null,
        // getCheckpointData: null,
        // position: {
        //   x: null,
        //   y: null,
        // },
      };
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

        return (
            <>
            <div className="">
              <div>
                <StepCardSeek 
                  description={data.description}
                  question={data.question}
                  answer={data.answer}
                />
              </div>
            </div>
            </>
          );
    }
}

export default Seek;