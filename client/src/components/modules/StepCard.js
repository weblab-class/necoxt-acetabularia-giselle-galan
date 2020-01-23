import React, { Component } from "react";
import { get } from "../../utilities";
import { post } from "../../utilities";
import Checkpoint from "./Checkpoint";
import Map from "./Map";
import Descriptions from "./Descriptions";

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
 * @param {{x: Number, y: Number}} position of the checkpoint
 * @param {() => void} setPos: (function) triggered when click on the map
 * @param {() => void} clearCheckpoint: (function) triggered when click on clear button, make checkpoint and clear button disappear
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
      mapSelection: "CampusMap", // CampusMap(default), TunnelMap, FloorPlan
    };
  }

  componentDidMount() {
    // get("/api/comment", { parent: this.props._id }).then((comments) => {
    //   this.setState({
    //     comments: comments,
    //   });
    // });
  }

  changeMap = (event) => {
    this.setState({ mapSelection: event.target.value })
  }

  sendMapContent = (value) => {
    const body = {
      // creator_id: String,
      // creator_name: String,
      map: this.state.mapSelection,
      position: {
        x: this.props.position.x,
        y: this.props.position.y,
      },
      description: value.descriptionValue,
      question: value.questionValue,
      answer: value.answerValue,
    };
    post("/api/checkpoint", body).catch(err => {
      if (err.statusText === "Unauthorized") {
        alert("Please Login");
      }
    });
  }

  render() {
    return (
      // <Test />
      // <MultistepCheckout />
      <div>
        {/* <link
          rel="stylesheet"
          href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"
        /> */}
        <br />

        {/* NavBar */}
        {/* <div className="grid-x grid-container">
          <nav role="navigation" className="cell">
            <ul className="breadcrumbs">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span className="show-for-sr">Current: </span> Create
            </li>
            </ul>
          </nav>
        </div> */}

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
                position={this.props.position}
                setPos={this.props.setPos}
                mapSelection={this.state.mapSelection}
                className="map"
              />
              <Checkpoint
                position={this.props.position}
                clearCheckpoint={this.props.clearCheckpoint}
              />
            </div>
            <div className="cell large-4">
              <h5>Choose your map type</h5>
              <br />
              <div className="grid-y grid-container align-centered">
                <select onChange={this.changeMap} required >
                  <option value="CampusMap">Campus Map</option>
                  <option value="TunnelMap">Tunnel Map</option>
                  {/* <option value="FloorPlan">Floor Plan</option> */}
                </select>
                <p className="or-divider"><span>or</span></p>
                <label htmlFor="FoldMap" 
                className="button expanded warning">
                  Upload Your Own Map</label>
              </div>
            </div>
          </div>

          <hr className="cell divider" />

          {/* Descriptions */}
          <h5>Tell us a hint to your treasure</h5>
          <div className="cell description-container">
            <Descriptions onFinish={this.sendMapContent}/>
          </div>
          <br />

        </div>
      </div>


    );
  }
}

export default StepCard;
