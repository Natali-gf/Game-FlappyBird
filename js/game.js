import GameCycle from "./gameCycle.js";
import Loader from './resources.js';
import Config from "./config.js";
import { RESOURCE_TYPE } from "./resources.js";

export default class Game {
	constructor(){
		this.config = new Config()
		// document.createElement("canvas");
		// context = canvas.getContext('2d');
		this.canvas = document.getElementById(config.canvas.id)
		this.canvas.width = this.config.canvas.width
		this.canvas.height = this.config.canvas.height

		this.width = this.config.canvas.width
		this.height = this.config.canvas.height

		this. drawEngine =
		this.physicsEngine =
		this.spriteSheet =

		this.bird = new Bird({
			x: this.config.bird.x,
			y: this.config.bird.y,
			width: this.config.bird.width,
			height: this.config.bird.height,
			frames: this.config.bird.frames,
			spriteSheet,
			flapSpeed: this.config.bird.flapSpeed,
			physicsEngine: this.physicsEngine,
			drawEngine: this.drawEngine,
			game: this,
		})
		// this.config = new Config()
		// this.loader = new Loader()
		// this.spritesheet = this.config.spritesheet;
		// // this.buttonRestart = buttonRestart;
		// // this.startField = startField
		// this.canvas = canvas;
		// // this.speedConstant = speedConstant;

		// // this.snake = new Snake();
		// // this.apple = new Apple(this.snake.tail);
		// // this.score = new Score(currentScore, bestResult);
		// this.gameCycle = new GameCycle(this.update.bind(this), this.draw.bind(this));

		// this.subscribeToStart()
	}

	update(){
	}

	draw() {

	}

	async prepare(){
		// console.log(this.loader.imageLoad());
		// console.log(this.config.spritesheet.src);
		// console.log(RESOURCE_TYPE.IMAGE);
		// this.RESOURCE_TYPE = RESOURCE_TYPE
		this.spriteSheet = this.resourceLoader.load({
			type: this.RESOURSE_TYPE.IMAGE,
			src: this.config.spritesheet.src,
			width: this.config.spritesheet.width,
			height: this.config.spritesheet.height,}
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