import React from 'react';
import './App.css';

function TrafficLight () {

  console.log("This is a TEst");

  return (
    <React.Fragment>
        <div id="trafficTop"></div>
          <div id="container">
            <div className="light red"></div>
            <div className="yellow light"></div>
            <div className="green light"></div>
        </div>
    </React.Fragment>
  )}

export default TrafficLight;
