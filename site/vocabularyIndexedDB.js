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
                $(".vocabulary").append('<tr><td>' + data.result[i]["en"] + '</td><td>' + data.result[i]["ru"] + '</td><td>' + data.result[i]["trans"] + '</td><td>' + data.result[i]["descr"] + '</td><td><i class="fa fa-trash"></i></td></tr>');
            });
        };
    }


}

request.onerror = function(event) {
    alert("error opening database" + event.target.errorCode);
}