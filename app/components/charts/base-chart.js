import Component from '@glimmer/component';
import defaultTheme from '../themes/default-theme';

export default class BaseChart extends Component {
  constructor(owner, args) {
    super(owner, args);
    this.chartData = args.chartData;
    this.chartTheme = args.chartTheme || defaultTheme;
  }

  get content() {
    return this.chartData;
  }

  get theme() {
    return this.chartTheme;
  }
}
