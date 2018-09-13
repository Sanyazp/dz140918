///////////////////////////VARS//////////////////////
var start = document.querySelector('button'); // Кнопка Start / Stop
var section_timer = document.querySelector('h1'); // Место отображения таймера
var section_timer2 = document.querySelector('h2'); // Место отображения кругов
var clock = document.querySelector('.seconds'); // Секундная стрелка
var timer = 0; // Переменная таймера
var cicles = 0; // Количество кругов таймера
var clicks = 0; // Счетчик кликов
var doubleclick = 0; // Переменная, определяющая состояние интервала. 0 - если еще не прошло 1 секунда с момента клика
// 1 - если уже прошла секунда, после момента клика, запрещает делать даблклик таким образом
var interval; // Глобальная переменная для clearInterval
////////////////////FUNCTIONS///////////////////////
function timer_clock() { // Функция таймера, даёт отсчет в секундах, при 59 и более сбрасывает таймер до 0 :)
    timer += 1;
    section_timer.innerHTML = `Секунды : ${timer}`;
    section_timer2.innerHTML = `Круги : ${cicles}`;
    clock.style.transform = `rotate(${timer * 6}deg)`;
    if (timer > 59) {
        timer = 0;
        cicles++;

    }
}

function click() { // корявая функция даблклика xD
    setTimeout(function() {
        doubleclick = 1;
        clicks = 1;
    }, 1000);
    // start.innerHTML = `STOP`;
    start.setAttribute('clicks', clicks);
    if (start.getAttribute('clicks') == '1' && doubleclick === 0) {
        start.innerHTML = `Сброшено`;
        clicks = 0;
        timer = 0;
        cicles = 0;
        clock.style.transform = `rotate(0deg)`;
        section_timer.innerHTML = `Секунды : ${timer}`;
        section_timer2.innerHTML = `Круги : ${cicles}`;
    }
    doubleclick = 0;
}
//////////////////////CODE/////////////////////////

start.onclick = function() {
    if (start.innerHTML === 'START') {
        interval = setInterval(timer_clock, 1000);
        start.innerHTML = 'STOP';

    } else {
        clearInterval(interval);
        start.innerHTML = 'START';
        clock.style.transform = `rotate(${(timer * 6)}deg)`;
    }
}
start.addEventListener('click', click);

//////////////////////CODE/////////////////////////