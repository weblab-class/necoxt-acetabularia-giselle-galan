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

  clickFinish = (event) => {
    event.preventDefault();
    this.props.onClickButton && this.props.onClickButton(this.state, "Finish");
    // this.setState({
    //   descriptionValue: "",
    //   questionValue: "",
    //   answerValue: "",
    // });
  };

  clickNextStep = (event) => {
    event.preventDefault();
    this.props.onClickButton && this.props.onClickButton(this.state, "NextStep");
    // this.setState({
    //   descriptionValue: "",
    //   questionValue: "",
    //   answerValue: "",
    // });
  };

  clickPreviousStep = (event) => {
    event.preventDefault();
    this.props.onClickButton && this.props.onClickButton(this.state, "PreviousStep");
    // this.setState({
    //   descriptionValue: "",
    //   questionValue: "",
    //   answerValue: "",
    // });
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
          onClick={this.clickPreviousStep}
        >GO BACK</button>
        <button
          type="submit"
          className="cell shrink button-rounded-hover" 
          onClick={this.clickFinish}
        >FINISH</button>
        <button
          type="submit"
          className="cell shrink button-rounded-hover"
          onClick={this.clickNextStep}
        >NEXT STEP</button>
      </div>
      </>
    );
  }
}

export default Descriptions;
