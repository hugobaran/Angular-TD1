angular.module("sampleApp").config(['$routeProvider',
       function($routeProvider) {
           $routeProvider.
               when('/route1', {
                   templateUrl: 'views/route1-template.html',
                   controller: 'sampleController',
                   controllerAs: 'rtCtrl1'
               }).
               when('/route2/:nom', {
                   templateUrl: 'views/route2-template.html',
                   controller: 'sampleController',
                   controllerAs: 'rtCtrl2'
               }).otherwise({
                redirectTo: '/route1'
            });
       }]);
