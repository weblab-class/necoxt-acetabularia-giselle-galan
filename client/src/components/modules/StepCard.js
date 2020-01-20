import React, { Component } from "react";
import { get } from "../../utilities";
import Checkpoint from "./Checkpoint";
import Map from "./Map";

import "./StepCard.css";
import "../foundation.css"

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
      mapPosition: {
        x: null,
        y: null,
      },
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
      // <Test />
      // <MultistepCheckout />
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
              {/* <li>
              <a href="#">Create</a>
            </li> */}
              {/* <li className="disabled">Gene Splicing</li> */}
              <li>
                <span className="show-for-sr">Current: </span> Create
            </li>
            </ul>
          </nav>
        </div>

        {/* Card content */}
        <div className="grid-y grid-container card-container large">
          <div className="cell card-header">
            <div className="card-title">Now, Create Your Treasure Map!</div>
            <div className="card-subtitle">Step 1 of 1</div>
          </div>

          {/* Map and Checkpoint */}
          <div className="cell grid-x grid-container grid-margin-x">
            <div className="cell large-8 thumbnail map-container" id="mapThumbnailContainerID">
              <Map 
                clickPosition={this.props.clickPosition} 
                mapPosition={this.props.mapPosition} 
                getMousePos={this.props.getMousePos} 
                getMapPos={this.props.getMapPos} 
                className="map" 
              />
              <div 
                className="checkpoint" 
                style={{ 
                  top: this.props.clickPosition.y-this.props.mapPosition.y-48,  // 48 is image height
                  left: this.props.clickPosition.x-this.props.mapPosition.x-15, // 15 is half image width
              }}>
                <Checkpoint clickPosition={this.props.clickPosition} />
              </div>
              {/* <Checkpoint position={this.props.position} className="checkpoint"/> */}
            </div>
            <div className="cell large-4">
              <h5>Choose your map type</h5>
              <br/>
              <div className="grid-y grid-container align-centered">
                <select required >
                  <option value="state1">Campus Map</option>
                  <option value="state2">Tunnel Map</option>
                  <option value="state3">Floor Plan</option>
                </select>
                <p className="or-divider"><span>or</span></p>
                <label htmlFor="FoldMap" className="button">Upload Your Own Map</label>
              </div>
            </div>
          </div>

          <hr className="cell divider" />

          {/* Descriptions */}
          <h5>Tell us a hint to your treasure</h5>
          <div className="cell description-container">
            <label>
              <input type="text" placeholder="Description" required ></input>
              <input type="text" placeholder="Question" required ></input>
              <input type="text" placeholder="Answer" required ></input>
              <div className="grid-x grid-container align-spaced grid-margin-x">
                <button className="cell shrink button-rounded-hover">GO BACK</button>
                <button className="cell shrink button-rounded-hover">FINISH</button>
                <button className="cell shrink button-rounded-hover">NEXT STEP</button>
              </div>
              
            </label>
          </div>
          <br/>

        </div>
      </div>


    );
  }
}

export default StepCard;
