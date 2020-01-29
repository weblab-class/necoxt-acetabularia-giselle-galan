import React, { Component } from "react";

import "./AboutMe.css";

/**
 * AboutMe
 *
 */
class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "SONG OF MYSELF",
      date: "Updated on: 29 January, 2020",
      content: ""
    };
  }

  render() {
    return (
    <div className="simple-article-header grid-container" style={{"border": "transparent"}}>
      {/* <!-- Article Published Date & Reading Time --> */}
      
      
      {/* <!-- Article Title --> */}
      <h4 className="article-title">
        SONG OF MYSELF
      </h4>

      <p className="article-date-read">Updated on: 21 April, 2017 - 3 min read</p>

      {/* <!-- Article Author Name & Comment Hyperlink --> */}
      {/* <p className="article-author-comments">
        <em>by <a href="#">Harry Manchanda</a></em> -
        <a className="article-comments" href="#">3 Comments</a>
      </p> */}

      {/* <!-- Article Social Links --> */}
      {/* <div className="article-social">
        <a href="#" className="button social facebook">
          <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
        </a>
        <a href="#" className="button social twitter">
          <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
        </a>
        <a href="#" className="button social linkedin">
          <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
        </a>
        <a href="#" className="button social google-plus">
          <i className="fa fa-google-plus fa-lg" aria-hidden="true"></i>
        </a>
      </div> */}

      {/* <!-- Article Image --> */}
      {/* <div className="article-post-image">
        <div className="thumbnail">
          <img src="//i.imgur.com/22ue2CP.jpg" />
        </div>
      </div> */}

      {/* <!-- Article Post Content --> */}
      <div className="divider"/>
      <br/>
      <div className="article-post-content">
        <div className="article-content">
          I celebrate myself, and sing myself,
          And what I assume you shall assume,
          For every atom belonging to me as good belongs to you.

          I loafe and invite my soul,
          I lean and loafe at my ease observing a spear of summer grass.

          My tongue, every atom of my blood, form'd from this soil, this air,
          Born here of parents born here from parents the same, and their
            parents the same,
          I, now thirty-seven years old in perfect health begin,
          Hoping to cease not till death.

          Creeds and schools in abeyance,
          Retiring back a while sufficed at what they are, but never forgotten,
          I harbor for good or bad, I permit to speak at every hazard,
          Nature without check with original energy.
        </div>
      </div>
    </div>
    );
  }
}

export default AboutMe;
