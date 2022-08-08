const gameBox = document.querySelector("#game");

class Game {
  constructor(widthBox, heightBox) {
    this.widthBox = widthBox;
    this.heightBox = heightBox;
    this.box = this.#createBox(); 
  }
  #createBox() {
    const totalBoxNum = this.widthBox * this.heightBox;
    for (let i = 0; i <= totalBoxNum; i++) {
      const box = document.createElement("div");
      box.classList.add('box'); 
      gameBox.appendChild(box); 
    }
  }
}
const game =new Game(10,10)
