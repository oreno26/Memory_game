let button = document.getElementById("start")
let container = document.getElementById("container")
button.addEventListener("click", startGame)

function startGame(evt){
    console.log("one");
    for (let i = 16; i > 0; i--){
        let card = document.createElement("div")
        card.classList.add("cardback")
        container.appendChild(card)

    }




}