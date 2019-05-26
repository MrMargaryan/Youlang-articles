$(document).ready(function() {

    /* MODAL WINDOW REMOVE */
    $(".discard").on("click", function() {
        $(".modal_window").remove();
    });

    /* OPEN VOCABULARY BUTTON */
    $(".open_voc_btn").on("click", function() {
        $(".open_voc_btn").hide("drop", 50);
        $(".vocabulary_box").show("drop", 1000);
    });

    /* CLOSE VOCABULARY BUTTON */
    $(".close_voc_btn").on("click", function() {
        $(".open_voc_btn").show("drop", 50);
        $(".vocabulary_box").hide("drop", 1000);
    });

});