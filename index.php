<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <title>jKifu</title>

    <link rel="stylesheet" href="/css/screen.css">
</head>

<body>

    <h1>jKifu</h1>

    <kifu></kifu>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js"></script>
    <script src="/js/jquery.jkifu.js"></script>

    <script>
        $( document ).ready(function() {
            $( 'kifu' ).jKifu();

            // Render a few stones for render debugging
            $( 'kifu' ).data( 'jKifu' ).goban.renderStone( 4, 6, 'white' );
            $( 'kifu' ).data( 'jKifu' ).goban.renderStone( 4, 5, 'white' );
            $( 'kifu' ).data( 'jKifu' ).goban.renderStone( 3, 5, 'white' );
            $( 'kifu' ).data( 'jKifu' ).goban.renderStone( 3, 6 );
            $( 'kifu' ).data( 'jKifu' ).goban.renderStone( 3, 7 );
            $( 'kifu' ).data( 'jKifu' ).goban.renderStone( 4, 7 );
            $( 'kifu' ).data( 'jKifu' ).goban.renderStone( 3, 3 );
        });
    </script>
</body>
</html>
