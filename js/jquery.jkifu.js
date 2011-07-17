(function($){

$.widget("eagle.jKifu", {
    // default options
    options: {
        size: 19
    },
    _create: function() {
        // creation code for mywidget
        // can use this.options

        this.$element = $( this.element);

        this.goban.render.call( this, this.$element );

        this.$element.delegate( 'td', 'click.jkifu', $.proxy( function( event ) {
            var data = $( event.currentTarget ).data();

            this.color = this.color || 'white';

            ( this.color === 'white' ) ? this.color = 'black' : this.color = 'white';
            this.goban.renderStone( data.x, data.y, this.color );
        }, this ) );
    },
    _doSomething: function() {
        // internal functions should be named with a leading underscore
        // manipulate the widget
    },
    value: function() {
        // calculate some value and return it
        return this._calculate();
    },
    length: function() {
        return this._someOtherValue();
    },
    destroy: function() {
        $.Widget.prototype.destroy.apply(this, arguments); // default destroy
        // now do other stuff particular to this widget
    },
    goban: {
        board: [],
        ui: {
            // The letter I is left out
            labels: 'ABCDEFGHJKLMNOPQRST'
        },
        render: function() {
            var $row,
                ui = this.goban.ui,
                i = 0,
                j = 0;

            ui.table = $( '<table />', { 'class' : 'goban' });
            ui.thead = $( '<thead />' );
            ui.tbody = $( '<tbody />' );
            ui.tfoot = $( '<tfoot />' );

            ui.table.appendTo( this.$element );
            ui.thead.appendTo( ui.table );
            ui.tbody.appendTo( ui.table );
            ui.tfoot.appendTo( ui.table );

            // Create the goban's intersections
            for ( i = 0; i < this.options.size; i = i + 1 ) {
                var row = [];

                $row = $( '<tr />' );

                // Add label for the left
                $( '<th />', { text: this.options.size - i } ).appendTo( $row );

                for ( j = 0; j < this.options.size; j = j + 1 ) {
                    var $intersection = $( '<td />' );

                    $intersection.data({
                        x: this.options.size - i,
                        y: this.options.size - j
                    });

                    $intersection.appendTo( $row );
                    row.unshift( $intersection );
                }

                // Add label for the right
                $( '<th />', { text: this.options.size - i } ).appendTo( $row );

                $row.appendTo( ui.tbody );
                this.goban.board.unshift( row );
            }

            // Create labels for the top
            $row = $( '<tr />', { 
                // An empty td at the beginning, since the first column is a label
                html: '<th></th>'
            } );

            for ( j = 0; j < this.options.size; j = j + 1 ) {
                $( '<th />', { text: ui.labels.substring( j, j + 1 ) } ).appendTo( $row );
            }

            // An empty td at the end, since the last column is a label
            $row.append( '<th></th>' );

            $row.appendTo( ui.thead )
                .clone()
                .appendTo( ui.tfoot );


        },
        clear: function() {
        },
        renderStone: function( x, y, color ) {
            var $intersection,
                $stone = $( '<b />', { 'class': 'stone' } ),
                $shadow = $( '<b />', { 'class': 'shadow' } ),
                color = color || 'black';

            if ( typeof x === 'undefined' || typeof y === 'undefined' ) {
                return false;
            }

            $intersection = this.board[ x - 1][ y - 1 ];

            if ( ! $intersection.is( ':empty' ) ) {
                return false;
            }

            $stone.addClass( color );

            $intersection.append( $shadow, $stone );

            return $stone;
        },
        renderMarker: function() {
        }
    }

});

})(jQuery);
