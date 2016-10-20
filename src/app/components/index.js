import angular from 'angular';

import about from './about/about'
import dashboard from './dashboard/dashboard'


export const componentsModule = 'app.components';

angular
    .module(componentsModule, [])
    .component('about', about)
    .component('dashboard', dashboard)
