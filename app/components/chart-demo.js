import Component from '@glimmer/component';

export default class ChartDemoComponent extends Component {
  chartData = [
    {
      name: 'Miles ran',
      data: [
        [1519891200000, 2],
        [1520409600000, 2],
        [1520838000000, 2.5],
        [1521097200000, 3],
        [1521529200000, 3.7],
        [1522047600000, 4]
      ]
    }
  ];
}
