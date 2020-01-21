import React, { Component } from "react";

import "./map.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // return <img src="pin.png" />;
    let mapMaping = {
      "CampusMap": ["CampusMap.jpeg", 956, 565],
      "TunnelMap": ["TunnelMap.png", 4939, 2818],
      // "FloorPlan": ["CampusMap.jpeg", 956, 565],
    };
    return (
      <div id="imageID">
        <img
          src={mapMaping[this.props.mapSelection][0]} 
          onClick={() => this.props.setPos()} 
          width={mapMaping[this.props.mapSelection][1]} 
          height={mapMaping[this.props.mapSelection][2]}
        />
        {console.log(this.props.position)}
        {/* {console.log(this.props.mapSelection)} */}
      </div>
    );
  }
}

export default Map;
