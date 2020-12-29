import BaseChart from './base-chart';

// https://www.highcharts.com/demo/scatter
export default class HeightWeightChart extends BaseChart {
  chartOptions = {
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    title: {
      text: 'Height Versus Weight of Individuals by Gender'
    },
    subtitle: {
      text: 'Source: Heinz  2003'
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Height (cm)'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Weight (kg)'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      borderWidth: 1
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x} cm, {point.y} kg'
        }
      }
    }
  };
}
