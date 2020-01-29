import React, { Component } from "react";
import StepCardSeek from "../modules/StepCardSeek.js";
import { get } from "../../utilities";
import { navigate } from "@reach/router";
import NavBar from "../modules/NavBar";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
// import "./Seek.css";
import "../foundation.css";
// import "../pages/Collection.css";
import "../pages/Overview.css";

// let treasure_id = "5e2bb5592e0d69799286d981";

class OverviewSeek extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      data: null,
      totalSteps: null,
    };
  }

  progressBar = () => {
    // console.log(this.state.data);
    if (this.state.data) {
      let steps = this.state.data.treasureSteps;
      steps = steps.map((step, i) => (
          // console.log(step)
          // <li className="is-complete" data-step={step.step.toString()} />
        <li className="is-complete" data-step={(i+1).toString()} />
      ));
    return steps;
    }
  }

  handleSubmit = (event) => {
    navigate(`/seek/${this.props.treasure_id}`);
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
    // console.log(this.props.treasure_id)
    if (this.state.data) {
      // console.log(this.state.data)
      return (
        <div className="pageContainer">
          <NavBar
            handleLogin={this.props.handleLogin}
            handleLogout={this.props.handleLogout}
            userId={this.props.userId}
          />

          <div className="title">map title here</div>
          <div className="subtitle">{this.state.data.creator_name} has hidden a treasure for you.</div>

          <div className="box">
            <div className="u-textCenter">image here</div>
            <div>
            <div className="u-textCenter subtitle">is this treasure right for you?</div>
            <div className="body">according to {this.state.data.creator_name}, this treasure can normally be found in: <b>[destination here]</b>.
            <br/>
            and it would be especially appreciated by: <b>[type of person here]</b></div>
            </div>
            <div className="u-textCenter subtitle">you must visit {this.state.totalSteps} location(s) in order to find the treasure.</div>
            <div className="u-textCenter">
              <ol className="progress-indicator">
                {this.progressBar()}
              </ol> 
            </div>
            <div className="u-textCenter">
              <button
                onClick={this.handleSubmit}
                className="button large warning u-rounded">
                  start seeking
              </button>
              {/* <Link to={`/seek/${this.props.treasure_id}`} >Start/resume seeking.</Link> */}
            </div>
          </div>

        </div>
      );
    }
    else {
      return null;
    }
  }
  
}

export default OverviewSeek;