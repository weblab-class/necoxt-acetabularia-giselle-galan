import React, { Component } from "react";
import { Link } from "@reach/router";
import StepCardSeek from "../modules/StepCardSeek.js";
import { get } from "../../utilities";
import { navigate } from "@reach/router";
import NavBar from "../modules/NavBar";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Create from "../pages/Create.js"

import "../../utilities.css";
import "../foundation.css";
import "../pages/OverviewCreate.css";

// let treasure_id = "5e2bb5592e0d69799286d981";

class OverviewCreate extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      map_title: "",
      treasure_is: "",
      treasure_hint: "",
      treasure_category: "",
      isBlank: true,
      coverMap: null,
    };
  }


  handleSubmit = (event) => {
    // if (this.props.userId) {
      if (this.state.map_title == "") {
        alert('please fill field 1')
      }
      else if (this.state.treasure_is == "") {
        alert('please fill field 2')
      }
      else if (this.state.treasure_category == "") {
        alert('please select a destination')
      }
      else if (this.state.treasure_category == "other" && this.state.isBlank) {
        alert('please input "other" field')
      }
      else if (this.state.treasure_hint == "") {
        alert('please fill field 5')
      }
      else if (this.state.treasure_category != "other" && !(this.state.isBlank)) {
        alert('"other" was not selected')
      }
      else {
        // navigate(`/create-2/`);
      }
    // }
    // else {
    //   alert("please log in")
    // }
  }
    
  handleTitleChange = event => {
    const input = event.target.value;
    this.setState({ map_title: input });
  };

  handleTreasureChange = event => {
    const input = event.target.value;
    this.setState({ treasure_is: input });
  };

  handleHintChange = event => {
    const input = event.target.value;
    this.setState({ treasure_hint: input });
  };

  handleCategoryChange = event => {
    const input = event.target.value;
    this.setState({ treasure_category: input });
  };

  handleOtherChange = event => {
    const input = event.target.value;
      if (input != "") {
        this.setState({ treasure_category: input, isBlank: false });
      }
      else {
        this.setState({ isBlank: true });
      }
  };

  chooseCategory = (event) => {
    const input = event.target.value;
    this.setState({ treasure_category: input });
  };

  componentDidMount() {
    }
  
  render() {
    let mapMaping = {
      "CoverMap": this.state.coverMap ? this.state.coverMap.imgSrc : null,
    };
    // this.state && console.log(this.state);
    return (
      <div className="pageContainer">
        <NavBar
          handleLogin={this.props.handleLogin}
          handleLogout={this.props.handleLogout}
          userId={this.props.userId}
        />
        <div className="title">.create</div>
        <div className="subtitle">part one: describe your hidden treasure</div>
        <div className="box">
        <form>
          <div className="form-group">
            <label className="heading">interesting map title for your treasure</label>
            <input 
              type="email"
              className="form-control" 
              placeholder='ex: "It is a truth universally acknowledged..."' 
              onChange={this.handleTitleChange}
            />
            <label className="heading">what is the treasure?</label>
            <input 
              type="email"
              className="form-control" 
              placeholder="ex: Jane Austen's Pride & Prejudice" 
              onChange={this.handleTreasureChange}
            />
  
            <label className="heading">which best describes your treasure's ultimate destination?</label>
            <select 
              className="form-control" 
              onChange={this.chooseCategory}
            >
              <option value="" selected="selected" hidden="hidden">for the seeker's...</option> 
              <option value="bookshelf">bookshelf</option>
              <option value="snack shelf">snack shelf</option>
              <option value="accessories box">accessories box</option>
              <option value="closet">closet</option>
              <option value="dorm room">dorm room</option>
              <option value="desk">desk</option>
              <option value="kitchen">kitchen</option>
              <option value="bathroom">bathroom</option>
              <option value="other">other</option>
            </select>

            <label className="heading">if you selected "other," input a destination here</label>
            <input 
              type="email"              
              className="form-control" 
              placeholder="ex: makeup cabinet, backpack" 
              onChange={this.handleOtherChange}
            />

          <label className="heading">what kind of person would love your treasure?</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="ex: satire lover, chocolate lover, puzzle lover, cat person" 
              onChange={this.handleHintChange}
            />
          </div>
        </form>
        

        <div className="u-textCenter">
          <button
            onClick={this.handleSubmit}
            className="button large warning u-rounded">
              step two
          </button>
        </div>
        </div>
      </div>
    );
  }
  
}

export default OverviewCreate;