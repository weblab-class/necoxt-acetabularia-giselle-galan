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
    return (
      <div id="mapID">
        <img src="Campus.jpeg" onClick={() => {this.props.getMousePos(); this.props.getMapPos()}} width="956" height="565" alt=""/>
        {/* {console.log(this.props.clickPosition, this.props.mapPosition)} */}
      </div>
    );
  }
}

export default Map;
