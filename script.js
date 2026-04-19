let number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  let message = document.getElementById("message");
  let attemptsText = document.getElementById("attempts");

  if (!guess) {
    message.innerText = "⚠️ Enter a number!";
    message.style.color = "yellow";
    return;
  }

  attempts++;

  if (guess === number) {
    message.innerText = "🎉 Correct! You guessed it!";
    message.style.color = "#00ffcc";
  } else if (guess > number) {
    message.innerText = "📉 Too high!";
    message.style.color = "#ff6b6b";
  } else {
    message.innerText = "📈 Too low!";
    message.style.color = "#ff6b6b";
  }

  attemptsText.innerText = "Attempts: " + attempts;
}

function resetGame() {
  number = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById("message").innerText = "";
  document.getElementById("attempts").innerText = "";
  document.getElementById("guess").value = "";
}

