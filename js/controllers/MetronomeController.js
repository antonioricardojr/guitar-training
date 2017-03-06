var app = angular.module( 'app' );

app.controller( 'MetronomeController', [ 'ngAudio', function ( ngAudio ) {

    var self = this;

    self.tic = ngAudio.load( "assets/sounds/tic.mp3" );
    self.tac = ngAudio.load( "assets/sounds/tac.mp3" );

    self.interval;
    self.timeInterval;

    self.beats = 4;
    self.bpm = 120;

    self.play = function ( ) {
        self.timePlay( );
        self.interval = setInterval( function ( ) {
            self.timePlay( );
        }, self.beats * ( 60 / self.bpm ) * 1000 );
    }

    self.timePlay = function ( ) {
        self.tic.play( );

        var ticCount = 0;
        self.timeInterval = setInterval( function ( ) {
            if ( ticCount < self.beats - 1 ) {
                self.tac.play( );
                ticCount++;
            }
        }, ( 60 / self.bpm ) * 1000 );
    }

    self.stop = function ( ) {
        clearInterval( self.interval );
        clearInterval( self.timeInterval );
    }
} ] );
