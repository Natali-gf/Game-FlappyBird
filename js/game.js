import Background from "./background.js";
import Bird from "./bird.js";
import CanvasDrawing from "./canvasDrawing.js";
import GameCycle from "./gameCycle.js";
import Score from "./score.js";
import Pipes from "./pipes.js";

export default class Game {
	constructor(config, canvas){
		this.config = config;
		this.drawing = new CanvasDrawing(canvas)
		this.background = new Background(this.config.backgroundImage, config.field, this.drawing, config.speedGame);
		this.bird = new Bird(this.config.bird, config.field, this.drawing);
		this.pipes = new Pipes(this.config.pipes, this.config.bird, this.config.backgroundImage.ground, config.field, this.drawing);
		this.score = new Score(this.config.score);
		// this.gameCycle = new GameCycle(this.update.bind(this), this.draw.bind(this));
		// this.gameCycle.start()

		this.width = this.config.field.width
		this.height = this.config.field.height
	}

	update(){
		this.background.update()
		this.bird.update()
		this.pipes.update()
		// this.bird.rules(this.vibes, this.score, this.field, this.resetGame.bind(this))
	}

	draw() {
		// this.drawing.clear()
		this.background.draw()
		this.bird.draw()
		this.pipes.draw()
	}

	async prepare(){
		// console.log(this.loader.imageLoad());
		// console.log(this.config.spritesheet.src);
		// console.log(RESOURCE_TYPE.IMAGE);
		// this.RESOURCE_TYPE = RESOURCE_TYPE
		// this.spriteSheet = this.resourceLoader.load({
		// 	type: RESOURCE_TYPE.IMAGE,
		// 	src: this.config.spritesheet.src,
		// 	width: this.config.spritesheet.width,
		// 	height: this.config.spritesheet.height,}
		// )
	}

	cycle(){
		this.drawing.clear()
		this.update()
		this.draw()
		requestAnimationFrame(this.cycle.bind(this))
	}

	startGame(){
		// this.resetGame()
		this.cycle()
	}

	resetGame(){
	}

	gameOver(){
		console.log('gameOver');
	}
}