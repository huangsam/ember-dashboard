import Highcharts from 'ember-highcharts/components/high-charts';

export default class FitnessChart extends Highcharts {
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

  content = []
}
