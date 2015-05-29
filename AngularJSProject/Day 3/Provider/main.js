var app = angular.module('app', []);

function movieService() {
    this.movies = [
        { title: "Die Hard", role: "Officer John McClane", released: "1988" },
        { title: "Unbreakable", role: "David Dunn", released: "2000" },
        { title: "The Sixth Sense", role: "Dr. Malcolm Crowe", released: "1999" },
        { title: "Armageddon", role: "Harry Stamper", released: "1998" },
        { title: "Twelve Monkeys", role: "James Cole", released: "1995" }
    ];
}

app.provider('movieProvider', function () {
    this.$get = function getMovieService() {
        return new movieService();
    };
});

app.controller('movieController', function ($scope, movieProvider) {
    $scope.movies = movieProvider.movies;
});