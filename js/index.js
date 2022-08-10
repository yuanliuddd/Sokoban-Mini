import { map, map2, map3, map4, map5, map6, map7 } from "./map.js";
const controller = document.querySelector("#controller");
const gameBox = document.querySelector("#game");
const play = document.querySelector(".play");
const reset = document.querySelector(".reset");
const exit = document.querySelector(".exit");
const level = document.querySelector(".level");
const welcome = document.querySelector("#welcome");
const opening = document.querySelector("#opening");
const nextLevel = document.querySelector("#nextLevel");
const nextLevelsLevels = document.querySelector(".nextLevelsLevels");
const count = document.querySelector(".count");
const steps = document.querySelector(".steps");
const bye = document.querySelector("#bye");
const winner = document.querySelector("#winner")

const maps = [map, map2, map3, map4, map5, map6, map7];

//TODO        Game Class
class Game {
  constructor() {
    this.widthBox;
    this.heightBox;
    this.level = 1;
    this.isStarted = false;
    this.cells;
    this.steps = 60;
  }
  renderMap(map) {
    this.widthBox = map[0].length;
    this.heightBox = map.length;
    count.textContent = this.steps;
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
    goal.position.forEach((ele) => {
      if (ele.classList.contains("box")) {
        ele.classList.add("goalBox");
      } else {
        ele.classList.remove("goalBox");
      }

      if (ele.classList.contains("player")) {
        ele.classList.remove("goal");
      } else {
        ele.classList.add("goal");
      }
    });

    if (goal.position.every((ele) => ele.classList.contains("box"))) {
      opening.style.display = "block";
      this.nextLevel();
      this.level++;
      if (this.level <= 7) {
        this.reset(this.level);
      } else {
        opening.style.display = "block";
        winner.style.visibility = 'visible'; 
      }
    }
  }

  reset() {
    gameBox.innerHTML = "";
    this.steps = 60;

    this.renderMap(maps[this.level - 1]);
    player.init();

    let imageUrl = `url(./img/${this.level}.png)`;
    level.style.backgroundImage = imageUrl;
    goal.position = goalPosition();
  }

  nextLevel() {
    let imageUrl = `url(./img/${this.level}.png)`;
    nextLevelsLevels.style.backgroundImage = imageUrl;
    nextLevel.style.display = "block";
  }

  countSteps() {
    this.steps--;
    count.textContent = this.steps;
    if (this.steps === 0) {
      opening.style.display = "block";
      this.reset(this.level);
      bye.style.visibility = "visible";
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

  init() {
    (this.cell = playerCell()[0]),
      (this.index = parseInt(playerCell()[0].dataset.index));
  },

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
      game.countSteps();
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
  game.reset();
});

exit.addEventListener("click", () => {
  game.level = 1;
  game.reset();
  opening.style.display = "block";
  gameBox.style.visibility = "hidden";
  controller.style.visibility = "hidden";
  bye.style.visibility = "visible";
});

let musicStarted = false;
document.addEventListener("keydown", (event) => {
  if (!musicStarted) {
    document.querySelector("audio").play();
  }
  musicStarted = true;

  if (event.code === "Enter") {
    welcome.style.display = "none";
  }
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

welcome.addEventListener("click", () => {
  welcome.style.display = "none";
});
opening.addEventListener("click", () => {
  opening.style.display = "none";
  nextLevel.style.display = "none";
});
nextLevel.addEventListener("click", () => {
  nextLevel.style.display = "none";
  opening.style.display = "none";
});
