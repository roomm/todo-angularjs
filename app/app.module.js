'use strict';

/**
 * @ngdoc overview
 * @name todoAjsApp
 * @description
 * # todoAjsApp
 *
 * Main module of the application.
 */
angular
  .module('todoAjsApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    "ngAnimate",
    'ngTouch',
    'LocalStorageModule'
  ]);
