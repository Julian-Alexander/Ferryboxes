# Environmental data visualisation

The purpose of this repo is to be used as a coding challenge during interviews.

## Introduction

We do a lot of environmental monitoring in NIVA. We have automatic sensors measuring the surrounding environment, both stationary and moving sensors. Monitoring the environment can be challenging, especially when we work with water. Algae growing on the sensors is one example of factors which may lead to false values.

One of our data sources are so called "ferryboxes", which are installed in various ships. These pump in water and have various sensors in place, feeding us data over satellite connection.  

Below is an example of a json file with ferrybox measurements:

```
{
  "t": [
    {
      "properties": {
        "datetime": "2019-08-05T23:15:20",
        "platform_code": "FA",
        "signal_id": "a53af03c-1422-406e-b01a-2a3b6b68a2a8"
      },
      "measurements": {
        "FA/ferrybox/GPS/TIME": 231520.0,
        "FA/ferrybox/SYSTEM/PUMP": 1.0,
        "FA/ferrybox/SYSTEM/OBSTRUCTION": 0.0,
        "FA/ferrybox/SAMPLER/MANUAL_COUNTER": 0.0,
        "FA/ferrybox/SAMPLER/AUTOMATIC_COUNTER": 0.0,
        "FA/ferrybox/SYSTEM/TRIP_NUMBER": 12393.0,
        "FA/ferrybox/TURBIDITY": 0.46,
        "FA/ferrybox/CHLA_FLUORESCENCE/RAW": 4.65,
        "FA/ferrybox/CHLA_FLUORESCENCE/ADJUSTED": 1.395,
        "FA/ferrybox/INLET/TEMPERATURE": 20.425,
        "FA/ferrybox/CTD/TEMPERATURE": 20.908,
        "FA/ferrybox/CTD/SALINITY": 18.978,
        "FA/ferrybox/OXYGEN/CONCENTRATION": 0.0,
        "FA/ferrybox/OXYGEN/SATURATION": 0.0,
        "FA/ferrybox/OXYGEN/TEMPERATURE": 0.0,
        "FA/ferrybox/CDOM_FLUORESCENCE/RAW": 3.4,
        "FA/ferrybox/CDOM_FLUORESCENCE/ADJUSTED": 3.4,
        "FA/ferrybox/CYANO_FLUORESCENCE/RAW": 4.1,
        "FA/ferrybox/CYANO_FLUORESCENCE/ADJUSTED": 4.1,
        "FA/ferrybox/INLET/OXYGEN/SATURATION": 0.0,
        "FA/ferrybox/INLET/OXYGEN/CONCENTRATION": 0.0,
        "FA/ferrybox/INLET/OXYGEN/TEMPERATURE": 0.0,
        "FA/ferrybox/PAH_FLUORESCENCE/RAW": 8.4,
        "FA/ferrybox/PAH_FLUORESCENCE/ADJUSTED": 8.4
      },
      "measured_flags": {
        "FA/ferrybox/QC/G0/SYSTEM/DATA_FLAG_UNDERWAY": 1.0
      },
      "location": {
        "FA/gpstrack": {
          "longitude": 11.5786,
          "latitude": 57.3122
        }
      }
    }
  ]
}
```


## Task
- read and parse the signals json file with ferrybox measurements
  - see file FA.2011-03-16T05:09:00_2011-03-17T06:11:31.json
- create a simple web application with a visualization of the following measurements:
  - temperature
  - salinity
  - turbidity
- apply simple quality control and filter out noisy data
  - TODO: set some thresholds?



## Deliverables

We expect you to make a web application with visualizations described above.

Please bring the code (either on your own machine or do a private github fork) and prepare a short oral presentation of your work in the interview.

To make sure you don't stay up all night to complete this, we want to timecap the task to 2-3 hours. We don't expect a fully polished solution.

### Technology

You are free to choose any language and library. If you have no strong preferences, we currently use the following relevant javascript libraries:

- react
- recharts
- openlayers (maps)

One quick way to get started is to use https://github.com/facebook/create-react-app