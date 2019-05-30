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

    var checkIfPushed = store.get("pushed");
    checkIfPushed.onsuccess = function() {
        if (checkIfPushed.result === undefined) {

        } else {
            $(document).ready(function() {
                $(".modal_window").css("display", "none");
            });
        }
    };

    var data = store.getAll();
    data.onsuccess = function() {
        wordsHTML = '<ul>'
        for (let i = 0; i < data.result.length; i++) {
            wordsHTML += '<li>' + data.result[i]["en"] + ' - ' + data.result[i]["ru"] + '</li>';
        };
        wordsHTML += '</ul>';
        $(document).ready(function() {
            $(".vocabulary_box").append(wordsHTML);
        });
    }


}

request.onerror = function(event) {
    alert("error opening database" + event.target.errorCode);
}

let basicWords = {
    "basicWord1": {
        "en": "case",
        "ru": "корпус ПК",
        "trans": "korpus",
        "descr": "an enclosure that contains most of the components of a personal computer"
    },
    "basicWord2": {
        "en": "desktop computer",
        "ru": "настольный компьютер",
        "trans": "nastol'nyy komp'yuter",
        "descr": "a personal computer designed for regular use"
    },
    "basicWord3": {
        "en": "internal component",
        "ru": "внутренний компонент ПК",
        "trans": "vnutrenniy komponent",
        "descr": "a component inside a computer case"
    },
    "basicWord4": {
        "en": "power supply",
        "ru": "блок питания",
        "trans": "blok pitaniya",
        "descr": "an electrical device that supplies electric power to a computer"
    },
    "basicWord5": {
        "en": "motherboard",
        "ru": "матринская плата",
        "trans": "materinskaya plata",
        "descr": "a printed board that contains buses, or electrical pathways, that interconnect electronic components"
    },
    "basicWord6": {
        "en": "central processing unit",
        "ru": "центральный процессор",
        "trans": "tsentral'nyy protsessor",
        "descr": "an electronic machine that works on a list of instructions"
    },
    "basicWord7": {
        "en": "disk drive",
        "ru": "дисковой носитель",
        "trans": "diskovod",
        "descr": "a data storage device for computers which uses magnetic storage to store data"
    },
    "basicWord8": {
        "en": "adapter card",
        "ru": "плата адаптеров",
        "trans": "plata adapterov",
        "descr": "printed circuit board that adds functionality to a computer system"
    },
    "basicWord9": {
        "en": "form factor",
        "ru": "форм фактор",
        "trans": "form faktor",
        "descr": "an aspect of hardware design which defines and prescribes the size, shape, and other physical specifications of components"
    }
}

$(document).ready(function() {
    $("button.button.yes").click(function() {
        let tx = db.transaction(["vocabulary"], "readwrite");
        let store = tx.objectStore("vocabulary");

        store.put({ id: "pushed", value: true });

        let wordsHTML = '<ul>';
        for (let i = 0; i < Object.keys(basicWords).length; i++) {
            store.add({
                en: basicWords["basicWord" + (i + 1)]["en"],
                ru: basicWords["basicWord" + (i + 1)]["ru"],
                trans: basicWords["basicWord" + (i + 1)]["trans"],
                descr: basicWords["basicWord" + (i + 1)]["descr"]
            });

            wordsHTML += '<li>' + basicWords["basicWord" + (i + 1)]["en"] + ' - ' + basicWords["basicWord" + (i + 1)]["ru"] + '</li>';
        };

        wordsHTML += '</ul>';
        $(".vocabulary_box").append(wordsHTML);

        if ($(window).width() >= 750) {
            $(".modal_window").hide("fade", 250);
        } else {
            $(".modal_window").hide("slide", { direction: "down", easing: "easeOutBounce" }, 470);
        }

        tx.oncomplete = function() {
            console.log("transaction complete");
        }
    });

});