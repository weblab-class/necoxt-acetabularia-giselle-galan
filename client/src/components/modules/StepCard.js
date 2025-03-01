import React, { Component } from "react";
import { get } from "../../utilities";
import { post } from "../../utilities";
import Checkpoint from "./Checkpoint";
import Map from "./Map";
import Descriptions from "./Descriptions";

import "./StepCard.css";
import "../foundation.css"
import "../../utilities.css";

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
      upLoadedFile: null,
    };
  }

  checkValidInput = (newData) => {
    if (!newData.description) {
      alert("Please enter the description of your treasure!");
      return false;
    } else if (!newData.question) {
      alert("Please enter the question for verification!");
      return false;
    } else if (!newData.answer) {
      alert("Please enter answer to your question!");
      return false;
    } else if (!(newData.position.x || newData.position.y)) {
      return (confirm("Are you sure you don't need to place a checkpoint?"));
    } else {
      return true;
    }
  }

  checkEmptyState = (newData) => {
    if (
      !(this.props.currentStep > 1
        || (newData.map != "CampusMap")
        || newData.ownMap
        || newData.position.x 
        || newData.position.y 
        || newData.description
        || newData.question
        || newData.answer)
    ) {
      return true;
    } else {
      return false;
    }
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
        this.checkValidInput(newData) ? this.props.finishCreate(newData) : null;
        break;
      case "NextStep":
        this.checkValidInput(newData) ? this.props.nextStep(newData) : null;
        break;
      case "PreviousStep":
        this.props.previousStep(newData);
        break;
      case "Delete":
        this.checkEmptyState(newData) ? alert("This is the first step!") : this.props.deleteStep();
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
    let xMap = 4; // border from thumbnail
    let yMap = 4; // border from thumbnail
    let xPercent = (x-xMapContainer-xMap)/document.getElementById('mapThumbnailContainerID').clientWidth;
    let yPercent = (y-yMapContainer-yMap)/document.getElementById('mapThumbnailContainerID').clientHeight;
    this.setState({data: 
      {...this.state.data, position: {x: xPercent, y: yPercent},}
    });
  }

  clearCheckpoint = () => {
    this.setState({data:
      {...this.state.data, position: {x: null, y: null,}},
    });
  }

  changeMap = (event) => {
    this.setState({data:
      {...this.state.data, map: event.target.value, ownMap: null,},
      upLoadedFile: null,
    })
  }

  isFileImage = (file) => {
      const acceptedImageTypes = ['image/jpg', 'image/jpeg', 'image/png'];
  
      return file && acceptedImageTypes.includes(file['type']);
  }

  checkFileSize = (file) => {
    return file && (file['size'] < 1024*1024*5);
  }

  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    this.setState({
      upLoadedFile: file,
    });
  }

  uploadHandler = () => {
    if (this.isFileImage(this.state.upLoadedFile)) {
      if (this.checkFileSize(this.state.upLoadedFile)) {
        let reader = new FileReader();
        reader.onloadend = function () {
          this.setState({data:
            {...this.state.data,
              ownMap: {
                imgSrc: reader.result,
                imgName: this.state.upLoadedFile.name,
                imgSize: this.state.upLoadedFile.size,
                imgType: this.state.upLoadedFile.type,
              },
              map: "OwnMap",
            },
          });
        }.bind(this);
        reader.readAsDataURL(this.state.upLoadedFile);
      } else {
        alert("Image size should be smaller than 5MB!")
      }
    } else {
      alert("Please upload a valid image!")
    }
  }

  render() {
    // console.log(this.state)
    if (this.state.data) {
      return (
        <div>
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
              {/* <div className="card-title">Now, Create Your Treasure Map!</div> */}
              <div className="u-heading">location {this.props.currentStep} of {this.props.totalSteps}</div>
              {/* <div className="card-subtitle">Step {this.props.currentStep} of {this.props.totalSteps}</div> */}
            </div>
  
            {/* Map and Checkpoint */}
            <div className="cell grid-x grid-container grid-margin-x">
              <div className="cell large-8 thumbnail map-container" id="mapThumbnailContainerID">
                <Map
                  position={this.state.data.position}
                  setPos={this.setPos}
                  map={this.state.data.map}
                  ownMap={this.state.data.ownMap}
                  className="map"
                />
                <Checkpoint
                  position={this.state.data.position}
                  clearCheckpoint={this.clearCheckpoint}
                />
              </div>
              <div className="cell large-4">
                <div className="u-textCenter u-heading">1. choose your map type</div>
                <br />
                <div className="grid-y grid-container align-centered">
                  <select defaultValue={this.state.data.map} onChange={this.changeMap} required >
                    {/* {this.state.data.map === "CampusMap" ? (<option selected="selected" value="CampusMap">Campus Map</option>) : (<option value="CampusMap">Campus Map</option>)}
                    {this.state.data.map === "TunnelMap" ? (<option selected="selected" value="TunnelMap">Campus Map</option>) : (<option value="TunnelMap">Campus Map</option>)} */}
                    <option value="CampusMap">Campus Map</option>
                    <option value="TunnelMap">Tunnel Map</option>
                    {/* <option value="OwnMap">Your Own Map</option> */}
                    {/* <option value="FloorPlan">Floor Plan</option> */}
                  </select>
                  <p className="or-divider"><span>or</span></p>
                  <input type="file" onChange={this.fileChangedHandler} className="button u-textCenter"/>
                  {this.state.upLoadedFile
                    ? (<button onClick={this.uploadHandler} className="button">Upload!</button>)
                    : null
                  }
                  {/* <label htmlFor="FoldMap" className="button">Upload Your Own Map</label> */}
                  <br />
                  <div className="u-textCenter u-heading">2. mark a location on the map</div>
                                  </div>
              </div>
            </div>
  
            <hr className="cell divider" />
  
            {/* Descriptions */}
            <div className="u-heading">describe the location:</div>
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
