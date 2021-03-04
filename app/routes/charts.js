import Route from '@ember/routing/route';

/**
 * Charts route
 *
 * Fetches JSON data from multiple files and feeds them as props to the
 * charts template. In practice, this would involve actual API calls
 * and some ETL/transformation. With this type of data pipeline, we
 * assume that the chartOptions will not be modified dynamically.
 * In rare circumstances, various options like xAxis and yAxis may
 * need to be modified dynamically. But for now, this is sufficient.
 *
 * Inspiration:
 * https://guides.emberjs.com/release/tutorial/part-1/working-with-data/
 */
export default class ChartsRoute extends Route {
  dataMapping = {
    browserData: '/api/browser-data.json',
    employmentData: '/api/employment-data.json',
    fitnessData: '/api/fitness-data.json',
    heightWeightData: '/api/height-weight-data.json',
    populationData: '/api/population-data.json',
    salesData: '/api/sales-data.json',
  };

  async model() {
    let result = {};

    for (const [dataField, dataUrl] of Object.entries(this.dataMapping)) {
      let response = await fetch(dataUrl);
      let parsed = await response.json();
      result[dataField] = parsed;
    }

    return result;
  }
}
