var app = angular.module( 'app' );


app.directive( 'metronome', function ( ) {
    return {
        restrict: 'EA',
        templateUrl: 'views/metronome.html'
    }
} );
