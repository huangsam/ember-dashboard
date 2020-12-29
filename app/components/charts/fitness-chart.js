import BaseChart from './base-chart';

// https://www.highcharts.com/demo/area-basic
export default class FitnessChart extends BaseChart {
  chartOptions = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Fitness activity over days'
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
