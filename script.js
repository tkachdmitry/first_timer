'use strict'
const deadline = '2025-01-01';
function getTimeRemaining(endoftime) {
    const time = Date.parse(endoftime) - Date.parse(new Date());
    console.log(time);
    const seconds = Math.floor((time/1000) % 60);
    console.log(seconds);
    const minutes = Math.floor((time/1000/60) % 60);
    console.log(minutes);
    const hours = Math.floor((time/1000/60/60) % 24);
    console.log(hours);
    const days = Math.floor((time/(1000*60*60*24)));
    console.log(days);
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
}

function setTimer(id, endoftime) {
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');
    const timeInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
        const time = getTimeRemaining(endoftime);
        days.textContent = plusZero(time.days);
        hours.textContent = plusZero(time.hours);
        minutes.textContent = plusZero(time.minutes);
        seconds.textContent = plusZero(time.seconds);
        if (time.total <= 0) {
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            clearInterval(timeInterval);
        }
    }

    function plusZero(number) {
        if (number <=9) {
            return '0' + number;
        } else {
            return number;
        }
    }
}

setTimer('timer', deadline);