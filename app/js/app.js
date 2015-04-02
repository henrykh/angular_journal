'use strict';

var journalApp = angular.module('journalApp', [
	'ngRoute',
	'journalAppControllers'
	]);


journalApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'JournalAppCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
 }]);
