import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | chart-demo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ChartDemo />`);

    const elementText = this.element.textContent.trim();

    // EmployeeChart
    assert.true(elementText.includes('Solar Employment Growth by Sector, 2010-2016'));

    // FitnessChart
    assert.true(elementText.includes('Fitness activity over days'));

    // HeightWeightChart
    assert.true(elementText.includes('Height Versus Weight of Individuals by Gender'));

    // PopulationChart
    assert.true(elementText.includes('Historic World Population by Region'));

    // SalesChart
    assert.true(elementText.includes('Sales per employee per weekday'));
  });
});
