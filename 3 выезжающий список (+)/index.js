var div = document.querySelector('div');


div.onclick = function() {
    if (div.classList.contains('checked') !== true) {
        div.classList.add('checked');
    } else {
        div.classList.remove('checked');
    }
}

// Ну тут в принципе понятно всё))))