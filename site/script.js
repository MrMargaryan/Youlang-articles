$(document).ready(function () {

    /* MODAL WINDOW REMOVE */
    $(".discard").on("click", function () {
        if ($(window).width() >= 700) {
            $(".modal_window").hide("fade", 250);
            setTimeout(
                function() {
                    $(".article").removeClass("mw_fix");
                }, 250);
        } else {
            $(".modal_window").hide("fade", 250);
            setTimeout(
                function() {
                    $(".article").removeClass("mw_fix");
                }, 250);
        }
    });

    /* OPEN VOCABULARY BUTTON */
    $(".open_voc_btn").on("click", function () {
        $(".open_voc_btn").hide("slide", 50);
        $(".vocabulary_box").show("slide", 1000);
    });

    /* CLOSE VOCABULARY BUTTON */
    $(".close_voc_btn").on("click", function () {
        $(".open_voc_btn").show("slide", 1000);
        $(".vocabulary_box").hide("slide", 1000);
    });

    // CHANGE LANGUAGE
    $(".change_lang").on("click", function () {
        if ($(".eng").hasClass("hide_lang")) {
            $(".eng").removeClass("hide_lang");
            $(".ru").addClass("hide_lang");
        } else if ($(".ru").has("hide_lang")) {
            $(".ru").removeClass("hide_lang");
            $(".eng").addClass("hide_lang");
        }
    });
});