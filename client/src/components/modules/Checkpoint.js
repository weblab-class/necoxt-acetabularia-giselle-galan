import React, { Component } from "react";
import Pin from "../../public/pin.png";

import "./Checkpoint.css";

/**
 * Checkpoint is a component that renders the map pin image
 *
 * Proptypes
 * @param {string} position an object that contains x and y information 
 * @param {string} clearCheckpoint function that set x and y to null (pass null in seeker)
 * 
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
            top: `calc(${this.props.position.y*100}% - 48px)`, // 48 is image height
            left: `calc(${this.props.position.x*100}% - 15px)`, // 15 is half image width
        }}>
          <img src={Pin} />
        </div>
        {
          this.props.clearCheckpoint
           ? (<button className="checkpoint reset-button" type="reset" onClick={this.props.clearCheckpoint}>reset</button>)
           : null
        }
        </>
      );
    } else {
      return (<></>);
    };
  }
}

export default Checkpoint;
