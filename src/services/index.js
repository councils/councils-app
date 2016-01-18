module.exports = (angular) => {
  'use strict';

  // var ngCordova = require('./ng-cordova.js')(angular);

  var ngModule = angular.module('councils.services', [
    'firebase',
    // ngCordova.name
    // optionally inject dependencies for this feature.
  ])

  ngModule.factory('$ionicCoreSettings', function() {
    console.log('here I am!');
    var settings = {
      app_id: '683c86a8'
    };
    return {
      get: function(setting) {
        if (settings[setting]) {
          return settings[setting];
        }
        return null;
      }
    }
  });

  // load module components
  require('./user.js')(ngModule);
  require('./auth.js')(ngModule);
  require('./Notify.js')(ngModule);

  return ngModule;
};
