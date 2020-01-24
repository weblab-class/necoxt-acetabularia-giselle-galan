import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Home.css";
import "../foundation.css"

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

class Home extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
        <div className="hero-full-screen">

          <div className="top-content-section">
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="menu">
                  {/* <li className="menu-text"><img src="http://placehold.it/75x30" alt="logo" /></li> */}
                  {/* <li><a href="/">home</a></li> */}
                  {/* <li><a href="/create/">create</a></li> */}
                  {/* <li><a href="/seek/">seek</a></li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="middle-content-section">
            <h1><b>campus treasure maps</b></h1>
            <h3>x marks the spot</h3>
            <br/>
            <Link to="/create/" >
              <button className="button large warning">create a map</button>
            </Link>
            <div></div>
            <Link to="/maps/" >
              <button className="button large warning">seek treasure</button>
            </Link>
            
          </div>
          <div></div>

          {/* <div className="bottom-content-section" data-magellan data-threshold="0">
            <a href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg></a>
          </div> */}

        </div>

        // {/* <div id="main-content-section" data-magellan-target="main-content-section">stuff</div> */}
  

    
        /* {this.props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.props.handleLogout}
            onFailure={(err) => console.log(err)}
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.props.handleLogin}
            onFailure={(err) => console.log(err)}
          />
        )} */
        /* <h1>Good luck on your project :)</h1>
        <h2> What we provide in this skeleton</h2>
        <ul>
          <li>Google Auth (Skeleton.js & auth.js)</li>
          <li>Socket Infrastructure (client-socket.js & server-socket.js)</li>
          <li>User Model (auth.js & user.js)</li>
        </ul>
        <h2> What you need to change</h2>
        <ul>
          <li>Change the font in utilities.css</li>
          <li>Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)</li>
          <li>Change the Server CLIENT_ID for Google Auth (auth.js)</li>
          <li>Change the Database SRV for Atlas (server.js)</li>
          <li>Change the Database Name for MongoDB (server.js)</li>
          <li>Add a favicon to your website at the path client/dist/favicon.ico</li>
          <li>Update website title in client/dist/index.html</li>
        </ul> */
    );
  }
}

export default Home;
