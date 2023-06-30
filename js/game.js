import GameCycle from "./gameCycle.js";
import Loader from './loader.js';
import Config from "./config.js";
import { RESOURCE_TYPE } from "./loader.js";

export default class Game {
	constructor(canvas){
		this.config = new Config()
		this.loader = new Loader()
		this.spritesheet = this.config.spritesheet;
		// this.buttonRestart = buttonRestart;
		// this.startField = startField
		this.canvas = canvas;
		// this.speedConstant = speedConstant;

		// this.snake = new Snake();
		// this.apple = new Apple(this.snake.tail);
		// this.score = new Score(currentScore, bestResult);
		this.gameCycle = new GameCycle(this.update.bind(this), this.draw.bind(this));

		// this.subscribeToStart()
	}

	update(){
	}

	draw() {

	}

	loadGame(){
		console.log(this.loader.imageLoad());
		console.log(this.config.spritesheet.src);
		// console.log(RESOURCE_TYPE.IMAGE);
		// this.RESOURCE_TYPE = RESOURCE_TYPE
		this.loader.imageLoad(
			// type: this.RESOURSE_TYPE.IMAGE,
			this.config.spritesheet.src,
			this.config.spritesheet.width,
			this.config.spritesheet.height,
		)
	}

	startGame(){
		console.log(111);
	}

	resetGame(){
		// if (this.score._score > this.score._bestScore ||
		// 	!this.score._bestScore) {
		// 	this.score.changeBestScore()
		// }
		// this.buttonRestart.style.display = 'flex';
		// this.gameCycle.stop()
		// this.restart()
	}

	restart(){
		// this.buttonRestart.addEventListener("click", () => {
		// this.checkSpeedUser()
		// this.buttonRestart.style.display = 'none';
		// this.startField.style.display = 'flex';
		// this.snake.startValues(this.checkSpeedUser())
		// this.apple.newApple()
		// this.draw()
		// this.score.resetScore()
		// this.gameCycle.initialSpeed()
		// })
	}

	subscribeToStart(){
		// document.addEventListener("click", (e) => {
		// 	if (e.target === this.startField) {
		// 		this.gameCycle.start()
		// 		this.startField.style.display = 'none'
		// 	}
		// })
		// document.addEventListener("keydown", () => {
		// 	if(!this.startField.style.display ||
		// 		this.startField.style.display === 'flex'){
		// 		this.gameCycle.start()
		// 		this.startField.style.display = 'none'
		// 	}
		// })
	}

	checkSpeedUser(){
		// if (this.speedConstant.checked === false){
		// 	return this.gameCycle.accelerateCycle
		// }
	}
}