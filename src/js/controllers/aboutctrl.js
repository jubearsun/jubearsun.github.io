app.controller('aboutctrl', ['$scope', function($scope) {

    $scope.descriptions = [
    /*jshint multistr: true */
        {
            title: 'Julia Sun',
            subtitle: '',
            photo: '../assets/img/about/prof.jpg',
            blurb: 'Nice to meet you!  Below are a few fun facts \
                    about me.  You can get my contact \
                    information or find me online \
                    by clicking any of the links at the bottom \
                    of this page.'
        },
        {
            title: 'Class of 2017',
            subtitle: 'University of California, Berkeley',
            photo: '../assets/img/about/campanile.jpg',
            blurb: 'I am currently a third year Computer Science major \
                    at UC Berkeley.'
        },
        {
            title: 'Engineering Practicum Intern',
            subtitle: 'Google, Inc.',
            photo: '../assets/img/about/google.jpg',
            blurb: 'I was an EP intern at Google this past summer. \
                    I worked on mobile display ads and learned \
                    Objective-C and server side development.'
        },
        {
            title: 'Adoption Volunteer',
            subtitle: 'Doggie Protective Services',
            photo: '../assets/img/about/dps.jpg',
            blurb: 'I love dogs!  I volunteered for a rescue group \
                    back in high school and continue to advocate \
                    adoption.'
        },
        {
            title: 'Poro Enthusiast',
            subtitle: 'League of Legends',
            photo: '../assets/img/about/poros.jpg',
            blurb: 'I really like poros.  I love to feed them \
                    Poro Snax and currently have three of my own. \
                    Disclaimer: only two of them are pictured.'
        }
    ];
}]);
