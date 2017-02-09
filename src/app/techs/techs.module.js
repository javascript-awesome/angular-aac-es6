import angular from 'angular';

// components
import techItem from './components/techItem/techItem.component';
import techs from './components/techs/techs.component';

// services
import Tech from './services/tech.service';

export default angular
  .module('app.techs', [])
  .component('techItem', techItem)
  .component('techs', techs)
  .service('Tech', Tech);
