import React, { Component } from "react";

// import "./Descriptions.css";
import "../foundation.css"

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class Descriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionValue: "",
      questionValue: "",
      answerValue: "",
    };
  }

  handleDescriptionChange = (event) => {
    this.setState({
      descriptionValue: event.target.value,
    });
  };

  handleQuestionChange = (event) => {
    this.setState({
      questionValue: event.target.value,
    });
  };

  handleAnswerChange = (event) => {
    this.setState({
      answerValue: event.target.value,
    });
  };

  handleFinish = (event) => {
    event.preventDefault();
    this.props.onFinish && this.props.onFinish(this.state);
    this.setState({
      descriptionValue: "",
      questionValue: "",
      answerValue: "",
    });
  };

  render() {
    return (
      <>
      <input 
        type="text" 
        placeholder="Description" 
        value={this.state.descriptionValue}
        onChange={this.handleDescriptionChange}
        required 
      />
      <input 
        type="text" 
        placeholder="Question" 
        value={this.state.questionValue}
        onChange={this.handleQuestionChange}
        required 
      />
      <input 
        type="text" 
        placeholder="Answer" 
        value={this.state.answerValue}
        onChange={this.handleAnswerChange}
        required 
      />
      <div className="grid-x grid-container align-spaced grid-margin-x">
        <button 
          type="button" 
          className="cell shrink button-rounded-hover"
        >GO BACK</button>
        <button
          type="submit"
          className="cell shrink button-rounded-hover" 
          onClick={this.handleFinish}
        >FINISH</button>
        <button
          type="submit"
          className="cell shrink button-rounded-hover"
        >NEXT STEP</button>
      </div>
      </>
    );
  }
}

export default Descriptions;
