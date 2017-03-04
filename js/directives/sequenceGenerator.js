var app = angular.module( 'app' );

app.directive( 'sequenceGenerator', function ( ) {

    return {
        restrict: 'EA',
        templateUrl: 'views/sequence-generator.html'
    }

} );
