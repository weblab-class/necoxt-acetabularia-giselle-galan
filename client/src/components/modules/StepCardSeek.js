import React, { Component } from "react";
import { get } from "../../utilities";
import Checkpoint from "./Checkpoint";
import Map from "./Map";
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
    };
  }

  handleSubmit = () => {
    if (this.state.lastStep) {
      alert("you are done");
    }
    else {
      if (this.state.stepData.answer.toLowerCase() == this.state.userInput.toLowerCase()) {
        alert("correct");

        let nextStep = this.state.currentStep + 1;
        let finalStep = this.state.totalSteps-1;

        nextStep == finalStep && this.setState({ lastStep: true });

        this.setState({ currentStep: nextStep });
        this.setState({ userInput: "" })
        this.setState({ stepData: this.props.data[nextStep]})
      }
      else {
        alert("try again");
        this.setState({userInput: ""})
      }  
    }
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({ userInput: input });
  };

  WordCount = (str) => { 
    return str.split(" ").length;
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
        {/* <link
          rel="stylesheet"
          href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"
        /> */}
        <br/>

        {/* Card container */}
        <div className="grid-y grid-container card-container large">
          <div className="cell card-header">
            <div className="card-title">Let's find treasure.</div>
            <div className="card-subtitle">Location {this.state.stepData.step}</div>
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
                  // clearCheckpoint={this.props.clearCheckpoint}
                />
              </div>
              <div className="cell large-4">
                <h5>step {this.state.stepData.step_id}</h5>
                {/* <h4>HINT: THE ANSWER IS {this.props.data.answer}</h4> */}
                <h5>TO-DO</h5>
                <br />
                <div className="grid-y grid-container align-centered">
                  {/* <h6>- add map title + creator info</h6> */}
                  <h6>- add creator content (eg. interesting info about this location)</h6>
                </div>
              </div>
            </div>

            <hr className="cell divider" />

          {/* Description  */}
          <h5>Are you at the right location?</h5>
            <div className="cell description-container">
              <label> 
                <br/>
                <h6>Location description:</h6>
                <div>{this.state.stepData.description}</div>
                <br/>
                <h6>Answer the following question:</h6>
                
                <div>{this.state.stepData.question}</div>
                <div>
                  <br/>
                  <input 
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    type="text" 
                    placeholder="Answer" 
                    required >
                  </input>
                </div>
                <div>[The answer's length is {this.WordCount(this.state.stepData.answer)} word(s) or number(s)]</div>
                <div className="grid-x grid-container align-spaced grid-margin-x">
                  <button
                    // className="cell shrink button-rounded-hover">
                    onClick={this.handleSubmit}
                    className="button large warning">
                      submit
                  </button>
                </div>         
                <br/>
              </label>
            </div>
            <br/>
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
