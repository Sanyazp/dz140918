//// VARS /////
var nums = [];
var sort_arr = [];
var clicks = 0; // Счетчик нажатий на кнопочку SWAP
//// VARS ////


/// FUNCTIONS ////
function rand() {
    return 100 + parseInt(Math.random() * 100);
}

function _sort(array) { // Пузырек, который сортирует массив, с которым будем сравнивать значения дивов
    var c = array.length - 1;
    for (var i = 0; i < c; i++) {
        for (var x = 0; x < c - i; x++)
            if (array[x] > array[x + 1]) {
                var max = array[x];
                array[x] = array[x + 1];
                array[x + 1] = max;
            }
    }
    return array;
}

function check_numb() { // Функция проверки, которая сравнивает отсортированный массив со всеми дивами
    var buffer = 0;
    for (var i = 0; i < sort_arr.length; i++) {
        if (divs[i].innerHTML == sort_arr[i]) {
            buffer++;
            if (buffer === 10) {
                document.body.innerHTML += `<h1>Поздравляю, вы отсортировали ваши блоки, количество нажатий - ${clicks}</h1>`;
            }
        }
    }
}
/// FUNCTIONS ////



// CODE //
for (var i = 0; i < 10; i++) { // Непосредственно создание дивов
    var div = document.createElement('div');
    var buffer = rand();
    sort_arr.push(buffer); // Пушим все рандомные значения в наш массив, который отсортируем от меньшего к большему
    div.innerHTML = buffer;
    div.style.height = `${buffer}px`;
    document.querySelector("section").appendChild(div);
    div.addEventListener('click', function(e) {
        e.target.classList.add('change');
        itemBuffer.push(e.target);
        if (itemBuffer.length > 2) {
            var item = itemBuffer.shift();
            item.classList.remove('change');
        }
    });
}
var divs = document.querySelectorAll('div'); // Получаем коллекцию дивов, для сравнения их содержимого
_sort(sort_arr); // Сортируем массив с нашими рандомными значениями
document
    .querySelector('button')
    .addEventListener('click', function() {
        if (itemBuffer.length === 2) {
            var bufferHTML = itemBuffer[0].innerHTML;

            itemBuffer[0].innerHTML = itemBuffer[1].innerHTML;
            itemBuffer[0].style.height = itemBuffer[1].style.height;

            itemBuffer[1].innerHTML = bufferHTML;
            itemBuffer[1].style.height = bufferHTML + 'px';

            itemBuffer[0].classList.remove('change');
            itemBuffer[1].classList.remove('change');
            itemBuffer = []
            clicks++; // Увеличиваем значение счетчика, при клике на SWAP
        }
    });

var itemBuffer = [];

document
    .querySelector('button')
    .addEventListener('click', check_numb);; // Добавления события (при клике срабатывает функция проверки на отсортированность)

console.log(sort_arr); // Вывод отсортированного массива в консоль, как подсказка для сортировочки