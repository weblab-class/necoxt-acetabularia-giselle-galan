import React, { Component } from "react";



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
      // return (<div>{this.props.answer}, {this.props.user_input}</div>);
        if (this.props.answer == this.props.user_input) {
          return (<div>Congratulations, you found the treasure.</div>);
        }
        else {
          return (<div>You have not found treasure yet.</div>);
        }
    }
}

export default CheckAnswer;