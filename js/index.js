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
    this.level = 1;
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
  checkWin() {
    if (goal.position.every(ele => ele.classList.contains('box'))) {
      window.alert('you just won !')
      this.level++; 
    }
  }

  reset() {
    if (this.level === 1) {
      this.renderMap(map);
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
        this.index -= game.widthBox;
        this.cell = game.cells[this.index];
        this.show();
      } else if (direction === "down") {
        this.hide();
        this.index += game.widthBox;
        this.cell = game.cells[this.index];
        this.show();
      } else if (direction === "right") {
        this.hide();
        this.index++;
        this.cell = game.cells[this.index];
        this.show();
      } else if (direction === "left") {
        this.hide();
        this.index--;
        this.cell = game.cells[this.index];
        this.show();
      }
      game.checkWin();
    }
  },

  canMove(direction) {
    let diff;
    switch (direction) {
      case "up":
        diff = -game.widthBox;
        break;
      case "down":
        diff = +game.widthBox;
        break;
      case "right":
        diff = +1;
        break;
      case "left":
        diff = -1;
        break;
    }
    const moveToIndex = diff + this.index;

    if (game.cells[moveToIndex].classList.contains("wall")) {
      return false;
    }

    if (game.cells[moveToIndex].classList.contains("box")) {
      if (
        game.cells[moveToIndex + diff].classList.contains("wall") ||
        game.cells[moveToIndex + diff].classList.contains("box")
      ) {
        return false;
      }
      game.cells[moveToIndex].classList.remove("box");
      game.cells[moveToIndex + diff].classList.add("box");
    }

    return true;
  },
};

//TODO            Box
const goal = {
  position: goalPosition(),
};

function goalPosition() {
  return game.cells.filter((ele) => ele.classList.contains("goal"));
}

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
