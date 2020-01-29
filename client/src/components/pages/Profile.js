const mongoose = require('mongoose');

import React, { Component } from "react";
import ContentEditable from 'react-contenteditable';
import moment from 'moment'; 
// moment.locale('us'); 
import NavBar from "../modules/NavBar.js";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import { get } from "../../utilities";
import { post } from "../../utilities";
import Created from "../modules/Created.js";


import "../../utilities.css";
import "./Profile.css";
import "../foundation.css";

/**
 * 
 * 
 */
const defaultDescription = "<p>Somewhere on the earth</p>";
const defaultTitle = "SONG OF MYSELF";
const defaultContent = "<p>I celebrate myself, and sing myself,<br />And what I assume you shall assume,<br />For every atom belonging to me as good belongs to you.<br /></p><p>I loafe and invite my soul,<br />I lean and loafe at my ease observing a spear of summer grass.<br /></p><p>My tongue, every atom of my blood, form’d from this soil, this air,<br />Born here of parents born here from parents the same, and their parents the same,<br />I, now thirty-seven years old in perfect health begin,<br />Hoping to cease not till death.</p><p>Creeds and schools in abeyance,<br />Retiring back a while sufficed at what they are, but never forgotten,<br />I harbor for good or bad, I permit to speak at every hazard,<br />Nature without check with original energy.</p>";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.contentEditable_1 = React.createRef();
    this.contentEditable_2 = React.createRef();
    this.contentEditable_3 = React.createRef();
    // Initialize Default State
    this.state = {
      // user: null,
      viewerGoogleId: null,
      profileDescription: defaultDescription,
      aboutMe: {
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        title: defaultTitle,
        content: defaultContent,
      },
      tagSelection: "AboutMe",
      profileModified: false,
    };
  }

  componentDidMount() {
    document.title = "User Profile";
    // console.log(1, this.props.viewerId);
    get("/api/whoami").then((user) => {
      // console.log(1, user);
      if (user.googleid) {
        this.setState({ viewerGoogleId: user.googleid });
      }
    });
    get("/api/user_googleId", this.props.user).then((user) => {
      // console.log(user);
      let profileDescription = this.state.profileDescription;
      let aboutMe = this.state.aboutMe;
      (user[0] && user[0].profileDescription) ? profileDescription = user[0].profileDescription : null;
      (user[0] && user[0].aboutMe) ? aboutMe = user[0].aboutMe : null;
      this.setState({
        profileDescription: profileDescription,
        aboutMe: aboutMe,
      });
    });
  }

  changeTag = (newInput) => {
    this.setState({
      tagSelection: newInput,
    });
  }

  changeProfileDescription = (event) => {
    this.setState({
      profileDescription: event.target.value,
      profileModified: true,
    });
  }

  changeAboutMeTitle = (event) => {
    this.setState({aboutMe:
      {...this.state.aboutMe, date: moment().format("MMMM Do YYYY, h:mm:ss a"), title: event.target.value,},
      profileModified: true,
    });
  }

  changeAboutMeContent = (event) => {
    this.setState({aboutMe:
      {...this.state.aboutMe, date: moment().format("MMMM Do YYYY, h:mm:ss a"), content: event.target.value,},
      profileModified: true,
    });
  }

  onSave = () => {
    this.setState({
      profileModified: false,
    });
    let profileDescription = null;
    let aboutMe = null;
    (defaultDescription !== this.state.profileDescription) ? profileDescription = this.state.profileDescription : null;
    (defaultTitle !== this.state.aboutMe.title && defaultContent === this.state.aboutMe.content) ? aboutMe = this.state.aboutMe : null;
    post("/api/user_profile", {
      profileDescription: profileDescription,
      aboutMe: aboutMe,
    })
  }

  tagClass = (tagName) => {
    return (
      this.state.tagSelection === tagName 
      ? "underline-from-center-static"
      : "underline-from-center"
    )
  }

  editableStatus = () => (this.props.user.googleid !== this.state.viewerGoogleId);

  render() {
    // console.log(this.props);
    if (this.props.user && this.state.viewerGoogleId){
      return (
        <>
        {/* <div className="profile-background" style={{"border": "1px dashed",}}> */}
        <div className="profile-background">
          <NavBar 
            handleLogin={this.props.handleLogin}
            handleLogout={this.props.handleLogout}
            userId={this.props.user._id}
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
                {/* <div className="profile-name" style={{"border": "1px red dashed",}}>{this.props.user.name}</div> */}
                <div className="profile-name">{this.props.user.name}</div>
                {/* <div className="profile-line" style={{"border": "1px red dashed",}}> */}
                <div className="profile-line">
                  <div className="pin icon"/> 
                  <div className="profile-line-container">
                    <ContentEditable 
                      innerRef={this.contentEditable_1}
                      disabled={this.editableStatus()}
                      html={this.state.profileDescription}
                      onChange = {this.changeProfileDescription}
                    />
                  </div>
                  {/* {console.log(this.state.profileDescription)} */}
                </div>
              </div>
            </div>
            {/* <div className="profile-subContainer" style={{"border": "1px dashed",}}> */}
            <div className="profile-subContainer">
              {/* <nav className="hover-underline-menu" style={{"border": "1px dashed",}}> */}
              <nav className="hover-underline-menu">
                <ul className="menu">
                  <li><a className={this.tagClass("AboutMe")} onClick={() => this.changeTag("AboutMe")} href="#">About Me</a></li>
                  <li><a className={this.tagClass("Created")} onClick={() => this.changeTag("Created")} href="#">Created</a></li>
                  {/* <li><a className={this.tagClass("Searched")} onClick={() => this.changeTag("Searched")} href="#">Searched</a></li> */}
                  {/* <li><a className={this.tagClass("Liked")} onClick={() => this.changeTag("Liked")} href="#">Liked</a></li> */}
                  {this.state.profileModified ? <li><a className="underline-from-center" onClick={() => this.onSave()} href="#">Save</a></li> : null}
                  {/* <li><a className="underline-from-center" href="#">About Me</a></li>
                  <li><a className="underline-from-center" href="#">Created</a></li>
                  <li><a className="underline-from-center" href="#">Searched</a></li>
                  <li><a className="underline-from-center" href="#">Liked</a></li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        { this.state.tagSelection == "AboutMe" ? 
          <div className="simple-article-header grid-container" style={{"border": "transparent"}}>
            <h4 className="article-title">
              <ContentEditable 
                innerRef={this.contentEditable_2}
                disabled={this.editableStatus()}
                html={this.state.aboutMe.title}
                onChange = {this.changeAboutMeTitle}
              />
            </h4>
            <p className="article-date-read">Updated on: {this.state.aboutMe.date}</p>
            <div className="divider"/>
            <br/>
            <div className="article-post-content">
              <ContentEditable 
                innerRef={this.contentEditable_3}
                disabled={this.editableStatus()}
                html={this.state.aboutMe.content}
                onChange = {this.changeAboutMeContent}
              />
            </div>
          </div>
          : null
        }
        {this.state.tagSelection == "Created" ? 
          <Created 
            user={this.props.user}
          />
          : null
        }
        {this.state.tagSelection == "Searched" ? 
          null
          : null
        }
        {this.state.tagSelection == "Liked" ? 
          null
          : null
        }
        </>
      );
    } else {
      return (
        <div className="profile-background">
          <NavBar 
            handleLogin={this.props.handleLogin}
            handleLogout={this.props.handleLogout}
            userId={null}
          />
        </div>
      );
    }
  }
}

export default Profile;
