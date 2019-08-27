import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";

HistogramBellCurve(Highcharts);
// Use setState and props - possibly propTypes - to pass data around
let data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
  4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
  3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
  3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3,
  2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3,
  2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3,
  2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6,
  3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2,
  2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7,
  3.2, 3.3, 3, 2.5, 3, 3.4, 3];

export default class Bellcurve extends Component {
  render() {
    const options = {
      title: {
        text: 'Bell Curve'
      },
      chart: {
        plotBackgroundColor: '#d8e0d6',
        backgroundColor: '#d8e0d6'
      },
      credits: {
        enabled: true,
        text: 'studistics.com',
        href: 'http://studistics.com'
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
        color: this.props.color,
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1
      }, {
        // Attach collectionTime to this title
        name: 'Livestock Data',
        type: 'scatter',
        data: data,
        color: '#333333',
        marker: {
          radius: 1.5
        }
      }]
    }
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    );
  }
}
