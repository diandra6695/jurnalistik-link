const btn = document.querySelector('#btn');
const timer = document.querySelector('#countdown');
const deskripsi = document.querySelector('#deskripsi');
const join = document.querySelector('#join');

let remainingSeconds = 10;

const countdownInterval = setInterval(function() {
  remainingSeconds--;

  if (remainingSeconds < 0) {
  clearInterval(countdownInterval);
    timer.classList.add('hidden');
    deskripsi.classList.add('hidden');
    btn.classList.remove('hidden');
  } else {
    document.getElementById("countdown").innerHTML = remainingSeconds;
  }

  if(remainingSeconds < 8){
    join.classList.remove('hidden');
  }
}, 1000);