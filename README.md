# **NIVA FERRYBOX**

Data visualization of measurements done by both stationary and automatic sensors for environmental monitoring. "Ferryboxes" are installed in ships and used to measure water properties to be analysed and sent via satellite connection.

## **Initialize Project**

To start the Ferrybox data visualizer.

- Access ferrybox folder

      cd ferrybox

- Start project by running

      yarn start

## **Review Time Window**

- Reviewing a time window can be easily done by selecting the desired time at the visualizer and dragging to the desired time.
- Once Zoomed in, all functionality including Chart toggling still works. You can pan through the graph by clicking the panning "Cross" icon that will appear on the top right corner of the visualizer.
- You can keep zooming in for a new time window inside of the previous time window.
- To reset, click the "Circling Arrow" icon to go back to the general view of the visualizer.

## **Dependencies and libraries**

### Dependencies

- node-sass

### Libraries

- CanvasJS
- React

# Environmental data visualisation

The purpose of this repo is to be used as a coding challenge during interviews.

## Introduction

We do a lot of environmental monitoring in NIVA. We have automatic sensors measuring the surrounding environment, both stationary and moving sensors.

One of our data sources are so called "ferryboxes", which are installed in various ships. These pump in water and have sensors in place, feeding us data over satellite connection.

Below is an example of a transferred json file with ferrybox measurements:

```
{
  "t": [
       {
      "measurements": {
        "FA/ferrybox/CTD/SALINITY": 15.873,
        "FA/ferrybox/CTD/TEMPERATURE": 2.02,
        "FA/ferrybox/OXYGEN/CONCENTRATION": 362.44,
        "FA/ferrybox/OXYGEN/TEMPERATURE": 2.27,
        "FA/ferrybox/TURBIDITY": 1.901
      },
      "properties": {
        "signal_id": "1dbf8568-838e-44a4-8cfc-8199ac3c49d3",
        "platform_code": "FA",
        "datetime": "2011-03-16T22:07:21"
      },
      "location": {
        "FA/gpstrack": {
          "latitude": 56.7767,
          "longitude": 11.8912
        }
      }
    },
    {
      "measurements": {
        "FA/ferrybox/CTD/SALINITY": 15.877,
        "FA/ferrybox/CTD/TEMPERATURE": 2.05,
        "FA/ferrybox/OXYGEN/CONCENTRATION": 361.89,
        "FA/ferrybox/OXYGEN/TEMPERATURE": 2.3,
        "FA/ferrybox/TURBIDITY": 1.846
      },
      "properties": {
        "signal_id": "a0ca726d-0482-4857-8246-9ee6489ddd3e",
        "platform_code": "FA",
        "datetime": "2011-03-16T22:08:21"
      },
      "location": {
        "FA/gpstrack": {
          "latitude": 56.7822,
          "longitude": 11.8876
        }
      }
    }
  ]
}
```

## Task

- read and parse the signals.json file with ferrybox measurements
- create a simple web application with a visualization of the measurements
- add controls which allows the user to specify start/end time, allowing the user to choose which time period to display

## Deliverables

We expect you to make a web application with visualizations described above.

To make sure you don't stay up all night to complete this, we want to timecap the task to 2-3 hours. We don't expect a fully polished solution.

Please bring the code (either on your own machine or do a private github fork) and prepare a short oral presentation of your work in the interview.

### Technology

You are free to choose any language and library. If you have no strong preferences, we currently use the following relevant javascript libraries:

- react
- recharts
- openlayers (maps)

One quick way to get started is to use https://github.com/facebook/create-react-app
