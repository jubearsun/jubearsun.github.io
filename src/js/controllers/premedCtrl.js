app.controller('premedCtrl', ['$scope', function($scope) {
    $scope.title = 'Premed at Berkeley';

    $scope.demo = 'http://rocky-sands-3716.herokuapp.com/';

    $scope.toast = 'https://daneden.github.io/Toast/';

    $scope.github = 'https://github.com/InnoD-WebTier/premed';

    $scope.scss = 'http://sass-lang.com/guide';

    $scope.previous = 'photo';

    $scope.mockups = [
        '../assets/img/projects/premed/about.png',
        '../assets/img/projects/premed/advising.png',
        '../assets/img/projects/premed/clubs.png',
        '../assets/img/projects/premed/mcat.png'
    ];
}]);
