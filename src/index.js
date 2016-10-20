// DEPENDENCIES
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

// CONFIGS
import routesConfig from './routes';
import httpInterceptorConfig from './configs/httpInterceptor.config';

// CUSTOM MODULES
import commonModule from './app/common';
import aboutModule from './app/about';
import dashboardModule from './app/dashboard';
import {techsModule} from './app/techs';

// MAIN COMPONENT
import main from './app/main/main.component'

// STYLES
import './index.scss';


angular
  .module('app', [
    // DEPENDENCIES
    uiRouter,
    uiBootstrap,

    // CUSTOM MODULES
    dashboardModule.name,
    commonModule.name,
    aboutModule.name,
    techsModule
  ])
  .config(routesConfig)
  .config(httpInterceptorConfig)
  .component('main', main)
;
