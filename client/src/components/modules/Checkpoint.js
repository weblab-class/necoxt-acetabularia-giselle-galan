import React, { Component } from "react";

import "./Checkpoint.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class Checkpoint extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.position.x && this.props.position.y) {
      return (
        <>
        <div 
          className="checkpoint" 
          style={{ 
            top: this.props.position.y-48,  // 48 is image height
            left: this.props.position.x-15, // 15 is half image width
        }}>
          <img src="pin.png" />
        </div>
        <button className="checkpoint reset-button" type="reset" onClick={this.props.clearCheckpoint}>reset</button>
        </>
      );
    } else {
      return (<></>);
    };
  }
}

export default Checkpoint;
