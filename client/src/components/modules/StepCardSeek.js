import React, { Component } from "react";
import { get } from "../../utilities";
import Checkpoint from "./Checkpoint";
import Map from "./Map";
import CheckAnswer from "./CheckAnswer.js"

import "./StepCardSeek.css";

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
        clickPos: {
            x: null,
            y: null,
          },
      // map: "",
      // location: {xPosition: null, yPosition: null},
      // description: "",
      // question: "",
      // answer: "",
    };
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({
      userInput: input
    });
  };

  componentDidMount() {
    // get("/api/comment", { parent: this.props._id }).then((comments) => {
    //   this.setState({
    //     comments: comments,
    //   });
    // });
  }

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  // addNewComment = (commentObj) => {
  //   this.setState({
  //     comments: this.state.comments.concat([commentObj]),
  //   });
  // };

  render() {
    return (
      // hard-coded map data: map type = campus map + checkpoint
      // display relevant location data (descript, q&a)
      // check for correctness of answer 
      <div className="card-container">
        <div className="card-header">
          Step 1
        </div>
        <div className="map-container">
          <Map position={{x:660, y:590}} className="map"/>
          <div className="checkpoint" style={{top: 660, left: 590}}>
            <Checkpoint position={{x:660, y:590}}/>
          </div> 
        </div>
        <div className="description-container">
          <label> 
            <div>{this.props.description}</div>
            <div>{this.props.question}</div>
            <div>Enter answer:</div>
            <input 
              value={this.state.userInput}
              onChange={this.handleChange}
              type="text" 
              placeholder="Answer" 
              required >
            </input>
            <CheckAnswer user_input={this.state.userInput} answer={this.props.answer} /> 
          </label>
        </div>
      </div>
    );
  }
}

export default StepCardSeek;
