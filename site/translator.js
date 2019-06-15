var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
var keyAPI = "trnsl.1.1.20190609T113526Z.6de5d78a323cda72.db91f76fa92b703e888f75744876217691237a28";

var switchLang = false;
document.querySelector(".switch_lang").addEventListener('click', function() {
    switchLang = !switchLang;
});

document.querySelector(".translate").addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    var textAPI = document.querySelector(".input").value;
    var data = "key=" + keyAPI + "&text=" + textAPI;
    if (switchLang === false) {
        data = data + "&lang=ru";
    } else {
        data += "&lang=en";
    };

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            var json = JSON.parse(res);
            if (json.code == 200) {
                document.querySelector('.output').innerHTML = json.text[0];
            } else {
                document.querySelector('.output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, false);

document.querySelector(".add_word_to_voc").addEventListener('click', function() {
    let tx = db.transaction(["vocabulary"], "readwrite");
    let store = tx.objectStore("vocabulary");

    if (document.querySelector(".output").textContent !== '') {
        if (switchLang === false) {
            store.add({
                en: document.querySelector(".input").value,
                ru: document.querySelector(".output").textContent,
                trans: cyrill_to_latin(document.querySelector(".output").textContent)
            });
        } else {
            store.add({
                en: document.querySelector(".output").textContent,
                ru: document.querySelector(".input").value,
                trans: cyrill_to_latin(document.querySelector(".input").value)
            });
        }
    };
});

var getSelectedText = function() {
    var text = '';
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection) {
        text = document.selection.createRange().text;
    }
    return text;
};

$('.ru').on('mouseup', function() {
    var text = getSelectedText();

    if (text != '') {
        var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
        var keyAPI = "trnsl.1.1.20190609T113526Z.6de5d78a323cda72.db91f76fa92b703e888f75744876217691237a28";
        var xhr = new XMLHttpRequest();
        var textAPI = text;
        var data = "key=" + keyAPI + "&text=" + textAPI + "&lang=en";

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.responseText;
                var json = JSON.parse(res);
                if (json.code == 200) {
                    $(".selected_box").css("display", "block");
                    $(".selected_box").append("<p>Word: </p><span class='word'>" + text + "</span>");
                    $(".selected_box").append("<p>Translation: </p><span class='translation'>" + json.text[0] + "</span><br><br><br>");
                    $(".selected_box").append("<button class='add_word_to_voc_from_selectred_box_ru'>Add word to the vocabulary</button>")
                } else {
                    alert("Error Code: " + json.code);
                }
            }
        }

        $(".selected_box").empty();
    };
});

$('.eng').on('mouseup', function() {
    var text = getSelectedText();

    if (text != '') {
        var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
        var keyAPI = "trnsl.1.1.20190609T113526Z.6de5d78a323cda72.db91f76fa92b703e888f75744876217691237a28";
        var xhr = new XMLHttpRequest();
        var textAPI = text;
        var data = "key=" + keyAPI + "&text=" + textAPI + "&lang=ru";

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.responseText;
                var json = JSON.parse(res);
                if (json.code == 200) {
                    $(".selected_box").css("display", "block");
                    $(".selected_box").append("<p>Word: </p><span class='word'>" + text + "</span>");
                    $(".selected_box").append("<p>Translation: </p><span class='translation'>" + json.text[0] + "</span><br><br><br>");
                    $(".selected_box").append("<button class='add_word_to_voc_from_selectred_box_eng'>Add word to the vocabulary</button>")
                } else {
                    alert("Error Code: " + json.code);
                }
            }
        }

        $(".selected_box").empty();
    };
});


$('body').on('click', '.add_word_to_voc_from_selectred_box_ru', function() {

    let tx = db.transaction(["vocabulary"], "readwrite");
    let store = tx.objectStore("vocabulary");

    store.add({
        en: document.querySelector(".translation").textContent,
        ru: document.querySelector('.word').textContent,
        trans: cyrill_to_latin(document.querySelector(".word").textContent)
    });

});

$('body').on('click', '.add_word_to_voc_from_selectred_box_eng', function() {

    let tx = db.transaction(["vocabulary"], "readwrite");
    let store = tx.objectStore("vocabulary");

    store.add({
        en: document.querySelector(".word").textContent,
        ru: document.querySelector('.translation').textContent,
        trans: cyrill_to_latin(document.querySelector(".translation").textContent)
    });

});



var arrru = new Array('Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э');
var arren = new Array('Ya', 'ya', 'Yu', 'yu', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', '`', '`', '\'', '\'', 'E', 'e');

function cyrill_to_latin(text) {
    for (var i = 0; i < arrru.length; i++) {
        var reg = new RegExp(arrru[i], "g");
        text = text.replace(reg, arren[i]);
    }
    return text;
};