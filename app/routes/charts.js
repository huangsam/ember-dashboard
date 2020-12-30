import Route from '@ember/routing/route';

export default class ChartsRoute extends Route {
  dataMapping = {
    browserData: '/api/browser-data.json',
    employmentData: '/api/employment-data.json',
    fitnessData: '/api/fitness-data.json',
    heightWeightData: '/api/height-weight-data.json',
    populationData: '/api/population-data.json',
    salesData: '/api/sales-data.json'
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
