app.controller('projectsCtrl', ['$scope', function($scope) {
    $scope.projects = [
        {
            title: 'Device Wall',
            preview: '../assets/img/projects/device-wall/preview.png',
            link: 'dw'
        },
        {
            title: 'Personal Site Iteration',
            preview: '../assets/img/projects/personal/preview.png',
            link: 'personal'
        },
        {
            title: 'Photo Tier Portfolio',
            preview: '../assets/img/projects/photo-portfolio/preview.png',
            link: 'photo'
        },
        {
            title: 'Premed at Berkeley',
            preview: '../assets/img/projects/premed/preview.png',
            link: 'premed'
        }
    ];
}]);
