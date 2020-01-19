import React, { Component } from "react";

import "../../utilities.css";

class Seek extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
          selected: {}
      };
    }
  
    componentDidMount() {
      // remember -- api calls go here!
    }
  
    render() {
        return (<div>test</div>);
    }

}

export default Seek;