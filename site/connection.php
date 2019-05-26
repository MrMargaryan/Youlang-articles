<?php

    $server = "localhost";
    $username = "root";
    $password = "";
    $db = "vocabulary";

    /* CREATE A CONNECTION */
    $conn = mysqli_connect( $server, $username, $password, $db );

    // CHECK CONNECTION
if ( !$conn ) {
    echo "Connection failed";
    die( "Connection failed: ".mysqli_connect_error() );
} else {
    echo "Connection successful";
}

?>