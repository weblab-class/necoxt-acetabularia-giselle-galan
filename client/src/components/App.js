import React, { Component, Profiler } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Create from "./pages/Create.js";
import Profile from "./pages/Profile.js";
// import NavBar from "./modules/NavBar.js";
import Seek from "./pages/Seek.js";
import Collection from "./pages/Collection.js"
import OverviewSeek from "./pages/OverviewSeek.js"
import OverviewCreate from "./pages/OverviewCreate.js"


import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userObj: undefined,
      userId: undefined,
      CreateOverview: null,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userObj: user, userId: user._id });
      }
    });
  }
  
  handleCreateOverviewSubmit = (data) => {
    this.setState( { CreateOverview: data })
  };

  handleLogin = (res) => {
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userObj: user, userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ user: undefined, userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <>
        <Router>
          <Home
            path="/" 
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <Create 
            // path="/create-2/"
            path="/create/"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
            overviewData={this.state.CreateOverview}
          />
          {/* <Profile
            path="/profile/:userId"
            userId={this.state.userId}
          /> */}
          <Profile
            path="/profile/:userId"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            user={this.state.userObj}
          />
          {/* <Seek path="/seek/" />  */}
          {/* <Seek path="/seek/:map_id" /> */}
          <Seek 
            path="/seek/:treasure_id" 
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <OverviewSeek 
            path="/map/:treasure_id" 
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <OverviewCreate
            path="/create-1/" 
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
            handleCreateOverviewSubmit={this.handleCreateOverviewSubmit}
          />
          <Collection 
            path="/maps/" 
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          {/* <Guide path="/guide/" /> */}
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
