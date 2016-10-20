import angular from 'angular';

import footer from './components/footer/footer.component'
import navbar from './components/navbar/navbar.component'


export default angular
  .module('app.common', [])
  .component('myFooter', footer)
  .component('navbar', navbar);
