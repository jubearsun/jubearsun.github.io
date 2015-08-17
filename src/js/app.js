var app = angular.module('julia', [
        'ui.router',
        'ngTouch'
    ]);

app.run(['$rootScope',
    '$state',
    '$location',
    '$window',
    function ($rootScope, $state, $location, $window) {
        $rootScope.$state = $state;

        // Get Page Title on successful page change
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            // Sets HTML/Page Title
            $rootScope.currentPage = toState.name;

            if (toState.data && toState.data.pageTitle) {
                $rootScope.pageTitle = toState.data.pageTitle;
            } else {
                $rootScope.pageTitle = 'Julia Sun';
            }
        });

        // Scroll to top of page on page change
        $rootScope.$on('$viewContentLoaded', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
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
