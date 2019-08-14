import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";
import "./sixtyDayWeights.css";

HistogramBellCurve(Highcharts);
// Make this a bell-curve class that can be used for all three graphs
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
    name: 'Livestock Data',
    type: 'scatter',
    data: data,
    marker: {
      radius: 1.5
    }
  }]
}

export default class sixtyDayWeights extends component {
  render() {
    return (
      <div className="sixtyDayWeights">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
