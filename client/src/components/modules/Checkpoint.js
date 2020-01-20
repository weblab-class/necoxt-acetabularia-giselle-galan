import React, { Component } from "react";

// import "./Checkpoint.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class Checkpoint extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // return <img src="pin.png" />;
    if (this.props.clickPosition.x && this.props.clickPosition.y) {
      return (<img src="pin.png" />);
      // return <img src="pin.png" />
    }
    return (<></>);
  }
}

export default Checkpoint;
