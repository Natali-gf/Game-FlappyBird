import Config from "./main/config.js";
import Game from "./main/game.js";
import Canvas from "./main/canvas.js";

const config = new Config()
const canvas = new Canvas(config.canvas, config.field);

const gameFlappyBird = new Game(config, canvas);
gameFlappyBird.loading().then(() => { gameFlappyBird.startGame() })
