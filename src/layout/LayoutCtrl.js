module.exports = function (ngModule) {
    'use strict';

    // @ngInject
    function LayoutCtrl ($rootScope, $mdUtil, $mdSidenav, $state, PLATFORM) {
        var layout = this;

        console.log(PLATFORM);
        if (PLATFORM === 'iOS') {
            angular.element('#councilsApp').addClass('status-bar');
            angular.element('#topBar').addClass('status-bar');
            angular.element('.nav-header').addClass('status-bar');
        }

        layout.close = function (state) {
            $state.go(state)
            .then(() => {
                $mdSidenav('left').close();
            });
        };

        layout.navItems = [
            {
                name: 'Home',
                icon: 'home',
                state: 'layout.home'
            }, {
                name: 'Councils',
                icon: 'people_outline',
                state: 'layout.councils'
            }, {
                name: 'Private Messages',
                icon: 'settings',
                state: 'layout.settings'
            }, {
                name: 'Feeback',
                icon: 'feedback',
                state: 'layout.feedback'
            }, {
                name: 'Sync LDS.org',
                icon: 'sync',
                state: '#'
            }
        ];

        console.info(layout);
    }

    ngModule.controller('LayoutCtrl', LayoutCtrl);
};
