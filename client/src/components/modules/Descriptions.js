import React, { Component } from "react";

// import "./Descriptions.css";
import "../foundation.css"
import "../../utilities.css";

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
  };

  clickDelete = (event) => {
    event.preventDefault();
    this.props.onClickButton && this.props.onClickButton(this.state, "Delete");
  };

  clickNextStep = (event) => {
    event.preventDefault();
    this.props.onClickButton && this.props.onClickButton(this.state, "NextStep");
  };

  clickPreviousStep = (event) => {
    event.preventDefault();
    this.props.onClickButton && this.props.onClickButton(this.state, "PreviousStep");
  };

  componentDidMount() {
    this.setState({
      descriptionValue: this.props.descriptionValue,
      questionValue: this.props.questionValue,
      answerValue: this.props.answerValue,
    });
  }

  render() {
    return (
      <>
      <input 
        type="text" 
        placeholder="ex: 'verdant convenient store', 'white sculpture', etc"
        value={this.state.descriptionValue}
        onChange={this.handleDescriptionChange}
        required 
      />
      <div className="u-heading">question to unlock next location or to verify treasure:</div>
      <input 
        type="text" 
        placeholder="ex: 'how much is a sm coffee?', 'what is the sculpture name?', 'what is written on the treasure?'" 
        value={this.state.questionValue}
        onChange={this.handleQuestionChange}
        required 
      />
      <div className="u-heading">answer that unlocks next location or that verifies treasure:</div>
      <input 
        type="text" 
        placeholder="ex: '1.99', 'the alchemist', etc" 
        value={this.state.answerValue}
        onChange={this.handleAnswerChange}
        required 
      />
      <div className="grid-x grid-container align-spaced grid-margin-x">
        <button 
          type="submit" 
          // className="cell shrink button-rounded-hover"
          className="button large warning u-rounded"
          onClick={this.clickPreviousStep}
        >go back</button>
        <button
          type="submit"
          // className="cell shrink button-rounded-hover" 
          className="button large warning u-rounded"
          onClick={this.clickDelete}
        >delete</button>
        <button
          type="submit"
          // className="cell shrink button-rounded-hover" 
          className="button large warning u-rounded"
          onClick={this.clickFinish}
        >finish</button>
        <button
          type="submit"
          // className="cell shrink button-rounded-hover"
          className="button large warning u-rounded"
          onClick={this.clickNextStep}
        >next location</button>
      </div>
      </>
    );
  }
}

export default Descriptions;
