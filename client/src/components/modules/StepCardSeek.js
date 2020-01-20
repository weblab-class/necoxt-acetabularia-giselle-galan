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
        // clickPos: {
        //     x: null,
        //     y: null,
        //   },
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
      
      // card content v0
      // <div className="card-container">
      //   <div className="card-header">
      //     Step 1
      //   </div>
    <div>
      {/* <link
        rel="stylesheet"
        href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"
      /> */}
      <br/>

      {/* NavBar */}
      <div className="grid-x grid-container">
        <nav role="navigation" className="cell">
          <ul className="breadcrumbs">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/create/">Create</a>
            </li>
            <li>
              <span className="show-for-sr">Current: </span> Seek
          </li>
          </ul>
        </nav>
      </div>

      {/* card content */}
      <div className="grid-y grid-container card-container large">
        <div className="cell card-header">
          <div className="card-title">Let's find treasure.</div>
          <div className="card-subtitle">Location 1</div>
        </div>

        {/* map and checkpoint */}
        {/* <div className="map-container">
          <Map position={{x:660, y:590}} className="map"/>
          <div className="checkpoint" style={{top: 660, left: 590}}>
            <Checkpoint position={{x:660, y:590}}/>
          </div> 
        </div> */}

        {/* map data */}
        <div className="cell grid-x grid-container grid-margin-x">
            <div className="cell large-8 thumbnail map-container" id="mapThumbnailContainerID">
            </div>
            <div className="cell large-4">
            </div>
          </div>

        {/* description  */}
        <h5>Are you at the right location?</h5>
          <div className="cell description-container">
            <label> 
              <br/>
              <h6>Location description:</h6>
              <div>{this.props.description}</div>
              <br/>
              <h6>Answer the following question:</h6>
              <div>{this.props.question}</div>
              {/* <div>Enter answer:</div> */}
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
