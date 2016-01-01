app.controller('projectsCtrl', ['$scope', function($scope) {
    $scope.projects = [
        {
            title: 'InnoD Photo Tier Portfolio',
            preview: '../assets/img/projects/photo-portfolio/preview.png',
            link: ''
        },
        {
            title: 'Personal Site Iteration',
            preview: '../assets/img/projects/personal/preview.png',
            link: ''
        }
    ];
}]);
