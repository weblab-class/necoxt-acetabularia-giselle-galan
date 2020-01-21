import React, { Component } from "react";
// import Seek from "../modules/Seek.js";
import { get } from "../../utilities";

import "../../utilities.css";
// import "./Seek.css";
import "../foundation.css";
import { Link } from "@reach/router";

class SingleMapCard extends Component {
    constructor(props) {
        super(props);
        // Initialize Default State
        this.state = {
        };
    }
  
    componentDidMount() {
    }

    render() {
        return (
            <div>
            {/* <link
                rel="stylesheet"
                href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"
            /> */}
            <br/>

                {/* Card container */}
                <div className="grid-y grid-container card-container large">
                    {/* <div className="cell card-header"> */}
                        {/* <div className="card-title">Let's find treasure.</div> */}
                        {/* <div className="card-subtitle">Location 1</div> */}
                    {/* </div> */}
        
                    {/* Map and Checkpoint */}
                    <div className="cell grid-x grid-container grid-margin-x">
                        {/* <div className="cell large-8 thumbnail map-container" id="mapThumbnailContainerID"> */}
                            <div id="imageID">
                                <Link to={`/seek/${this.props.map_id}`} >
                                    <img
                                        src="https://i.imgur.com/49AuhbP.jpg" 
                                        width="463px" 
                                        height="308px"
                                    />
                                </Link>
                            </div>
                        {/* </div> */}
                        <div className="cell large-4">
                            <h5>id: {this.props.map_id}</h5>
                            <h5>TO-DO</h5>
                            <br />
                            <div className="grid-y grid-container align-centered">
                                <h6>- add map title + description + tags</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default SingleMapCard;



