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
 * {
 * step_id: String,
 * step: Number,
 * map: String,
 * position: {
 *   x: Number,
 *   y: Number,
 * },
 * description: String,
 * question: String,
 * answer: String,
 * }
 */
class StepCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  onClickButton = (descriptions, type) => {
    let newData = {
      ...this.state.data, 
      description: descriptions.descriptionValue, 
      question: descriptions.questionValue, 
      answer: descriptions.answerValue,
    }

    switch (type) {
      case "Finish":
        this.props.finishCreate(newData);
        break;
      case "NextStep":
        this.props.nextStep(newData);
        break;
      case "PreviousStep":
        this.props.previousStep(newData);
        break;
      case "Delete":
        this.props.deleteStep();
        break;
    }

    this.setState({
      data: newData,
    })
  }

  componentDidMount() {
    this.setState({data: {...this.props.data}});
  }

  setPos = (event) => {
    let e = event || window.event;
    let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    let x = e.pageX || e.clientX + scrollX;
    let y = e.pageY || e.clientY + scrollY;
    let xMapContainer = document.getElementById('mapThumbnailContainerID').offsetLeft;
    let yMapContainer = document.getElementById('mapThumbnailContainerID').offsetTop;
    // let xMap = document.getElementById('imageID').offsetLeft;
    // let yMap = document.getElementById('imageID').offsetTop;
    let xMap = 4; // border from thumbnail
    let yMap = 4; // border from thumbnail
    this.setState({data: 
      {...this.state.data, position: {x: x-xMapContainer-xMap, y: y-yMapContainer-yMap},}
    });
  }

  clearCheckpoint = () => {
    this.setState({data:
      {...this.state.data, position: {x: null, y: null,}},
    });
  }

  changeMap = (event) => {
    this.setState({data:
      {...this.state.data, map: event.target.value},
    })
  }

  render() {
    if (this.state.data) {
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
          <div className="grid-x grid-container">
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
          </div>
  
          {/* Card content */}
          <div className="grid-y grid-container card-container large">
            <div className="cell card-header">
              <div className="card-title">Now, Create Your Treasure Map!</div>
              <div className="card-subtitle">Step {this.props.currentStep} of {this.props.totalSteps}</div>
            </div>
  
            {/* Map and Checkpoint */}
            <div className="cell grid-x grid-container grid-margin-x">
              <div className="cell large-8 thumbnail map-container" id="mapThumbnailContainerID">
                <Map
                  position={this.state.data.position}
                  setPos={this.setPos}
                  map={this.state.data.map}
                  className="map"
                />
                <Checkpoint
                  position={this.state.data.position}
                  clearCheckpoint={this.clearCheckpoint}
                />
              </div>
              <div className="cell large-4">
                <h5>Choose your map type</h5>
                <br />
                <div className="grid-y grid-container align-centered">
                  <select defaultValue={this.state.data.map} onChange={this.changeMap} required >
                    {/* {this.state.data.map === "CampusMap" ? (<option selected="selected" value="CampusMap">Campus Map</option>) : (<option value="CampusMap">Campus Map</option>)}
                    {this.state.data.map === "TunnelMap" ? (<option selected="selected" value="TunnelMap">Campus Map</option>) : (<option value="TunnelMap">Campus Map</option>)} */}
                    <option value="CampusMap">Campus Map</option>
                    <option value="TunnelMap">Tunnel Map</option>
                    {/* <option value="FloorPlan">Floor Plan</option> */}
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
              <Descriptions
                descriptionValue={this.state.data.description}
                questionValue={this.state.data.question}
                answerValue={this.state.data.answer}
                onClickButton={this.onClickButton}
              />
            </div>
            <br />
  
          </div>
        </div>
      );
    } else {
      return (
        <div>rendering...</div>
      );
    }
    
  }
}

export default StepCard;
