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
      otherSelected: false,
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
      // else if (this.state.treasure_category == "" && !(this.state.otherSelected)) {
      //   alert('please select a destination')
      // }
      else if (this.state.otherSelected && this.state.isBlank) {
        alert('please input "other" field')
      }
      else if (this.state.treasure_hint == "") {
        alert('please fill field 5')
      }
      // else if (!(this.state.otherSelected) && !(this.state.isBlank)) {
      //   alert('"other" was not selected')
      // }
      else {
        let data = {
          map_title: this.state.map_title,
          treasure_is: this.state.treasure_is,
          treasure_category: this.state.treasure_category,
          treasure_hint: this.state.treasure_hint,
        };
        
        this.props.handleCreateOverviewSubmit(data);
        // console.log(data);

        navigate(`/create/`);
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

  // handleCategoryChange = event => {
  //   const input = event.target.value;
  //   this.setState({ treasure_category: input });
  // };

  handleOtherChange = event => {
    const input = event.target.value;
      if (input != "") {
        this.setState({ treasure_category: input, isBlank: false });
      }
      else {
        this.setState({ isBlank: true });
      }
  };

  handleSelectOther = (event) => {
    this.setState({
      otherSelected: event.target.value === "other",
    });
  }

  chooseCategory = (event) => {
    const input = event.target.value;
    if (input === "other") {
      this.setState({
        otherSelected: true ,
      });
    }
    else {
      this.setState({ treasure_category: input, otherSelected: false });
    }
  };

  componentDidMount() {
    }
  
  render() {
    // console.log(this.state.treasure_category);
    return (
      <div className="pageContainer">
        <NavBar
          handleLogin={this.props.handleLogin}
          handleLogout={this.props.handleLogout}
          userId={this.props.userId}
        />
        <div className="title">.create</div>
        <div className="subtitle">(part zero: hide your treasure and mark it with a special code or key. like an "x"!)</div>
        <div className="subtitle">part one: describe your hidden treasure</div>
        <br/>
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
              onChange={this.chooseCategory} //, this.handleSelectOther}
              defaultValue="hiddenValue"
            >
              <option value="hiddenValue" hidden="hidden">for the seeker's...</option> 
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
            {
              this.state.otherSelected ? 
              <>
                <label className="heading">if you selected "other," input a destination here</label>
                <input 
                  type="email"              
                  className="form-control" 
                  placeholder="ex: makeup cabinet, backpack" 
                  onChange={this.handleOtherChange}
                /></> : null
            }


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
              part two
          </button>
        </div>
        </div>
      </div>
    );
  }
  
}

export default OverviewCreate;