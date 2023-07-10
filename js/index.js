import Config from "./config.js";
import Game from "./game.js";
import Canvas from "./canvas.js";

const config = new Config()
const canvas = new Canvas(config.canvas, config.field);
// config.pipes = 2
// console.log(config.pipes.speed);
const gameFlappyBird = new Game(config, canvas)
gameFlappyBird.loading().then(() => { gameFlappyBird.startGame() })