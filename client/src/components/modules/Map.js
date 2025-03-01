import React, { Component } from "react";
import CampusMap from "../../public/CampusMap.jpeg";
import TunnelMap from "../../public/TunnelMap.png";

// import "./map.css";

/**
 * Map is a component that renders Map image
 *
 * Proptypes
 * @param {string} onClick funtion that will be called when click the map (pass null for seeker)
 * @param {string} map which map to use "CampusMap", "TunnelMap"
 * 
 */
class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let mapMaping = {
      // "CampusMap": [CampusMap, 956, 565],
      // "TunnelMap": [TunnelMap, 4939, 2818],
      // "FloorPlan": ["CampusMap.jpeg", 956, 565],
      "CampusMap": CampusMap,
      "TunnelMap": TunnelMap,
      "OwnMap": this.props.ownMap ? this.props.ownMap.imgSrc : null,
    };

    // console.log(this.props.ownMap);

    return (

      <div id="imageID">
        <img
          // src={mapMaping[this.props.map][0]} 
          // onClick={() => this.props.setPos()} 
          // width={mapMaping[this.props.map][1]} 
          // height={mapMaping[this.props.map][2]}
          src={mapMaping[this.props.map]} 
          onClick={() => this.props.setPos()}
        />
        {/* {console.log(this.props.position)} */}
        {/* {console.log(this.props.map)} */}
      </div>
    );
  }
}

export default Map;
