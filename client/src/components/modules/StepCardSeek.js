import React, { Component } from "react";
import { get } from "../../utilities";
import Checkpoint from "./Checkpoint";
import Map from "./Map";
import CheckAnswer from "./CheckAnswer.js"

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
    };
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({
      userInput: input
    });
  };

  WordCount = (str) => { 
    return str.split(" ").length;
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
          <div className="card-subtitle">Location 1</div>
        </div>
        
        {/* Map and Checkpoint */}
        <div className="cell grid-x grid-container grid-margin-x">
            <div className="cell large-8 thumbnail map-container" id="mapThumbnailContainerID">
              <Map
                position={this.props.position}
                // setPos={this.props.setPos}
                mapSelection={this.props.map}
                className="map"
              />
              <Checkpoint
                position={this.props.position}
                clearCheckpoint={this.props.clearCheckpoint}
              />
            </div>
            <div className="cell large-4">
              <h5>{this.props._id}</h5>
              <h4>HINT: THE ANSWER IS {this.props.answer}</h4>
              <h5>TO-DO</h5>
              <br />
              <div className="grid-y grid-container align-centered">
                <h6>- add map title + creator info</h6>
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
              <div>{this.props.description}</div>
              <br/>
              <h6>Answer the following question:</h6>
              <div>[The answer's length is {this.WordCount(this.props.answer)} word(s) or number(s)]</div>
              <div>{this.props.question}</div>
              <input 
                value={this.state.userInput}
                onChange={this.handleChange}
                type="text" 
                placeholder="Answer" 
                required >
              </input>
              <CheckAnswer user_input={this.state.userInput} answer={this.props.answer} /> 
              <br/>
            </label>
          </div>
          <br/>

      </div>
      </div>
    );
  }
}

export default StepCardSeek;
