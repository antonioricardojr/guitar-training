var app = angular.module( "app", [ ] );



app.controller( "ExerciseController", [ '$scope', function ( $scope ) {


    var self = this;

    self.name = "this is the controller for the exercise";
    self.seq;


    self.generateSequence = function ( ) {

        self.seq = [ ];

        counter = 0;
        while ( counter < 4 ) {

            var value = Math.floor( Math.random( ) * 4 ) + 1;

            if ( self.seq.indexOf( value ) === -1 ) {

                self.seq.push( value );
                counter += 1;
            }
        }
    }

} ] );
