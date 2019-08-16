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
let propLatLon = [];

class Visualizer extends React.Component {
  state = {
    reload: false
  };

  componentDidMount() {
    salinity = signals.t.map(({ measurements, properties }) => {
      const sal = measurements['FA/ferrybox/CTD/SALINITY'];
      const date = new Date(properties.datetime);
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

    propLatLon = signals.t.map(({ properties, location }) => {
      const lat = location['FA/gpstrack'].latitude;
      const lon = location['FA/gpstrack'].longitude;
      const signalID = properties.signal_id;
      const platCode = properties.platform_code;
      const date = new Date(properties.datetime);
      return {
        x: date,
        y: `<br/><strong>Platform code: </strong>${platCode}<br/><strong>Latitude: </strong>${lat}<br/><strong>Longitude: </strong>${lon}<br/><strong>Signal ID: </strong>${signalID}`
      };
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
      axisY2: {
        title: 'Oxygen Concentration',
        titleFontColor: '#51CDA0',
        lineColor: '#51CDA0',
        labelFontColor: '#51CDA0',
        tickColor: '#51CDA0',
        includeZero: false,
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      legend: {
        cursor: 'pointer',
        itemclick: this.toggleDataSeries
      },
      toolTip: {
        shared: true
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
          axisYType: 'secondary',
          dataPoints: oxyCon
        },
        {
          type: 'line',
          showInLegend: true,
          name: 'Oxygen Temperature',
          dataPoints: oxyTemp
        },
        {
          type: 'line',
          name: 'Properties ',
          dataPoints: propLatLon
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        <div className='info-container'>
          <div className='info'>
            Use the top right icons after Zooming to Pan and Reset
          </div>
          <span className='info'>Click Legend to Hide/Show Measurements</span>
        </div>
      </div>
    );
  }
}

export default Visualizer;
