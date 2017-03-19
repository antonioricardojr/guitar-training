var app = angular.module( 'app' );

app.controller( 'MetronomeController', [ 'ngAudio', '$scope', 'MetronomeService', function ( ngAudio, $scope, MetronomeService ) {

    var self = this;

    self.beats = MetronomeService.beats;
    self.bpm = MetronomeService.bpm;

    self.play = function ( ) {
        MetronomeService.play( );
    }

    self.timePlay = function ( ) {
        MetronomeService.timePlay( );
    }

    self.stop = function ( ) {
        MetronomeService.stop( );
    }

    self.reset = function ( ) {
        MetronomeService.reset( self.beats, self.bpm );
    }

} ] );
