app.controller('aboutctrl', ['$scope', function($scope) {

    $scope.descriptions = [
        {
            title: 'Julia Sun',
            subtitle: 'filler',
            photo: '../assets/img/about/prof.jpg',
            blurb: 'Hi my name is Julia.'
        },
        {
            title: 'Class of 2017',
            subtitle: 'University of California, Berkeley',
            photo: '../assets/img/about/campanile.jpg',
            blurb: 'I am currently a third year computer science major.'
        },
        {
            title: 'Engineering Practicum Intern',
            subtitle: 'Google, Inc.',
            photo: '../assets/img/about/google.jpg',
            blurb: 'I was an EP intern at Google this past summer.'
        },
        {
            title: 'Adoption Volunteer',
            subtitle: 'Doggie Protective Services',
            photo: '../assets/img/about/dps.jpg',
            blurb: 'I love dogs!'
        },
        {
            title: 'Poro Enthusiast',
            subtitle: 'League of Legends',
            photo: '../assets/img/about/poros.jpg',
            blurb: 'I really like poros.'
        }
    ];
}]);
