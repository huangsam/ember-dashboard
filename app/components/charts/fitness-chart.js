// import Highcharts from 'ember-highcharts/components/high-charts';
import BaseChart from './base-chart';

export default class FitnessChart extends BaseChart {
  // https://api.highcharts.com/highcharts/
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
