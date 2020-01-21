import React, { Component } from "react";
import CampusMap from "../../public/CampusMap.jpeg";
import TunnelMap from "../../public/TunnelMap.png";

import "./map.css";

/**
 * Map is a component that renders Map image
 *
 * Proptypes
 * @param {string} onClick funtion that will be called when click the map (pass null for seeker)
 * @param {string} mapSelection which map to use "CampusMap", "TunnelMap"
 * 
 */
class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // return <img src="pin.png" />;
    let mapMaping = {
      "CampusMap": [CampusMap, 956, 565],
      "TunnelMap": [TunnelMap, 4939, 2818],
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
        {/* {console.log(this.props.position)} */}
        {/* {console.log(this.props.mapSelection)} */}
      </div>
    );
  }
}

export default Map;
