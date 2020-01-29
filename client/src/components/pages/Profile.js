const mongoose = require('mongoose');

import React, { Component } from "react";
import NavBar from "../modules/NavBar.js";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import { get } from "../../utilities";
import { post } from "../../utilities";
import AboutMe from "../modules/AboutMe.js";


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
    this.state = {
      viewerId: null,
      profileName: null,
      profileId: null,
      profileDescription: null,
      tagSelection: "AboutMe",
    };
  }

  componentDidMount() {
    document.title = "User Profile";
    // console.log(1, this.props.userId);
    get("/api/whoami").then((user) => {
      if (user._id) {
        this.setState({ viewerId: user._id });
      }
    });
    get("/api/user", {_id: this.props.userId}).then((user) => {
      // console.log(2, user);
      this.setState({
        profileName: user[0].name,
        profileId: this.props.userId,
      });
    });
  }

  changeTag = (newTag) => {
    this.setState({
      tagSelection: newTag,
    });
  }

  tagClass = (tagName) => {
    return (
      this.state.tagSelection === tagName 
      ? "underline-from-center-static"
      : "underline-from-center"
    )
  }

  render() {
    return (
      <>
      <div className="profile-background" style={{"border": "1px dashed",}}>
      {/* <div className="profile-background"> */}
        <NavBar 
          handleLogin={this.props.handleLogin}
          handleLogout={this.props.handleLogout}
          userId={this.props.userId}
        />
        <div className="profile-avatarContainer" style={{"border": "1px dashed",}}>
        {/* <div className="profile-avatarContainer"> */}
          <div className="profile-avatar" style={{"border": "1px dashed",}}>
          {/* <div className="profile-avatar"> */}
            <div className="profile-picture-container" style={{"border": "1px red dashed",}}>
            {/* <div className="profile-picture-container"> */}
              <div className="profile-picture" style={{"border": "1px red dashed",}} />
              {/* <div className="profile-picture" /> */}
            </div>
            <div className="profile-descriptions" style={{"border": "1px red dashed",}}>
            {/* <div className="profile-descriptions"> */}
              {/* <div className="profile-name" style={{"border": "1px red dashed",}}>Tamsen Vlasta</div> */}
              <div className="profile-name" style={{"border": "1px red dashed",}}>{this.state.profileName}</div>
              {/* <div className="profile-name">{this.state.profileName}</div> */}
              <div className="profile-line" style={{"border": "1px red dashed",}}>
              {/* <div className="profile-line"> */}
                <p className="pin icon"/> 
                {this.state.profileDescription 
                  ? <p className="profile-line-content">{this.state.profileDescription}</p>
                  : <p className="profile-line-content">Somewhere on the earth</p>
                }
              </div>
            </div>
          </div>
          <div className="profile-subContainer" style={{"border": "1px dashed",}}>
          {/* <div className="profile-subContainer"> */}
            <nav className="hover-underline-menu" style={{"border": "1px dashed",}}>
            {/* <nav className="hover-underline-menu"> */}
              <ul className="menu">
                <li><a className={this.tagClass("AboutMe")} onClick={() => this.changeTag("AboutMe")} href="#">About Me</a></li>
                <li><a className={this.tagClass("Created")} onClick={() => this.changeTag("Created")} href="#">Created</a></li>
                <li><a className={this.tagClass("Searched")} onClick={() => this.changeTag("Searched")} href="#">Searched</a></li>
                <li><a className={this.tagClass("Liked")} onClick={() => this.changeTag("Liked")} href="#">Liked</a></li>
                {/* <li><a className="underline-from-center" href="#">About Me</a></li>
                <li><a className="underline-from-center" href="#">Created</a></li>
                <li><a className="underline-from-center" href="#">Searched</a></li>
                <li><a className="underline-from-center" href="#">Liked</a></li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <AboutMe />
      </>
    );
  }
}

export default Profile;
