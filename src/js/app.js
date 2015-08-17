var app = angular.module('julia', [
        'ui.router',
        'ngTouch'
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
                    pageTitle: 'Julia | About'
                }
            })
            .state('projects', {
                url: '/projects',
                templateUrl: './views/projects.html',
                data: {
                    pageTitle: 'Juila | Projects'
                }
            });
    }
]);
