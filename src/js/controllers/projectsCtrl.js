app.controller('projectsCtrl', ['$scope', function($scope) {
    $scope.projects = [
        {
            title: 'Google Internship (Device Wall)',
            preview: '../assets/img/projects/device-wall/preview.png'
        },
        {
            title: 'Personal Site Iteration',
            preview: '../assets/img/projects/personal/preview.png',
            link: ''
        },
        {
            title: 'InnoD Photo Tier Portfolio',
            preview: '../assets/img/projects/photo-portfolio/preview.png',
            link: ''
        },
        {
            title: 'Premed at Berkeley',
            preview: '../assets/img/projects/premed/preview.png',
            link: ''
        }
    ];
}]);
