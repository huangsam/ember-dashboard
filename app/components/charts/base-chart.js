import Component from '@glimmer/component';
import defaultTheme from '../themes/default-theme';

/**
 * Base chart class
 *
 * Written to enhance the chart constructor and styling of the vanilla
 * HighCharts component from ember-highcharts.
 *
 * Inspiration:
 * https://derricksdocs.com/a-simple-time-series-chart-with-ember-highcharts/
 */
export default class BaseChart extends Component {
  constructor(owner, args) {
    super(owner, args);

    // Chart options
    // https://api.highcharts.com/highcharts/
    this.chartOptions = this.chartOptions || args.chartOptions;

    // Chart data
    // Ensure that the data is compatible with the chart type
    this.chartData = args.chartData;

    // Chart theme
    // https://www.highcharts.com/docs/chart-design-and-style/themes
    this.chartTheme = args.chartTheme || defaultTheme;
  }

  get content() {
    return this.chartData;
  }

  get theme() {
    return this.chartTheme;
  }
}
