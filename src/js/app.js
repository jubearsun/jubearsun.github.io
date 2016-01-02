var app = angular.module('julia', [
        'ui.router',
        'ngTouch',
        'ngAnimate'
    ]);

app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                data: {
                    pageTitle: 'Julia Sun'
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about.html',
                data: {
                    pageTitle: 'About | Julia Sun'
                }
            })
            .state('projects', {
                url: '/projects',
                templateUrl: './views/projects.html',
                data: {
                    pageTitle: 'Work | Julia Sun'
                }
            })
            .state('dw', {
                url: '/dw',
                templateUrl: './views/dw.html',
                data: {
                    pageTitle: 'Device Wall | Julia Sun'
                }
            })
            .state('photo', {
                url: '/photo',
                templateUrl: './views/photo.html',
                data: {
                    pageTitle: 'Photo Portfolio | Julia Sun'
                }
            })
            .state('premed', {
                url: '/premed',
                templateUrl: './views/premed.html',
                data: {
                    pageTitle: 'Premed at Berkeley | Julia Sun'
                }
            })
            .state('personal', {
                url: '/personal',
                templateUrl: './views/personal.html',
                data: {
                    pageTitle: 'Personal Site | Julia Sun'
                }
            });
    }
]);
