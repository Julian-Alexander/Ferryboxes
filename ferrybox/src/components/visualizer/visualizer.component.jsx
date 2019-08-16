import React from 'react';
import './visualizer.styles.scss';
import CanvasJSReact from '../../assets/canvasjs.react';
import signals from '../../data/signals.json';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

let salinity = [];

class Visualizer extends React.Component {
  state = {
    reload: false
  };

  componentDidMount() {
    salinity = signals.t.map(({ measurements, properties }) => {
      const sal = measurements['FA/ferrybox/CTD/SALINITY'];
      const date = new Date(properties.datetime);
      console.log(salinity);
      return { x: date, y: sal };
    });
    this.setState({ reload: true });
  }

  render() {
    const options = {
      theme: 'dark2',
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: 'FerryBox'
      },
      subtitles: [
        {
          text: 'Click and Drag Visualizer to Zoom'
        }
      ],
      axisY: {
        title: 'Measurements',
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisX: {
        title: 'Time',
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      data: [
        {
          yValueFormatString: '#,###,###.##',
          xValueFormatString: 'DDDD MMM YYYY HH:mm:ss',
          name: 'Salinity',
          type: 'line',
          dataPoints: salinity
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
      </div>
    );
  }
}

export default Visualizer;
