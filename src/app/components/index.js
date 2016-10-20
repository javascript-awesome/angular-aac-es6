import angular from 'angular';

import dashboard from './dashboard/dashboard'


export const componentsModule = 'app.components';

angular
    .module(componentsModule, [])

    .component('dashboard', dashboard)
