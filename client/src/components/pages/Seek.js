import React, { Component } from "react";
import StepCardSeek from "../modules/StepCardSeek.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Seek.css";
import "../foundation.css";

class Seek extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
        steps: [],
        totalStepNumber: null,
        currentStepNumber: null,
        // mapsData: [],
        mapData: []
      };
    }
    
    // filterFunc(maps) (

    // )

    componentDidMount() {
      // get map content
      // get("/api/checkpoints").then((mapsDataObjs) => {
      //   this.setState({ mapsData: mapsDataObjs })
      // });
      get(`/api/checkpoint`, { _id: this.props.map_id}).then((mapContentObj) => {
        this.setState({ mapData: mapContentObj });
        // console.log(this.state.mapData[0].position);
      });
      // console.log("test",get(`/api/checkpoint`, { _id: this.props.map_id}));
    }
  
    render() {
      // console.log(this.props.map_id);
      // console.log(get(`/api/checkpoint`, { _id: this.props.map_id}));
      // console.log(this.state.mapData);
      // if (this.state.mapData[0]!=[]) {
      //   console.log(this.state.mapData[0].position);
      // }
      
      // return null;

        // return (<div>hi</div>
        if (this.state.mapData.length != 0) {
          return (
            <>
              <div className="">
                <div>

                  <StepCardSeek 
                    _id={this.props.map_id}
                    map={this.state.mapData[0].map}
                    position={this.state.mapData[0].position}
                    description={this.state.mapData[0].description}
                    question={this.state.mapData[0].question}
                    answer={this.state.mapData[0].answer}
                  />
                  {/* ))} */}
                </div>
              </div>
            </>
          );
        }
      else {
        return (<div>loading your treasure map</div>)
      }
  }
  
}

export default Seek;