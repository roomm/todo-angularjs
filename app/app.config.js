angular.module('todoAjsApp')
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', 'localStorageServiceProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, localStorageServiceProvider) {

    localStorageServiceProvider.setPrefix('todos');
    $ocLazyLoadProvider.config({
      debug: false,
      events: true
    });

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.view.html',
        controller: 'mainController',
        controllerAs: 'vm',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load(
              {
                name: 'todoAjsApp',
                files: [
                  "/main/main.controller.js"
                ]
              });
          }
        }
      });
  }]);
