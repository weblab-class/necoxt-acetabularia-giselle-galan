import React, { Component } from "react";
// import Seek from "../modules/Seek.js";
import { get } from "../../utilities";
import SingleMapCard from "../modules/SingleMapCard.js"

import "../../utilities.css";
// import "./Seek.css";
import "../foundation.css";

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
            <div className="featured-image-block-grid">
                <div className="featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
                    <h2>Choose a treasure map</h2>
                    <p>X marks the spot.</p>
                </div>
                {this.state.treasureMapsData.map((treasureMapContent) => (
                    <SingleMapCard 
                        treasure_id={treasureMapContent._id} 
                        total_steps={treasureMapContent.treasureSteps.length}
                    />
                ))}
            </div>
        );
    }
}
  
export default Collection;