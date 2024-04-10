// Créer la logique de compte à rebours

// Créer un événement à la validation du form pour lancer le compte à rebours

//-------------------------------------------//

// choice.value = 5 minutes;

// choice.value * 60 = totalSeconds;

// let minutes = Math.floor(totalSeconds / 60);

// let seconds = totalSeconds % 60;

//-------------------------------------------//

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let totalSeconds = choice.value * 60;
//   let minutes = Math.floor(totalSeconds / 60);
//   let seconds = totalSeconds % 60;
//   setInterval(() => {
//     if (seconds > 0) {
//       seconds--;
//       countdownDisplay.innerHTML = `<h2>${minutes}:${seconds}</h2>`;
//     } else if (minutes > 0) {
//       minutes--;
//       seconds = 59;
//       countdownDisplay.innerHTML = `<h2>${minutes}:${seconds}</h2>`;
//     } else {
//       countdownDisplay.innerHTML = `<h2>C'est terminé !</h2>`;
//     }
//   }, 1000);
// });

//----------
//correction
//----------

let totalSeconds;
let interval;

function countDown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const sec = seconds < 10 ? "0" + seconds : seconds;

  countdownDisplay.textContent = `${minutes}:${sec}`;
  console.log(minutes, seconds);

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "C'est terminé !";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Entrez un fifre avant que je me fâche");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
