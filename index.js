// Créer la logique de compte à rebours

// Créer un événement à la validation du form pour lancer le compte à rebours

//-------------------------------------------//

// choice.value = 5 minutes;

// choice.value * 60 = totalSeconds;

// let minutes = Math.floor(totalSeconds / 60);

// let seconds = totalSeconds % 60;

//-------------------------------------------//

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let totalSeconds = choice.value * 60;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  setInterval(() => {
    if (seconds > 0) {
      seconds--;
      countdownDisplay.innerHTML = `<h2>${minutes}:${seconds}</h2>`;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
      countdownDisplay.innerHTML = `<h2>${minutes}:${seconds}</h2>`;
    } else {
      countdownDisplay.innerHTML = `<h2>C'est terminé !</h2>`;
    }
  }, 1000);
});
