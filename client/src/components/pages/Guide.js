import React, { Component } from "react";
import { get } from "../../utilities";
import NavBar from "../modules/NavBar.js"

import "../../utilities.css";
import "../foundation.css";
import "./Collection.css"
import "../pages/Overview.css"


class Guide extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
    };
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <div className="pageContainer">
        <NavBar
          handleLogin={this.props.handleLogin}
          handleLogout={this.props.handleLogout}
          userId={this.props.userId}
        />

        <div className="u-title">
          .guide
        </div>
        <div className="u-subtitle">hi</div>

        <div className="box">
          <div className="u-textCenter">step1: hide your gold.</div>
        </div>

        <div className="box">
          <div className="u-textCenter">step2: create your map.</div>
        </div>

      </div>
    );
  }
}
  
export default Guide;