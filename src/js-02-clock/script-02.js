'use strict';
const handSec = document.querySelector('.hand-sec');
const handMin = document.querySelector('.hand-min');
const handHour = document.querySelector('.hand-hour');
function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  var hour = now.getHours();
  hour = (hour <= 12) ? hour : (hour - 12);
  // console.log(`${hour} : ${min} : ${sec}`);
  const secDeg = (sec * 360 / 60) + 90;
  const minDeg = (min * 360 / 60) + 90;
  const hourDeg = (hour * 360 / 12) + 90;

  handSec.style.transform = `rotate(${secDeg}deg)`;
  handMin.style.transform = `rotate(${minDeg}deg)`;
  handHour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);