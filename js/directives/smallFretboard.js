var app = angular.module( 'app' );


app.directive( 'smallFretboard', [ function ( ) {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'views/small_fretboard.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function ( $scope, iElm, iAttrs, controller ) {

            function makeChord( containerClass, fretClass ) {
                if ( !containerClass ) { containerClass = "make-chord" }
                if ( !fretClass ) { fretClass = "fret"; }
                var chord = document.getElementsByClassName( containerClass );

                for ( var i = 0; i < chord.length; i++ ) {
                    if ( chord[ i ].children.length === 0 ) { //don't do if already done
                        var voice = chord[ i ].innerHTML,
                            voicing = voice.split( "," ),
                            html = "";

                        for ( var x = 0; x < voicing.length; x++ ) {
                            html += '<span class="' + fretClass + ' ' + fretClass + '-' + ( voicing[ x ] ) + '">' + voicing[ x ] + '</span>';
                        }

                        chord[ i ].innerHTML = html;
                    } // end if
                }
            }

            makeChord( );

            // just for demo-ing the change
            document.getElementById( 'change-chord' )
                .onclick = function ( ) {
                    var newChord = this.getAttribute( 'data-chord' );
                    document.getElementById( 'changes' )
                        .innerHTML = newChord;
                    makeChord( );
                    this.style.display = "none";
                }

        }
    };
} ] );
