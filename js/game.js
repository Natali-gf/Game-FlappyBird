import Background from "./background.js";
import Bird from "./bird.js";
import CanvasDrawing from "./canvasDrawing.js";
import GameCycle from "./gameCycle.js";
import Score from "./score.js";
import Pipes from "./pipes.js";
import Loader from "./loader.js";
import BirdFalling from "./birdFalling.js";
import { GetReadyImage, GameOverImage, StartButton } from "./additionalGameImages.js";
import { checkCollision } from "./helpers.js";

export default class Game {
	constructor(config, canvas){
		this.config = config;
		this.canvas = canvas;
		this.drawing = new CanvasDrawing(canvas);
		this.loader = new Loader()

		// this.gameCycle = new GameCycle(this.update.bind(this), this.draw.bind(this));
		// this.gameCycle.start()
		this.canvasDom = document.getElementById(config.canvas.idCanvas);
		this.startMove;
		this.playGame = false;
		this.control()
	}

	update(){
		this.background.updateFon()
		this.background.updateGround()
		if(this.playGame){
			this.pipes.update(this.bird.bird)
		}
		this.bird.update(this.playGame)
	}

	draw() {
		this.background.drawFon()
		if(this.playGame){
			this.pipes.draw()
		}else{
			this.getReadyImage.draw()
		}
		this.background.drawGround()
		this.bird.draw()
		this.score.drawScore()
		if(!this.startMove){
			this.gameOverImage.draw()
			this.score.drawScoreWindow()
			this.startButton.draw()
			this.button = true;
		}
	}

	cycle(){
		if(this.startMove){
			requestAnimationFrame(this.cycle.bind(this))
			// if ( ++this.step < this.config.maxStep ){
			// 	return;
			// }
			this.step = 0
			this.drawing.clear()
			this.update()
			this.draw()
		}
	}

	startGame(){
		this.startMove = true;
		this.resetGame()
		this.cycle()
	}

	resetGame(){
		this.playGame = false;
		this.background = new Background({
			config: this.config.backgroundImage,
			field: this.config.field,
			drawing: this.drawing,
			spriteSheet: this.spriteSheet,
			speed: this.config.speedGame,
		});
		this.score = new Score({
			config: this.config.score,
			drawing: this.drawing,
			field: this.config.field,
			spriteSheet: this.spriteSheet
		});
		this.pipes = new Pipes({
			config: this.config.pipes,
			configBird: this.config.bird,
			groundHeight: this.config.backgroundImage.ground.h,
			field: this.config.field,
			drawing: this.drawing,
			spriteSheet: this.spriteSheet,
			score: this.score,
			gameOver: this.gameOver.bind(this),
		});
		this.bird = new Bird({
			config: this.config.bird,
			field: this.config.field,
			drawing: this.drawing,
			spriteSheet: this.spriteSheet,
			pipesInterval: this.pipes.pipesInterval,
			canvas: this.canvas,
			groundHeight: this.config.backgroundImage.ground.h,
			gameOver: this.gameOver.bind(this),
			startMove: this.startMove
		});
		this.getReadyImage = new GetReadyImage({
			config: this.config.getReadyImage,
			field: this.config.field,
			drawing: this.drawing,
			spriteSheet: this.spriteSheet,
		})
		this.gameOverImage = new GameOverImage({
			config: this.config.gameOverImage,
			field: this.config.field,
			drawing: this.drawing,
			spriteSheet: this.spriteSheet,
		})
		this.startButton = new StartButton({
			config: this.config.startButton,
			field: this.config.field,
			drawing: this.drawing,
			spriteSheet: this.spriteSheet,
		})
		// this.birdFalling = new BirdFalling(this.bird)
	}

	gameOver(){
		this.startMove = false;
	}

	control(){
		document.addEventListener("keydown", (e) => {
			if (e.code === 'Space') {
				this.bird.flappyUp()
				this.playGame = true
			}
		})
		document.addEventListener("mousedown", (e) => {
			if (e.target === this.canvasDom && !this.button) {
				this.bird.flappyUp()
				this.playGame = true
			}
		})
		document.addEventListener("mousedown", (e) => {
			if (!this.startMove && checkCollision(e.offsetX, e.offsetY, this.startButton.startButton)){
				this.startGame()
				setTimeout(this.button = false, 100)
			}
		})
	}

	async loading() {
		this.spriteSheet = await this.loader.loadSpriteSheet({
			src: this.config.spritesheet.src,
			width: this.config.spritesheet.width,
			height: this.config.spritesheet.height,
		})
	}
}