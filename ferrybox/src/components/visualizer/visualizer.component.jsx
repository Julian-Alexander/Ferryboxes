import React from 'react';
import './visualizer.styles.scss';
import CanvasJSReact from '../../assets/canvasjs.react';
import signals from '../../data/signals.json';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

let salinity = [];
let temperature = [];
let turbidity = [];
let oxyCon = [];
let oxyTemp = [];

class Visualizer extends React.Component {
  state = {
    reload: false
  };

  componentDidMount() {
    salinity = signals.t.map(({ measurements, properties }) => {
      const sal = measurements['FA/ferrybox/CTD/SALINITY'];
      const date = new Date(properties.datetime);
      console.log('salinity-date', sal, date);
      return { x: date, y: sal };
    });

    temperature = signals.t.map(({ measurements, properties, location }) => {
      const temp = measurements['FA/ferrybox/CTD/TEMPERATURE'];
      const date = new Date(properties.datetime);
      return { x: date, y: temp };
    });

    turbidity = signals.t.map(({ measurements, properties, location }) => {
      const turb = measurements['FA/ferrybox/TURBIDITY'];
      const date = new Date(properties.datetime);
      return { x: date, y: turb };
    });

    oxyCon = signals.t.map(({ measurements, properties, location }) => {
      const oxyCon = measurements['FA/ferrybox/OXYGEN/CONCENTRATION'];
      const date = new Date(properties.datetime);
      return { x: date, y: oxyCon };
    });

    oxyTemp = signals.t.map(({ measurements, properties, location }) => {
      const oxyTemp = measurements['FA/ferrybox/OXYGEN/TEMPERATURE'];
      const date = new Date(properties.datetime);
      return { x: date, y: oxyTemp };
    });

    this.setState({ reload: true });
  }

  toggleDataSeries = e => {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  };

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
      legend: {
        cursor: 'pointer',
        itemclick: this.toggleDataSeries
      },
      data: [
        {
          yValueFormatString: '#,###,###.##',
          xValueFormatString: 'DDDD MMM YYYY HH:mm:ss',
          name: 'Salinity',
          type: 'line',
          showInLegend: true,
          dataPoints: salinity
        },
        {
          type: 'line',
          name: 'Temperature',
          showInLegend: true,
          dataPoints: temperature
        },
        {
          type: 'line',
          showInLegend: true,
          name: 'Turbidity',
          dataPoints: turbidity
        },
        {
          type: 'line',
          showInLegend: true,
          name: 'Oxygen Concentration',
          dataPoints: oxyCon
        },
        {
          type: 'line',
          showInLegend: true,
          name: 'Oxygen Temperature',
          dataPoints: oxyTemp
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
