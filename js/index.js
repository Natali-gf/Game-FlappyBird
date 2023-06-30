// import Config from "./config.js";
// import Game from "./game.js";
// import Canvas from "./canvas.js";

const config = new Config()
// document.createElement("canvas");
// context = canvas.getContext('2d');
canvas = document.getElementById(this.config.canvas.id)

const canvas = new Canvas();
const gameFlappyBird = new Game(canvas)
console.log(gameFlappyBird.loadGame);
gameFlappyBird.loadGame().then(() => {
	gameFlappyBird.startGame()
})

// restartWithSettings.addEventListener("click", () => gameSnake.resetGame())
