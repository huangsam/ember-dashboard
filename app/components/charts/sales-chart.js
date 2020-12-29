import BaseChart from './base-chart';

export default class SalesChart extends BaseChart {
  chartOptions = {
    chart: {
      type: 'heatmap',
      marginTop: 50,
      marginBottom: 80,
      plotBorderWidth: 1
    },
    title: {
      text: 'Sales per employee per weekday'
    },
    xAxis: {
      categories: [
        'Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas',
        'Maria', 'Leon', 'Anna', 'Tim', 'Laura'
      ]
    },
    yAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      title: null
    },
    colorAxis: {
      min: 0,
      minColor: '#ffffff',
      maxColor: '#258be2'
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 35,
      symbolHeight: 268
    },
    tooltip: {
      formatter() {
      let x = this.series.xAxis.categories[this.point.x];
      let y = this.series.yAxis.categories[this.point.y];
      let { value } = this.point;
      return `<b>${x}</b> sold<br><b>${value}</b> items on<br><b>${y}</b>`;
      }
    }
  };
}
