import React, { Component } from "react";
import Chart from "react-apexcharts";

class CandleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
        series: [{
          data: [{
              x: 1,
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: 2,
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
                x: 3,
                y: [6623.48, 6627, 6618.38, 6620.35]
              },
              {
                x: 4,
                y: [6623.48, 6627, 6618.38, 6620.35]
              },
              {
                x: 5,
                y: [6623.48, 6627, 6618.38, 6620.35]
              }
          ]
        }],
        options: {
          chart: {
            type: 'candlestick',
            height: 350
          },
          title: {
            text: 'Voltajes',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      
      
      };
  }

  render() {
    return (
      <div >
            <Chart options={this.state.options}
             series={this.state.series} 
             type="candlestick" 
             height={350}
            />
      </div>
    );
  }
}

export default CandleChart;