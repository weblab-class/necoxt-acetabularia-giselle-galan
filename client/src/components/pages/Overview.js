import React, { Component } from "react";
import StepCardSeek from "../modules/StepCardSeek.js";
import { get } from "../../utilities";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Seek.css";
import "../foundation.css";

// let treasure_id = "5e2bb5592e0d69799286d981";

class Overview extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      data: null,
      totalSteps: null,
    };
  }
    

  componentDidMount() {
    get(`/api/treasure`, { _id: this.props.treasure_id }).then((treasureMapObj) => {
    // get(`/api/treasure`, { _id: treasure_id }).then((treasureMapObj) => {
      this.setState({ data: treasureMapObj[0] })
      this.setState({ totalSteps: treasureMapObj[0].treasureSteps.length})
    });
  }
  
  render() {
    // treasure name/descp + creator user info
    // if found: treasure pic/descp, all steps (as thumbnails) w/ respective q&a's
    // if not found: hint of treasure + # of steps (blurred thumbnails of each map?)
    // if currently seeking: found locations + last location saved
    if (this.state.data) {
      console.log(this.state.data)
      return (
        <div className="pageContainer">
          <div className="title">
            <h1><b>map title</b></h1>
            <h3><i>{(this.state.data.creator_name).toLowerCase()} has hidden a treasure for you.</i></h3>
          </div>
          <div>You must visit {this.state.totalSteps} location(s) in order to find the treasure.</div>
          <div>You are on location _.</div>

          <div>This treasure has been found/is not found yet.</div>
          <div>__ users searched/are searching for this treasure.</div>
          <div><Link to={`/seek/${this.props.treasure_id}`} >Start/resume seeking.</Link></div>
        </div>
      );
    }
    else {
      return null;
    }
  }
  
}

export default Overview;