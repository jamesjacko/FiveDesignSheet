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