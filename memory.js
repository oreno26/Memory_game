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

  let gameGrid = cardsArray.concat(cardsArray);
  gameGrid.sort(() => 0.5 - Math.random());

  gameGrid.forEach((item) => {
    const card = document.createElement(`div`);
    card.classList.add(`card`);
    card.dataset.bike = item.bike;
    card.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
    console.log(2);
  });
}
