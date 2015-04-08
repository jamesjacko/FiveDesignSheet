(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./controllers/HomeController":2,"./directives/test":3}],2:[function(require,module,exports){
module.exports = function($scope){
  
	

};
},{}],3:[function(require,module,exports){
// Project Directive
// -----------------
// Templates a partial and is 
// defined by the project attribute, 
// which should point to a firebase reference
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/project.html',
    scope: {
      project: '=hopperProject'
    }
  }
};
},{}]},{},[1]);
