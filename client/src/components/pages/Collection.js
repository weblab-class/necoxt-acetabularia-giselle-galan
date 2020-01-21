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
            // totalMaps: null,
            mapsData: [],
            // currentMap: null,
        };
    }
  
    componentDidMount() {
    // get map content
        get("/api/checkpoints").then((mapsDataObjs) => {
            // this.setState({ mapContent: JSON.stringify(mapContentObj) })
            // this.setState({ mapsData: JSON.stringify(mapsDataObjs) })
            // this.setState({ mapsData: mapsDataObjs, totalMaps: mapsDataObjs.length})
            this.setState({ mapsData: mapsDataObjs })
        });
    }

    render() {
        // {console.log(this.state.mapsData)}
        return (
            <div className="featured-image-block-grid">
                <div className="featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
                    <h2>Choose a map</h2>
                    <p>X marks the spot.</p>
                </div>
                {this.state.mapsData.map((mapContent) => (
                    <SingleMapCard map_id={mapContent._id}/>
                ))}
            </div>
        );
    }
}
  
export default Collection;