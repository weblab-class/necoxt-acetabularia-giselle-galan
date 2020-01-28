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
    this.state = {
      imgFile: null,
      imgSrc: null,
    }
  }

  render() {
    // console.log(this.props.ownMap);

    if (this.props.ownMap && this.state.imgFile!=this.props.ownMap) {
      let reader = new FileReader();
      reader.onloadend = function () {
        this.setState({
          imgSrc: reader.result,
          imgFile: this.props.ownMap,
        });
      }.bind(this)
      reader.readAsDataURL(this.props.ownMap);
    }
    // console.log(this.state.imgSrc);

    let mapMaping = {
      // "CampusMap": [CampusMap, 956, 565],
      // "TunnelMap": [TunnelMap, 4939, 2818],
      // "FloorPlan": ["CampusMap.jpeg", 956, 565],
      "CampusMap": CampusMap,
      "TunnelMap": TunnelMap,
      "OwnMap": this.state.imgSrc,
    };

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
