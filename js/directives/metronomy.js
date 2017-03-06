var app = angular.module( 'app' );


app.directive( 'metronomy', function ( ) {
    return {
        restrict: 'EA',
        templateUrl: 'views/metronomy.html'
    }
} );
