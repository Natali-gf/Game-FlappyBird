// import Config from "./config.js";
// import Game from "./game.js";
// import Canvas from "./canvas.js";



// const spriteSheet =
// const physicsEngine =


// const canvas = new Canvas();
const gameFlappyBird = new Game(canvas)
// console.log(gameFlappyBird.loadGame);
gameFlappyBird.prepare().then(() => {
	gameFlappyBird.start()
})

// restartWithSettings.addEventListener("click", () => gameSnake.resetGame())
