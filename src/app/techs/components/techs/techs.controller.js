export class Ctrl {
  /** @ngInject */
  constructor(Tech) {
    // DI
    this.Tech = Tech;
  }

  $onInit() {
    this.Tech.getList().then(list => this.list = list);
  }
};
