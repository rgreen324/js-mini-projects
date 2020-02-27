const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = (currentYear + 1).toString();

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor((diff / 3600000) / 24);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    // Add values to DOM
    days.innerText = d.toString();
    hours.innerText = h < 10 ? '0' + h.toString() : h.toString();
    minutes.innerText = m < 10 ? '0' + m.toString() : m.toString();
    seconds.innerText = s < 10 ? '0' + s.toString() : s.toString();
}

// Show spinner on load
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

// Update countdown time every second
setInterval(updateCountdown, 1000);