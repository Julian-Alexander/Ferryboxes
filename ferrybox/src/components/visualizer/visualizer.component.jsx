import React from 'react';
import './visualizer.styles.scss';
import CanvasJSReact from "../../assets/canvasjs.react";
import signals from "../../data/signals.json";

const CanvasJSReact = CanvasJSReact.CanvasJSChart;

class Visualizer extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <span>Hello, World!</span>
      </div>
    );
  }
}

export default Visualizer;
