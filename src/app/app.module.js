// DEPENDENCIES
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

// CONFIGS
import routesConfig from './app.routes.config';
import httpInterceptorConfig from './app.httpInterceptor.config';

// CUSTOM MODULES
import commonModule from './common/common.module';
import aboutModule from './about/about.module';
import dashboardModule from './dashboard/dashboard.module';
import techsModule from './techs/techs.module';

// MAIN COMPONENT
import main from './main/main.component'

// STYLES
import './app.scss';

angular
  .module('app', [
    // DEPENDENCIES
    uiRouter,
    uiBootstrap,

    // CUSTOM MODULES
    dashboardModule.name,
    commonModule.name,
    aboutModule.name,
    techsModule.name
  ])
  .config(routesConfig)
  .config(httpInterceptorConfig)
  .component('main', main);
