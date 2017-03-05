var app = angular.module( 'app' );



app.controller( 'MetronomyController', [ 'ngAudio', function ( ngAudio ) {

    var self = this;

    self.tic = ngAudio.load( "assets/sounds/tic.mp3" );
    self.tac = ngAudio.load( "assets/sounds/tac.mp3" );

} ] );
