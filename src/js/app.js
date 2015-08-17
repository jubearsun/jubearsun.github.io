var app = angular.module('julia', [
        'ui.router',
        'ngTouch'
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
                    pageTitle: 'Title'
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about.html',
                data: {
                    pageTitle: 'About'
                }
            })
            .state('projects', {
                url: '/projects',
                templateUrl: './views/projects.html',
                data: {
                    pageTitle: 'Projects'
                }
            });
    }
]);
