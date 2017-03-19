var app = angular.module( 'app' );

app.directive( 'metronome', [ function ( ) {
    // Runs during compile
    return {
        scope: {

        },
        controller: "MetronomeController as ctrl",
        restrict: 'EA',
        templateUrl: 'views/metronome.html',
        link: function ( $scope, iElm, iAttrs, controller ) {}
    };
} ] );
