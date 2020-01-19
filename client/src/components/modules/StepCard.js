import React, { Component } from "react";
import { get } from "../../utilities";

// import "./Step.css";

/**
 * Step is a component for displaying the created map
 *
 * Proptypes
 * @param {string} _id of the checkpoint
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} map type
 * @param {{xPosition: Number, yPosition: Number}} location of the checkpoint
 * @param {string} description
 * @param {string} question
 * @param {string} answer
 */
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: "",
      location: {xPosition: null, yPosition: null},
      description: "",
      question: "",
      answer: "",
    };
  }

  componentDidMount() {
    get("/api/comment", { parent: this.props._id }).then((comments) => {
      this.setState({
        comments: comments,
      });
    });
  }

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  addNewComment = (commentObj) => {
    this.setState({
      comments: this.state.comments.concat([commentObj]),
    });
  };

  render() {
    return (
      <div className="Card-container">
        <SingleStory
          _id={this.props._id}
          creator_name={this.props.creator_name}
          creator_id={this.props.creator_id}
          content={this.props.content}
        />
        <CommentsBlock
          story={this.props}
          comments={this.state.comments}
          addNewComment={this.addNewComment}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

export default StepCard;
