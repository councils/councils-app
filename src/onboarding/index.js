module.exports = (angular) => {
  'use strict';
  require('./_onboarding.scss');

  var ngModule = angular.module('councils.onboarding', [])

  .config(($stateProvider) => {
    $stateProvider.state('onboarding', {
        url: '/onboarding',
        title: 'Onboarding',
        views: {
          'fullscreen' : {
            template: require('./onboarding.html'),
            controller: 'OnboardingCtrl',
            controllerAs: 'onboarding'
          }
        }
      });
  });

  // load module components
  require('./OnboardingCtrl.js')(ngModule);

  return ngModule;
};
