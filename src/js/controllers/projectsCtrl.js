app.controller('projectsCtrl', ['$scope', function($scope) {
    $scope.projects = [
        {
            title: 'Device Wall',
            preview: '../assets/img/projects/device-wall/preview.png',
            link: 'dw',
            location: 'top first'
        },
        {
            title: 'Personal Site Iteration',
            preview: '../assets/img/projects/personal/preview.png',
            link: 'personal',
            location: 'top'
        },
        {
            title: 'Photo Tier Portfolio',
            preview: '../assets/img/projects/photo-portfolio/preview.png',
            link: 'photo',
            location: 'bottom'
        },
        {
            title: 'Premed at Berkeley',
            preview: '../assets/img/projects/premed/preview.png',
            link: 'premed',
            location: 'bottom'
        }
    ];
}]);
