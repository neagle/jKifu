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
                $row = $( '<tr />' );

                // Add label for the left
                $( '<th />', { text: ui.labels.substring( i, i + 1 ) } ).appendTo( $row );

                for ( j = 0; j < this.options.size; j = j + 1 ) {
                    var $intersection = $( '<td />' );

                    $intersection.appendTo( $row );
                }

                // Add label for the right
                $( '<th />', { text: ui.labels.substring( i, i + 1 ) } ).appendTo( $row );

                $row.appendTo( ui.tbody );
            }

            // Create labels for the top
            $row = $( '<tr />', { 
                // An empty td at the beginning, since the first column is a label
                html: '<th></th>'
            } );

            for ( j = 0; j < this.options.size; j = j + 1 ) {
                $( '<th />', { text: ui.labels.substring( j, j + 1 ) } ).appendTo( $row );
            }

            $row.prependTo( ui.tbody )
                .clone()
                .appendTo( ui.tbody );


        },
        clear: function() {
        },
        renderStone: function() {
        },
        renderMarker: function() {
        }
    }

});

})(jQuery);
