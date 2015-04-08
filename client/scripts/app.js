angular.module('fds', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  // not yet in use
  .when('/home', {
    templateUrl: '/partials/home.html',
    controller: 'HomeController' 
  })
  .otherwise({
    redirectTo: '/home'
  });
})

.controller({
  HomeController: require('./controllers/HomeController')
})

.directive({
  test: require('./directives/test')
})