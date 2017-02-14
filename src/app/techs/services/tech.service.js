export default class TechService {
  /** @ngInject */
  constructor($http) {
    // DI
    this.$http = $http;
  }

  getList() {
    return this.$http.get('assets/mockData/techs.json').then(({data}) => data);
  }
}
