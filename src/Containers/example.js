/*class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [{
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
              x: new Date(1538877600000),
              y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
              x: new Date(1538879400000),
              y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
              x: new Date(1538881200000),
              y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
              x: new Date(1538883000000),
              y: [6603.85, 6605, 6600, 6604.07]
            },
            {
              x: new Date(1538884800000),
              y: [6604.98, 6606, 6604.07, 6606]
            },
          ]
        }],
        options: {
          chart: {
            type: 'candlestick',
            height: 350
          },
          title: {
            text: 'CandleStick Chart',
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
        

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
</div>

);
}
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(ApexChart), domContainer);
*/

/*constructor(props){
        super(props);

        this.state = {
            series: [{
                data: [{
                    x: new Date('2018-02-12').getTime(),
                    y: 76
                  }, {
                    x: new Date('2018-02-12').getTime(),
                    y: 76
                  }]
            }],
            options: {
                chart: {
                    id: "realtime", //identificador de tipo de linea
                    height: 350, // Altura de la grafica
                    type: "line", //tipo de grafica
                    animations: {
                        enabled: true, // permite la animacion
                        easing: "linear",
                        dynamicAnimation: {
                            speed: 1000
                        }
                    },
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "smooth"
                },
                title: {
                    text: 'Dynamic Updating Chart',
                    align: 'left'
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime',
                    range: XAXISRANGE,
                },
                yaxis: {
                    max: 100
                },
                legend: {
                    show: false
                },
            }
        }; // termino del state
    }
  
    componentDidMount() {
      window.setInterval(() => {
        getNewSeries(lastDate, {
          min: 10,
          max: 90
        })
        
        Chart.exec('realtime', 'updateSeries', [{
          data: data
        }])
      }, 1000)
    }*/