import BaseChart from './base-chart';

export default class FitnessChart extends BaseChart {
  chartOptions = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Fitness Chart'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Miles Ran'
      }
    }
  }
}
