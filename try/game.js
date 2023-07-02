// import GameCycle from "./gameCycle.js";
// import Loader from './resources.js';
// import Config from "./config.js";
// import { RESOURCE_TYPE } from "./resources.js";

class Game {
	constructor(){
		this.config = new Config()
		// document.createElement("canvas");
		// context = canvas.getContext('2d');
		this.canvas = document.getElementById(this.config.canvas.id)
		this.canvas.width = this.config.canvas.width
		this.canvas.height = this.config.canvas.height

		this.width = this.config.canvas.width
		this.height = this.config.canvas.height

		this.drawEngine = new CanvasDrawEngine(this.canvas)
		this.physicsEngine = new PhysicsEngine({gravity: this.config.gravity})
		// this.spriteSheet =
		this.resourceLoader = new ResourceLoader()
		this.inputHandler = new MouseInputHandler({
			left: ({x,y}) => {
				this.bird.flap()
			}
		})
	}

	update(delta){
		this.bird.update(delta)
	}

	draw() {
		this.bird.draw()
	}

	async prepare(){
		// console.log(this.loader.imageLoad());
		// console.log(this.config.spritesheet.src);
		// console.log(RESOURCE_TYPE.IMAGE);
		// this.RESOURCE_TYPE = RESOURCE_TYPE
		this.spriteSheet = this.resourceLoader.load({
			type: RESOURCE_TYPE.IMAGE,
			src: this.config.spritesheet.src,
			width: this.config.spritesheet.width,
			height: this.config.spritesheet.height,}
		)
	}

	loop(){
		const now = Date.now()
		const delta = now - this.lastUpdate
		this.update(delta / 1000.0)
		if(this.playing){
			this.drawEngine.clear()
			this.draw()
			this.lastUpdate = now
			requestAnimationFrame(this.loop.bind(this))
		}

	}

	start(){
		this.playing = true
		this.inputHandler.subscribe()
		this.lastUpdate = Date.now()
		this.resetGame()
		this.loop()
	}

	resetGame(){
		this.score = 0
		this.bird = new Bird({
			x: this.config.bird.x,
			y: this.config.bird.y,
			width: this.config.bird.width,
			height: this.config.bird.height,
			frames: this.config.bird.frames,
			spriteSheet : this.spriteSheet,
			flapSpeed: this.config.bird.flapSpeed,
			physicsEngine: this.physicsEngine,
			drawEngine: this.drawEngine,
			game: this,
		})

		// if (this.score._score > this.score._bestScore ||
		// 	!this.score._bestScore) {
		// 	this.score.changeBestScore()
		// }
		// this.buttonRestart.style.display = 'flex';
		// this.gameCycle.stop()
		// this.restart()
	}

	gameOver(){
		this.playing = false
		alert('gameOver')
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