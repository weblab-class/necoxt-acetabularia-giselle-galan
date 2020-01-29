import React, { Component } from "react";

import "./Created.css";

/**
 * AboutMe
 *
 */
class Created extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

<div class="article-row-section">
  <div class="article-row-section-inner">

    <h2 class="article-row-section-header">News</h2>

    <a href="#">
      <article class="article-row">
        <div class="article-row-img">
          <img src="https://placehold.it/200" alt="picture of a whale eating a donkey" />
        </div>
        <div class="article-row-content">
          <h1 class="article-row-content-header">HOW SPENDING $162,301.42 ON CLOTHES MADE ME $692,500</h1>

          <p class="article-row-content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quia sit ullam, assumenda et. est at. Minima cum enim, vero eligendi perspiciatis similique modi voluptatem officia fugiat.</p>

          <p class="article-row-content-author">By Yeti</p>
          <time class="article-row-content-time" datetime="2008-02-14 20:00">July 14th 2021</time>
        </div>
      </article>
    </a>

    <a href="#">
      <article class="article-row article-row-reversed">
        <div class="article-row-img">
          <img src="https://placehold.it/200" alt="picture of a whale eating a donkey" />
        </div>
        <div class="article-row-content">
          <h1 class="article-row-content-header">HOW TO QUIT YOUR JOB, MOVE TO PARADISE AND GET PAID TO CHANGE THE WORLD</h1>

          <p class="article-row-content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore accusamus sint quas, odit, enim architecto officiis culpa!</p>

          <p class="article-row-content-author">By Yeti</p>
          <time class="article-row-content-time" datetime="2008-02-14 20:00">July 14th 2021</time>
        </div>
      </article>
    </a>

    <a href="#">
      <article class="article-row">
        <div class="article-row-img">
          <img src="https://placehold.it/200" alt="picture of a whale eating a donkey" />
        </div>
        <div class="article-row-content">
          <h1 class="article-row-content-header">HOW I’M GOING TO LOSE ALL MY CUSTOMERS AND WRECK MY BUSINESS</h1>

          <p class="article-row-content-description">Lorem ipsum dolor sit amet, consectetur cupiditate, unde libero quisquam ipsam debitis earum omnis aperiam nulla eaque vitae error optio tempora voluptatem, quae impedit laborum placeat. Expedita!</p>

          <p class="article-row-content-author">By Yeti</p>
          <time class="article-row-content-time" datetime="2008-02-14 20:00">July 14th 2021</time>
        </div>
      </article>
    </a>

  </div>
</div>


    );
  }
}

export default Created;
