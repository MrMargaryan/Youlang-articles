let db;

let request = indexedDB.open("vocabularyDatabsse", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;

    let vocabulary = db.createObjectStore("vocabulary", { keyPath: "id", autoIncrement: true });
    console.log("hello");
}

request.onsuccess = function(event) {
    db = event.target.result;

    let tx = db.transaction(["vocabulary"], "readwrite");
    let store = tx.objectStore("vocabulary");



    var data = store.getAll();
    data.onsuccess = function() {
        for (let i = 0; i < data.result.length - 1; i++) {
            $(document).ready(function() {
                $(".vocabulary").append('<tr><td class="speaker"><i class="fa fa-volume-up"></i></td><td class="en_word">' + data.result[i]["en"] + '</td><td class="ru_word">' + data.result[i]["ru"] + '</td><td>' + data.result[i]["trans"] + '</td></tr>');
            });
        };
    }
}

request.onerror = function(event) {
    alert("error opening database" + event.target.errorCode);
}

$('body').on('click', '.fa-volume-up', function() {

    var en_word = new SpeechSynthesisUtterance();
    en_word.text = $(this).parent().parent().children(".en_word")[0].innerHTML;
    en_word.lang = "en-US";

    var ru_word = new SpeechSynthesisUtterance();
    ru_word.text = $(this).parent().parent().children(".ru_word")[0].innerHTML;
    ru_word.lang = "ru-RU";

    window.speechSynthesis.speak(en_word);
    window.speechSynthesis.speak(ru_word);
});