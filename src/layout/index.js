module.exports = (angular) =>{
  'use strict';
  require('./_layout.scss');

  var ngModule = angular.module('councils.layout', ['ngMaterial'])

  .config(($stateProvider) => {
    $stateProvider.state('layout', {
        abstract: true,
        views: {
          'fullscreen' : {
            template: require('./layout.html'),
            controller: 'LayoutCtrl',
            controllerAs: 'layout'
          }
        }
    });
  });

  // load module components
  require('./LayoutCtrl.js')(ngModule);

  return ngModule;
};
