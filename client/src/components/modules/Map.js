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
      <div className="">
        <img src="Campus.jpeg" width="956" height="565" alt=""/>
        <p>{JSON.stringify(this.props.position)}</p>
      </div>
    );
  }
}

export default Map;
