let button = document.getElementById("start");
let container = document.getElementById("container");
button.addEventListener("click", startGame);
let click = 0;
function startGame(evt) {
  console.log("one");
  for (let i = 16; i > 0; i--) {
    let card = document.createElement("div");
    card.classList.add("cardback");
    card.classList.add("card");
    card.setAttribute("id", `card${i}`);
    card.addEventListener("click", flip);
    container.appendChild(card);
    button.style.display = "none";
  }
}

function flip(evt) {
  let flipped = document.getElementsByClassName("cardfront");
  if (click <= 1) {
    evt.target.classList.toggle("cardfront");
    evt.target.classList.toggle("cardback")
    click++;
    console.log(click);
  } else if (click >= 2) {
    for (let i = flipped.length - 1; i >= 0; i--){
        document.getElementsByClassName("cardfront")[i].classList.value = (`cardback card`)
    click = 0;
    }
  }
}
