$(document).ready(function() {

    /* MODAL WINDOW REMOVE */
    $(".discard").on("click", function() {
        $(".modal_window").hide("fade", 250);
    });

    /* OPEN VOCABULARY BUTTON */
    $(".open_voc_btn").on("click", function() {
        $(".open_voc_btn").hide("slide", 50);
        $(".vocabulary_box").show("slide", 1000);
    });

    /* CLOSE VOCABULARY BUTTON */
    $(".close_voc_btn").on("click", function() {
        $(".open_voc_btn").show("slide", 1000);
        $(".vocabulary_box").hide("slide", 1000);
    });

});