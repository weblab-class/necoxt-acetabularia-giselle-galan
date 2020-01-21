import React, { Component } from "react";
import StepCardSeek from "../modules/StepCardSeek.js";
import { get } from "../../utilities";

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
        steps: [],
        totalStepNumber: null,
        currentStepNumber: null,
        mapsData: [],
      };
    }

    stepsToComp = () => {
      this.state.steps.map((step) => 
        <StepCardSeek 
          map={this.step.map}
          position={this.step.positon}
          description={this.step.description}
          question={this.step.question}
          answer={this.step.answer}
        /> 
      );
    }
  
    componentDidMount() {
      // get map content
      get("/api/checkpoints").then((mapsDataObjs) => {
        // this.setState({ mapContent: JSON.stringify(mapContentObj) })
        // this.setState({ mapsData: JSON.stringify(mapsDataObjs) })
        this.setState({ mapsData: mapsDataObjs })
      });
    }
  
    render() {
        // console.log(this.state.mapsData)
        return (
            <>
            <div className="">
              <div>
                {this.state.mapsData.map((mapContent) => (
                  <StepCardSeek 
                    map={mapContent.map}
                    position={mapContent.position}
                    description={mapContent.description}
                    question={mapContent.question}
                    answer={mapContent.answer}
                  />
                ))}
              </div>
            </div>
            </>
          );
    }
}

export default Seek;