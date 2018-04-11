import React, { Component } from 'react';
import Chart from 'chart.js';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvas.current;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
        datasets: [{
            fillColor: "rgba(220,220,220,0)",
            strokeColor: "rgba(220,180,0,1)",
            pointColor: "rgba(220,180,0,1)",
            data: [20, 30, 80, 20, 40, 10, 60]
        }, {
            fillColor: "rgba(151,187,205,0)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            data: [60, 10, 40, 30, 80, 30, 20]
        }]
      },
      options: {
        legend: { display: true },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    });
  }

  render() {
    return <canvas ref={this.canvas}></canvas>;
  }
}
