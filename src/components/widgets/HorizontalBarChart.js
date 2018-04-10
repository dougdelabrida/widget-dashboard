import React, { Component } from 'react';
import Chart from 'chart.js';

Chart.defaults.global.defaultFontColor = "#000";

export default class HorizontalBarChart extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    
    new Chart(canvas, {
      type: 'horizontalBar',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        legend: { display: false },
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
    return(
      <canvas ref={this.canvas}></canvas>
    );
  }
}
