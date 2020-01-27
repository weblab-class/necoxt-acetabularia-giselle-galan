import React, { Component } from "react";
// import Seek from "../modules/Seek.js";
import { get } from "../../utilities";
import SingleMapCard from "../modules/SingleMapCard.js"

import "../../utilities.css";
import "../foundation.css";
import "./Collection.css"

class Collection extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
        treasureMapsData: [],
    };
  }
  
  componentDidMount() {
    // get map content (all maps) 
    get("/api/treasures").then((treasureMapsDataObjs) => {
      this.setState({ treasureMapsData: treasureMapsDataObjs })
    });
  }

  render() {
    return (
      <div className="pageContainer">
        <div className="title">
          <h1><b>choose a treasure map</b></h1>
        </div>
        <div className="cardContainer">
          {this.state.treasureMapsData.map((treasureMapContent) => (
            <SingleMapCard 
              treasure_id={treasureMapContent._id} 
              creator_name={treasureMapContent.creator_name}
              // total_steps={treasureMapContent.treasureSteps.length}
            />
          ))}
        </div>
    </div>
    );
  }
}
  
export default Collection;