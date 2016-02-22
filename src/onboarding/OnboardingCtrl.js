module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function OnboardingCtrl ($scope, $state, $ionicSlideBoxDelegate) {
    var onboarding = this;

    onboarding.pagerClicked = function(index) {
        $ionicSlideBoxDelegate.slide(index);
    }

    onboarding.goLogin = function() {
        window.localStorage.setItem('councilsApp.onboarding', true);
        $state.go('login');
    }

    onboarding.slides = [
        {
            name: 'councils',
            title: 'Councils',
            blurb: 'Stake and Ward productivity on a simple intuitive app',
            img: require('../common/assets/onboarding-councils.jpg')
        },
        {
            name: 'agendas',
            title: 'Agendas',
            blurb: 'Create Stake and Ward agendas for your council meetings in minutes right from your phone',
            img: require('../common/assets/onboarding-agendas.jpg')
        },
        {
            name: 'discussions',
            title: 'Discussions',
            blurb: 'Start a safe and secure discussion about any topic in each council or with whoever you invite',
            img: require('../common/assets/onboarding-discussions.jpg')
        },
        {
            name: 'assignments',
            title: 'Assignments',
            blurb: 'Create and delegate assignments from an agenda, or during the week, with one simple click',
            img: require('../common/assets/onboarding-assignments.jpg')
        }
    ]

  }

  ngModule.controller('OnboardingCtrl', OnboardingCtrl);
};
