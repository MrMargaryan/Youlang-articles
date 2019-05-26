$(document).ready(function() {
    $(".discard").on("click", function() {
        $(".modal_window").remove();
    });

    $(".voc_button").on("click", function() {
        $(".vocabulary").show("drop", 1000);
    });
});