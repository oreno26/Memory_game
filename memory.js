//making the cards i want a 4*4 grid so i need 8 cards.
const cardsArray = [
  {
    bike: `gz250`,
    img: `Pics/gz250.jpeg`,
  },
  {
    bike: `cb500s`,
    img: `Pics/cb500s.jpeg`,
  },
  {
    bike: `cbr600f4i`,
    img: `Pics/cbr600f4i.jpeg`,
  },
  {
    bike: `leoncino500`,
    img: `Pics/leoncino500.jpeg`,
  },
  {
    bike: `bmwR1100rs`,
    img: `Pics/bmwR1100rs.jpeg`,
  },
  {
    bike: `vfr800fi`,
    img: `Pics/vfr800fi.jpeg`,
  },
  {
    bike: `sv650`,
    img: `Pics/sv650.jpeg`,
  },
  {
    bike: `trident660`,
    img: `Pics/trident660.jpeg`,
  },
];
console.log(cardsArray.length);
//selection of cards ready
//making a start button
// let grid
const button = document.getElementById(`button`);
button.addEventListener(`click`, Gamestart);
//
function Gamestart() {
  button.style.visibility = `hidden`;
  //grid
  const game = document.getElementById(`game`);

  const grid = document.createElement(`section`);
  grid.setAttribute(`class`, `grid`);

  game.appendChild(grid);
  //   grid.addEventListener(`click`, selector);
  let gameGrid = cardsArray.concat(cardsArray);
  gameGrid.sort(() => 0.5 - Math.random());
  grid.addEventListener(`click`, selector);

  gameGrid.forEach((item) => {
    const card = document.createElement(`div`);
    card.classList.add(`card`);
    card.dataset.bike = item.bike;
    //front of card
    const front = document.createElement(`div`);
    front.classList.add(`front`);
    //back of card
    const back = document.createElement(`div`);
    back.classList.add(`back`);
    back.style.backgroundImage = `url(${item.img})`;
    //appending
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
    // card.addEventListener(`click`, selector);
  });
}
//Game board down, now the mechanics
//selctor
let count = 0;
let firstGuess = "";
let secondGuess = "";
let previousTarget = null;
let delay = 1000;

function selector(evt) {
  let clicked = evt.target;
  if (evt.target.nodename === `section` || previousTarget === clicked) {
    return;
  }
  if (count < 2) {
    count++;
    console.log(count);
    if (count === 1) {
      clicked.classList.add(`selected`);
    //   firstGuess = clicked.dataset.bike;
      firstGuess = clicked.parentNode.dataset.bike;
      console.log(firstGuess);
    } else {
      clicked.classList.add(`selected`);
      secondGuess = clicked.parentNode.dataset.bike;
    }
  }
  if (firstGuess !== `` && secondGuess !== ``) {
    if (firstGuess === secondGuess) {
      setTimeout(match, delay);
      setTimeout(resetGuesses, delay);
    } else {
      setTimeout(resetGuesses, delay);
    }
  }
  previousTarget = clicked;
}
//
const match = () => {
  let selected = document.querySelectorAll(`.selected`);
  selected.forEach((card) => {
    card.classList.add(`match`);
  });
};

const resetGuesses = () => {
  firstGuess = "";
  count = 0;
  secondGuess = "";

  var selected = document.querySelectorAll(`.selected`);
  selected.forEach((card) => {
    card.classList.remove(`selected`);
  });
};
