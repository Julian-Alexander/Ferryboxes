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