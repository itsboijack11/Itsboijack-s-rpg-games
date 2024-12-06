function updateCountdown() {
    const christmasDate = new Date("December 25, 2024 00:00:00").getTime(); // Christmas date

    const now = new Date().getTime();
    const timeLeft = christmasDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>Merry Christmas!</h2>";
        return;
    }

    // Calculate time units
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days-number").textContent = days;
    document.getElementById("hours-number").textContent = hours;
    document.getElementById("minutes-number").textContent = minutes;
    document.getElementById("seconds-number").textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();
