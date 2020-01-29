import React, { Component } from "react";

import "./Created.css";
import { get } from "../../utilities";
import { post } from "../../utilities";
import SingleMapCard from "./SingleMapCard.js";

/**
 * AboutMe
 *
 */
class Created extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treasureMapsData: [],
    }
  }

  componentDidMount() {
    // get map content (all maps) 
    get("/api/created_treasure", this.props.user).then((treasureMapsDataObjs) => {
      this.setState({ treasureMapsData: treasureMapsDataObjs })
    });
  }

  render() {
    // console.log(this.props.user);
    if (this.state.treasureMapsData.length !== 0) {
      console.log("test",this.state.treasureMapsData)
      return (
        <div className="cardContainer">
          {this.state.treasureMapsData.map((treasureMapContent) => (
            <SingleMapCard 
              treasure_id={treasureMapContent._id} 
              creator_name={treasureMapContent.creator_name}
              // total_steps={treasureMapContent.treasureSteps.length}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="cardContainer">
          <p>Haven't created any map yet</p>
        </div>
      );
    }

  }
}

export default Created;
