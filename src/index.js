import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import {componentsModule} from './app/components';
import {commonModule} from './app/common';
import {techsModule} from './app/techs'

import routesConfig from './routes';

import './index.scss';


angular
  .module('app', [
    // dependencies
    uiRouter, uiBootstrap,

    // modules
    componentsModule,
    commonModule,
    techsModule
  ])
  .config(routesConfig);
