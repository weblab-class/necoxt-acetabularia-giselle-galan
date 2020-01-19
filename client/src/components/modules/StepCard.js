import React, { Component } from "react";
import { get } from "../../utilities";
import Checkpoint from "./Checkpoint";
import Map from "./Map";

import "./StepCard.css";

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
class StepCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // map: "",
      // location: {xPosition: null, yPosition: null},
      // description: "",
      // question: "",
      // answer: "",
    };
  }

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
      <div className="card-container">
        <div className="card-header">
          Step 1
        </div>
        <div className="map-container">
          <Map position={this.props.position} className="map"/>
          <div className="checkpoint" style={{top: this.props.position.y, left: this.props.position.x}}>
            <Checkpoint position={this.props.position}/>
          </div>
          {/* <Checkpoint position={this.props.position} className="checkpoint"/> */}
        </div>
        <div className="description-container">
          <label>
            <input type="text" placeholder="Description" required ></input>
            <input type="text" placeholder="Question" required ></input>
            <input type="text" placeholder="Answer" required ></input>
          </label>
        </div>

      </div>
    );
  }
}

export default StepCard;
