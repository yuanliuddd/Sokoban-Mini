import { map } from "./map.js";
const gameBox = document.querySelector("#game");
const play = document.querySelector(".play");
const reset = document.querySelector(".reset");
const exit = document.querySelector(".exit");
const level = document.querySelector(".level");


//TODO        Game Class                                                                                                                                    
class Game {
  constructor() {
    this.widthBox;
    this.heightBox;
    this.level;
    this.isStarted = false;
    this.cells;
  }
  renderMap(map) {
    this.widthBox = map[0].length;
    this.heightBox = map.length;
    const temp = map.flat();

    let cellsArr = [];
    for (let i = 0; i < temp.length; i++) {
      const cell = document.createElement("div");
      cell.classList.add(getClassNameForMap(temp[i]));
      cell.dataset.index = i;
      gameBox.appendChild(cell);
      cellsArr.push(cell);
    }
    this.cells = cellsArr;
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
    case 4:
      return "goal";
  }
}

//TODO        Init                                                                                                                                              

const game = new Game();
game.renderMap(map);
function playerCell() {
  return game.cells.filter((ele) => ele.classList.contains("player"));
}

//TODO        PLAYER                                                                                                                                    

const player = {
  cell: playerCell()[0],
  index: parseInt(playerCell()[0].dataset.index),

  show() {
    this.cell.classList.remove("empty");
    this.cell.classList.add("player");
  },

  hide() {
    this.cell.classList.remove("player");
    this.cell.classList.add("empty");
  },

  move(direction) {
    if (!this.canMove(direction)) {
      return;
    } else {
      if (direction === "up") {
        this.hide();
        this.cell = game.cells[this.index - game.widthBox];
        console.log(this.cell);
        this.show();
      } else if (direction === "down") {
        this.hide();
        this.cell = game.cells[this.index + game.widthBox - 1];
        console.log(this.cell);
        this.show();
      } else if (direction === "right ") {
        this.hide();
        this.cell = game.cells[this.index + 1];
        console.log(this.cell);
        this.show();
      } else if (direction === "left") {
        this.hide();
        this.cell = game.cells[this.index - 1];
        console.log(this.cell);
        this.show();
      }
    }
  },

  canMove(direction) { 
    if (direction === "up") {
      const movetoIndex = this.index - game.widthBox; 
      if (game.cells[movetoIndex].classList.contains('wall')) return false; 
      if (movetoIndex < 0 || movetoIndex > game.cells.length) return false; 
      return true; 
    }; 

    if (direction === "down") {
      const movetoIndex = this.index + game.widthBox-1;
      if (game.cells[movetoIndex].classList.contains("wall")) return false;
      if (movetoIndex < 0 || movetoIndex > game.cells.length) return false; 
      return true; 
    }
    if (direction === "right") {
      const movetoIndex = this.index + 1;
      if (game.cells[movetoIndex].classList.contains("wall")) return false;
      if (movetoIndex < 0 || movetoIndex > game.cells.length) return false;
      if (this.index % 9 === 0 ) return false;
      return true;
    }
    if (direction === "left") {
      const movetoIndex = this.index - 1;
      if (game.cells[movetoIndex].classList.contains("wall")) return false;
      if (movetoIndex < 0 || movetoIndex > game.cells.length) return false;
      if (this.index % 10 === 0) return false; 
      return true;
    }
  },
};


//TODO        EventListener                                                                        

play.addEventListener("click", () => {
  game.isStarted = true;
});

reset.addEventListener("click", () => {
  game.isStarted = false;
});

exit.addEventListener("click", () => {
  window.alert("you lost");
});

document.addEventListener("keydown", (event) => {
  if (!game.isStarted) {
    return;
  }
  switch (event.code) {
    case "ArrowUp":
      player.move("up");
      break;
    case "ArrowDown":
      player.move("down");
      break;
    case "ArrowLeft":
      player.move("left");
      break;
    case "ArrowRight":
      player.move("right");
      break;
  }
});
