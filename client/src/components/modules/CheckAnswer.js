import React, { Component } from "react";

import "./StepCardSeek.css";


/**
 * Step is a component for displaying the created map
 *
 * Proptypes
 * @param {string} user_input
 * @param {string} answer
 * @param {Number} totalStepNumber
 * @param {Number} currentStepNumber
 */

class CheckAnswer extends Component {
    constructor(props) {
      super(props);
    } 

    componentDidMount() {
    } 

    render() { 
        if (this.props.answer == this.props.user_input) {
          return (
            <div>
              {/* <link
                rel="stylesheet"
                href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"
              /> */}
              <br/>
              <div><b>Congratulations, you found the treasure.</b></div>
              <div className="grid-x grid-container align-spaced grid-margin-x">
                {/* <button className="cell shrink button-rounded-hover">GO BACK</button> */}
                <button className="cell shrink button-rounded-hover">FINISH</button>
                {/* <button className="cell shrink button-rounded-hover">NEXT STEP</button> */}
              </div>
            </div>
          );
        }
        else {
          return (
            <div>
              {/* <link
                rel="stylesheet"
                href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"
              /> */}
              <br/>
              <div><i>You have not found treasure yet.</i></div>
            </div>
          );
        }
    }
}

export default CheckAnswer;