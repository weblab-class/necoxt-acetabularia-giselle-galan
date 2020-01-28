const mongoose = require('mongoose');

import React, { Component } from "react";
import NavBar from "../modules/NavBar.js";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import { get } from "../../utilities";
import { post } from "../../utilities";


import "../../utilities.css";
import "./Profile.css";
import "../foundation.css";

/**
 * 
 * 
 */

class Profile extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    document.title = "User Profile";
  }

  render() {
    return (
      <>
      {/* <div className="profile-background" style={{"border": "1px dashed",}}> */}
      <div className="profile-background">
        <NavBar 
          handleLogin={this.props.handleLogin}
          handleLogout={this.props.handleLogout}
          userId={this.props.userId}
        />
        {/* <div className="profile-avatarContainer" style={{"border": "1px dashed",}}> */}
        <div className="profile-avatarContainer">
          {/* <div className="profile-avatar" style={{"border": "1px dashed",}}> */}
          <div className="profile-avatar">
            {/* <div className="profile-picture-container" style={{"border": "1px red dashed",}}> */}
            <div className="profile-picture-container">
              {/* <div className="profile-picture" style={{"border": "1px red dashed",}} /> */}
              <div className="profile-picture" />
            </div>
            {/* <div className="profile-descriptions" style={{"border": "1px red dashed",}}> */}
            <div className="profile-descriptions">
              {/* <div className="profile-name" style={{"border": "1px red dashed",}}>Tamsen Vlasta</div> */}
              <div className="profile-name">Tamsen Vlasta</div>
              {/* <div className="profile-line" style={{"border": "1px red dashed",}}> */}
              <div className="profile-line">
                <p className="pin icon"/> 
                {/* <p className="profile-line-content" style={{"border": "1px white dashed",}}>Massachusetts Institute of Technology</p> */}
                <p className="profile-line-content">Massachusetts Institute of Technology</p>
              </div>
              {/* <div className="pin icon profile-line">Massachusetts Institute of Technology</div> */}
            </div>
          </div>
          {/* <div className="profile-subContainer" style={{"border": "1px dashed",}}> */}
          <div className="profile-subContainer">
            {/* <nav className="hover-underline-menu" style={{"border": "1px dashed",}}> */}
            <nav className="hover-underline-menu">
              <ul className="menu">
                <li><a className="underline-from-center" href="#">About Me</a></li>
                <li><a className="underline-from-center" href="#">Created</a></li>
                <li><a className="underline-from-center" href="#">Searched</a></li>
                <li><a className="underline-from-center" href="#">Liked</a></li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <div className="grid-container large profile-card">
          <div className="grid-y">
            <div className="cell profile-avatarContainer" style={{"border": "1px dashed",}}>
              <br />
              <div className="profile-avatar" />
              <br />
            </div>
            <div className="cell" style={{"border": "1px dashed",}}>
              <h2 className="profile-name" style={{"textAlign": "center",}}>Name</h2>
              <h4 className="profile-descriptions" style={{"textAlign": "center",}}>Description about yourself</h4>
            </div>
            <nav className="hover-underline-menu" style={{"border": "1px dashed",}}>
              <ul className="menu align-center">
                <li><a className="underline-from-center" href="#">About Me</a></li>
                <li><a className="underline-from-center" href="#">Created</a></li>
                <li><a className="underline-from-center" href="#">Searched</a></li>
              </ul>
            </nav>
          </div>
        </div> */}
      </div>
      </>
    );
  }
}

export default Profile;
