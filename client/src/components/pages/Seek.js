import React, { Component } from "react";
import StepCardSeek from "../modules/StepCardSeek.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Seek.css";
import "../foundation.css";

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
  
    componentDidMount() {
      // get map content
      get("/api/checkpoints").then((mapsDataObjs) => {
        this.setState({ mapsData: mapsDataObjs })
      });
    }
  
    render() {
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