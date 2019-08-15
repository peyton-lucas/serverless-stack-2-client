import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";

HistogramBellCurve(Highcharts);
// Use setState and props - possibly propTypes - to pass data around
let data;

const options = {
  title: {
    text: 'Bell Curve'
  },

  credits: {
    enabled: false,
    // text: 'studistics.com',
    // href: 'http://studistics.com'
  },

  xAxis: [{
    title: {
      text: 'Days'
    },
    alignTicks: false
  }, {
    title: {
      text: 'Bell Curve'
    },
    alignTicks: false,
    opposite: true
  }],

  yAxis: [{
    title: {
      text: 'Standard Diviation' // Deliver via this.state.sixtyDayWeight
    }
  }, {
    title: {
      text: 'Bell curve'
    },
    opposite: true,
  }],

  series: [{
    name: 'Bell Curve',
    type: 'bellcurve',
    xAxis: 1,
    yAxis: 1,
    zIndex: -1
  }, {
    // Attach collectionTime to this title
    name: 'Livestock Data',
    type: 'scatter',
    data: data,
    marker: {
      radius: 1.5
    }
  }]
}

export default class HistogramBellCurve extends component {
  constructor() {
    super(props);

    this.state = {
      // Shouldn't be an anti-pattern as this is only seed data
      // for component's internally controlled state...
      // This won't change once graph is rendered
      collectionTime: props.collectionTime
    }
  }

  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
