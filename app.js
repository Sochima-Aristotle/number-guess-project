// Game values
let min = 1;
let max = 20;
let winningNum = setGoal();
let guessLeft = 3;

//   UI Element
const gameWrap = document.querySelector("#game");
const minNumber = document.querySelector(".num-min");
const maxNumber = document.querySelector(".num-max");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

minNumber.textContent = min;
maxNumber.textContent = max;
// play again event
gameWrap.addEventListener("mousedown", (e) => {
  if (e.target.className === "play-again") {
    window.location.reload();
    console.log("mr");
    // e.preventDefault();
  }
});

// listen for guess number
guessBtn.addEventListener("click", (e) => {
  const guess = parseInt(guessInput.value);
  // console.log(guess);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please input a number between ${min} and ${max}`, "red");
  } else if (guess === winningNum) {
    // guessInput.disabled = true;
    // guessInput.style.borderColor = "green";
    // setMessage(`Bravo, Great You won! ${winningNum} is correct`, "green");

    gameOver(true, `Bravo, Great You won! ${winningNum} is correct`);
  } else {
    // guessInput.style.borderColor = "red";

    // setMessage("Wrong, try again", "red");

    guessLeft -= 1;

    // guessLeft = guessLeft - 1;

    if (guessLeft === 0) {
      // game over loss
      // guessInput.disabled = true;
      gameOver(false, `sorry you lost try again, ${winningNum} was the number`);
      // guessInput.style.borderColor = "red";
      // setMessage(
      //   `sorry you lost try again, ${winningNum} was the number`,
      //   "red"
      // );
    } else {
      // game continues
      guessInput.style.borderColor = "red";

      guessInput.value = "";

      setMessage(`Guess not correct, ${guessLeft} guesses left`, "red");
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  // Play again
  guessBtn.value = "play again";
  guessBtn.className += "play-again";
}

function setGoal(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  message.style.color = color;

  message.textContent = msg;
}
