import React, { Component } from "react";
import { Link } from "@reach/router";

import "./StepCard.css";
import "../foundation.css"


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
              <br/>
              <div><b>Congratulations, you found the treasure.</b></div>
              <div className="grid-x grid-container align-spaced grid-margin-x">
                <Link to="/">
                  <button
                    className="cell shrink button-rounded-hover">
                    {/* className="button large warning"> */}
                      finish
                  </button>
                </Link>
              </div>
            </div>
          );
        }
        else {
          return (
            <div>
              <br/>
              <div><i>You have not found treasure yet.</i></div>
            </div>
          );
        }
    }
}

export default CheckAnswer;