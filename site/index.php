<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="vendors/jquery-ui.min.css">
    <script src="vendors/jquery-3.4.1.min.js"></script>
    <script src="vendors/jquery-ui.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
    <script type="text/javascript" src="indexedDB.js"></script>
</head>
<body>
    <div class="modal_window">
        <h1>Wana add some words?</h1>
        <div class="row">
            <button class="button yes">Yes</button>
            <button class="button discard">Discard</button>
        </div>
    </div>
    <header>
        <div class="row">
            <a href="index.php"><img height="50" class="logo" src="img/logo.svg" alt="Юlang"></a>
            <menu>
                <a class="link active menu" href="index.php">Article</a>
                <a class="link menu" href="vocabulary.php">Vocabulary</a>
            </menu>
        </div>
    </header>
    <main>
        <img class="article_main_img" src="img/desktop/article_main.png">
        <div class="article">
            <h6 class="author">Hamlet Margaryan</h6>
            <h1>Cases, Power Supplies and Internal PC Components</h1>
            <h2>Cases</h2>
            <br>
            <p>The case of a desktop computer contains all of the internal components such as the power supply, motherboard, central processing unit (CPU), memory, disk drives and adapter cards.</p>
            <p>Cases are made of plastic, steel or aluminum.</p>
            <p>A device form factor - is its construction and look. The cases of desktop computers are produced in different form factors:</p>
            <ul>
                <li>Horizontal case - this form factor is no longer popular</li>
                <li>Full-size tower - this is a computer case which is oriented vertically</li>
                <li>Compact tower - this is a smaller version of the full-size tower</li>
                <li>All-in-one - all of the computer system components are integrated into the display</li>
            </ul>
            <img class="article_img" src="img/desktop/article_main.png">
            <small class="img_signature">Lorem ipsum dolor sit amet.</small>
            <h2>Power Supplies</h2>

        <p>Alternating current (AC) is supplied to the wall outlets. However, all components inside a computer require direct current (DC) power. To obtain DC power, computers use a power supply to convert AC power into a lower voltage DC power.</p>

        <p>The following describes the various computer desktop power supplies:</p>
        <ul>
            <li>Advanced Technology (AT) - outdated model</li>
            <li>AT Extended (ATX) - also outdated model</li>
            <li>ATX12V - most popular power supply</li>
            <li>ESP12V - were made for network services</li>
        </ul>
        </div>
    </main>
    <!-- <footer>
        <div class="row">
            <a href="index.php"><img class="logo" src="img/logo.svg" alt="Юlang"></a>
            <menu>
                <a class="menu" href="#">article</a>
                <a class="menu" href="#">vocalubere</a>
            </menu>
        </div>
    </footer> -->
    

    <!-- <button class="open_voc_btn voc_btn">VOC</button>
    <div class="vocabulary_box">
        <button class="close_voc_btn voc_btn">X</button> -->
        <!-- <a href="#" class="voc_button">voc</a> -->
    <!-- </div> -->

    <button class="open_voc_btn voc_btn"><span>Vocabulary</span></button>
    <div class="vocabulary_box">
        <button class="close_voc_btn voc_btn"><span>Close</span></button>
        <h1>Vocabulary</h1>
    </div>
</body>
</html>