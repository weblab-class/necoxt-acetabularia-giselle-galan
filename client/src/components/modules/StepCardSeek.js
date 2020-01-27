import React, { Component } from "react";
import { get } from "../../utilities";
import Checkpoint from "./Checkpoint";
import Map from "./Map";
import { navigate } from "@reach/router";
// import CheckAnswer from "./CheckAnswer.js"

// import "./StepCardSeek.css";

/**
 * Step is a component for displaying the created map
 *
 * Proptypes
 * @param {string} _id of the checkpoint
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} map type
 * @param {{xPosition: Number, yPosition: Number}} position of the checkpoint
 * @param {string} description
 * @param {string} question
 * @param {string} answer
 * @param {string} currentStepNumber
 * @param {string} totalStepNumber
 */
class StepCardSeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userInput: "",
        currentStep: 0,
        stepData: null ,
        totalSteps: null,
        lastStep: false,
        buttonText: "next location",
        moreInfo: null,
    };
  }

  includeExtra = () => {
    if (this.state.moreInfo) {
      return (
        // <br />
        // <div className="grid-y grid-container align-centered">
        <>
        <h5><b>did you know?</b></h5>
        <h6>{this.state.moreInfo}</h6>
        </>
      );
    }
  }

  handleSubmit = () => {
    if (this.state.stepData.answer.toLowerCase() == this.state.userInput.toLowerCase()) {
      if (this.state.lastStep) {
        alert("you found treasure!");
        navigate("/maps");
      }
      else {
        alert("correct");

        let nextStep = this.state.currentStep + 1;
        let finalStep = this.state.totalSteps-1;

        nextStep == finalStep && this.setState({ lastStep: true, buttonText: "I found treasure" });

        this.setState({ currentStep: nextStep });
        this.setState({ userInput: "" })
        this.setState({ stepData: this.props.data[nextStep]})
      }
    }
    else {
      alert("try again");
      this.setState({userInput: ""})
    }  
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({ userInput: input });
  };

  answerHint = (str) => {
    let word = "";
    let specialChar = [" ", "!", "*", "-", "?", ".", "$", "%", "+", "'", "/", "(", ")", "{", "}", "|", "<", ">", "," ]
    for(var i=0; i<str.length; i++) {
    // for (var char in str) {
      if (specialChar.includes(str[i])) {
        word += str[i];
      }
      else {
        word += "#";
      }
    }
    return word;
  }

  WordCount = (str) => { 
    if (str == "") {
      return 0;
    }
    else {
      return str.split(" ").length;
    }
  };

  componentDidMount() {
    this.setState( {stepData: this.props.data[this.state.currentStep]});
    this.setState( {totalSteps: this.props.data.length})
  }

  render() {
    // return null;
    if (this.state.stepData) {
      return (        
        <div>

        {/* Card container */}
          <div className="grid-y grid-container card-container large">
            <div className="cell card-header">
              <div className="card-title"><b>location {this.state.stepData.step} of {this.state.totalSteps}</b></div>
              {/* <div className="card-subtitle">Step {this.props.currentStep} of {this.props.totalSteps}</div> */}
            </div>
          
            {/* Map and Checkpoint */}
            <div className="cell grid-x grid-container grid-margin-x">
              <div className="cell large-8 thumbnail map-container" id="mapThumbnailContainerID">
                <Map
                  position={this.state.stepData.position}
                  // setPos={this.props.setPos}
                  map={this.state.stepData.map}
                  className="map"
                />
                <Checkpoint
                  position={this.state.stepData.position}
                />
              </div>

              {/* Descriptions */}
              <div className="cell large-4">
                {this.includeExtra()}

                <h5><b>are you at the right place?</b></h5>
                <h6>location description:</h6>
                <div>{this.state.stepData.description}</div>
                <br/>

                <h5><b>look around you.</b></h5>
                {/* <h6>answer the following question:</h6> */}
                <h6>{this.state.stepData.question}</h6>
                <div>
                  <br/>
                  <input 
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    type="text" 
                    placeholder="answer" 
                    required >
                  </input>
                </div>
                <div>( answer looks like: {this.answerHint(this.state.stepData.answer)} )</div>
                <br/>
                <div className="grid-x grid-container align-spaced grid-margin-x">
                  <button
                    // className="cell shrink button-rounded-hover">
                    onClick={this.handleSubmit}
                    className="button large warning">
                      {this.state.buttonText}
                  </button>
                </div> 
              </div>
            </div>
          </div>
        </div>

            
      );
    }
    else {
      return (
        <div>rendering</div>
      );
    }
  }
}

export default StepCardSeek;
