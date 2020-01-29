import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import logo from "../../public/logo_2.png";

import "./NavBar.css";

// This identifies your web application to Google's authentication service
// const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";
const GOOGLE_CLIENT_ID = "387931991633-7v7bv90k3t89b12vr5lhlf7369tolad1.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="NavBar-container grid-x align-justify">
        {/* <div className="NavBar-title u-inlineBlock">Catbook</div> */}
        <div className="cell shrink NavBar-linkContainer">
          <img src={logo} className="logo"/>
          {/* <div className="hover-underline-menu" style={{"border": "1px white dashed",}}> */}
          <div className="hover-underline-menu">
            {/* <div className="menu-container" style={{"border": "1px white dashed",}}> */}
            <div className="menu-container">
              {/* <Link to="/" className="underline-from-center" style={{"border": "1px white dashed",}}>Home</Link> */}
              <Link to="/" className="underline-from-center"><b>home</b></Link>
              {/* <Link to="/create/" className="underline-from-center" style={{"border": "1px white dashed",}}>Create</Link> */}
              <Link to="/create/" className="underline-from-center"><b>create</b></Link>
              {/* <Link to="/maps/" className="underline-from-center" style={{"border": "1px white dashed",}}>Maps</Link> */}
              <Link to="/maps/" className="underline-from-center"><b>maps</b></Link>
              {this.props.userId ? (
              <Link to={`/profile/${this.props.userId}`} className="underline-from-center">Profile</Link>
              ) : null}
            </div>
          </div>
        </div>
        <div className="cell shrink">
        {this.props.userId ? (
              <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={this.props.handleLogout}
                onFailure={(err) => console.log(err)}
                className="NavBar-link NavBar-login"
              />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.props.handleLogin}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;
