import BaseChart from './base-chart';

// https://www.highcharts.com/demo/line-basic
export default class FitnessChart extends BaseChart {
  chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Fitness activity over time'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Miles Ran'
      }
    }
  };
}
