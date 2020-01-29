import React, { Component } from "react";
import { get } from "../../utilities";
import { Link } from "@reach/router";

import "../../utilities.css";
import "../pages/Collection.css";


class SingleMapCard extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
      this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <Link to={`/map/${this.props.treasure_id}`} >
            {/* <Link to={`/seek/${this.props.treasure_id}`} > */}
              <img className="imgThumbnail"
                src="https://i.imgur.com/49AuhbP.jpg" 
                // width="463px" 
                // height="308px"
              />
            </Link>
          </div>
        </div>
        <div className="mapDescription">
          <div className="u-textCenter u-heading">"map title"</div>
          <div className="u-textCenter u-body">created by {this.props.creator_name}</div>
      </div>
      </div>
    );

    // return (
    //   <div>
    //   {/* <link
    //       rel="stylesheet"
    //       href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"
    //   /> */}
    //   <br/>

    //   {/* Card container */}
    //   <div className="grid-y grid-container card-container large">

    //     {/* Map and Checkpoint */}
    //     <div className="cell grid-x grid-container grid-margin-x">
    //       <div id="imageID">
    //         {/* <Link to={`/seek/${this.props.treasure_id}`} > */}
    //         <Link to={`/map/${this.props.treasure_id}`} >
    //           <img
    //             src="https://i.imgur.com/49AuhbP.jpg" 
    //             width="463px" 
    //             height="308px"
    //           />
    //         </Link>
    //       </div>
    //       <div className="cell large-4">
    //         <h5>id: {this.props.treasure_id}</h5>
    //         <h5>TO-DO</h5>
    //         <br />
    //         <div className="grid-y grid-container align-centered">
    //           <h6>Stuff.</h6>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // );
  }
}
  
export default SingleMapCard;



