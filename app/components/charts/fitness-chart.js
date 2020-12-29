import BaseChart from './base-chart';

export default class FitnessChart extends BaseChart {
  chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Fitness activity in a month'
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
