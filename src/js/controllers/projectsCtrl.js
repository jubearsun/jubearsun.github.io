app.controller('projectsCtrl', ['$scope', function($scope) {

    $scope.title = "Projects";

    $scope.projects = [
        {
            link: "",
            title: "Innovative Design Photo Portfolio",
            preview: "../assets/img/projects/photo-portfolio-preview.png"
        },
        {
            link: "",
            title: "Personal Site",
            preview: "../assets/img/projects/personal-preview.png"
        }
    ];

}]);
