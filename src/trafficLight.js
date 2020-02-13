import React from 'react';
import './App.scss';

function TrafficLight () {



  return (
    <React.Fragment>
        <div id="trafficTop"></div>
          <div id="container">
            <div className="red light" ></div>
            <div className="yellow light" ></div>
            <div className="green light" ></div>
        </div>
    </React.Fragment>
  )}

export default TrafficLight;
