import { map } from "./map.js";
const gameBox = document.querySelector("#game");
const play = document.querySelector('.play'); 
const reset = document.querySelector('.reset')

class Game {
  constructor() {
    this.widthBox; 
    this.heightBox; 
    this.level; 
  }
  renderMap(map) {
    this.widthBox = map[0].length;
    this.heightBox = map.length;

    const temp = map.flat();

    for (let i = 0; i <= temp.length; i++) {
      const cell = document.createElement("div");
      cell.classList.add(getClassNameForMap(temp[i]));
      gameBox.appendChild(cell);
    }
  }
}

function getClassNameForMap(mapCell) {
  switch (mapCell) {
    case 0:
      return "empty";
    case 1:
      return "player";
    case 2:
      return "wall";
    case 3:
      return "box";
  }
}

const game = new Game();
game.renderMap(map);

const player = {
  location: function () {},
};
