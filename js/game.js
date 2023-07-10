import Background from "./entities/background.js";
import Bird from "./entities/bird/bird.js";
import CanvasDrawing from "./drawing/canvasDrawing.js";
import GameCycle from "./gameCycle.js";
import Score from "./entities/score.js";
import Pipes from "./entities/pipes.js";
import Loader from "./loader.js";
import { GetReadyImage, GameOverImage, StartButton } from "./entities/additionalGameImages.js";
import { checkCollision } from "./helpers.js";

export default class Game {
	constructor(config, canvas){
		this._config = config;
		this._canvas = canvas;
		this._drawing = new CanvasDrawing(canvas);
		this._loader = new Loader();

		// this.gameCycle = new GameCycle(this.update.bind(this), this.draw.bind(this));
		// this.gameCycle.start()
		this._canvasDom = document.getElementById(config.canvas.idCanvas);
		this._playGame = false;
		this.#control();
	}

	update(){
		this._background.updateFon();
		this._background.updateGround();
		if(this._playGame){
			this._pipes.update(this._bird._bird, this._config.pipes.speed, this.sounds);
		}
		this._bird.update(this._playGame, this.sounds);
		if(this._score.score === this._levelUpScore){
			this._levelUpScore += 100
			this._config.pipes = 1;;
		};
	}

	draw() {
		this._background.drawFon();
		if (this._playGame){
			this._pipes.draw();
		} else {
			this._getReadyImage.draw();
		}
		this._background.drawGround();
		this._bird.draw();
		this._score.drawScore();
		if(!this._startMove){
			this._gameOverImage.draw();
			this._score.drawScoreWindow();
			this._startButton.draw();
			this._button = true;
		}
	}

	cycle(){
		if(this._startMove){
			requestAnimationFrame(this.cycle.bind(this));
			this._drawing.clear();
			this.update();
			this.draw();
		}
	}

	startGame(){
		this._startMove = true;
		this.resetGame();
		this.cycle();
	}

	resetGame(){
		this._config.pipes = 'default';
		this._levelUpScore = 100;
		this._playGame = false;

		this._background = new Background({
			config: this._config.backgroundImage,
			field: this._config.field,
			drawing: this._drawing,
			spriteSheet: this._spriteSheet,
			speed: this._config.speedGame,
		});
		this._score = new Score({
			config: this._config.score,
			drawing: this._drawing,
			field: this._config.field,
			spriteSheet: this._spriteSheet,
		});
		this._pipes = new Pipes({
			config: this._config.pipes,
			configBird: this._config.bird,
			groundHeight: this._config.backgroundImage.ground.h,
			field: this._config.field,
			drawing: this._drawing,
			spriteSheet: this._spriteSheet,
			score: this._score,
			gameOver: this.gameOver.bind(this),
		});
		this._bird = new Bird({
			config: this._config.bird,
			field: this._config.field,
			drawing: this._drawing,
			spriteSheet: this._spriteSheet,
			pipesInterval: this._pipes._pipesInterval,
			canvas: this._canvas,
			groundHeight: this._config.backgroundImage.ground.h,
			gameOver: this.gameOver.bind(this),
		});
		this._getReadyImage = new GetReadyImage({
			config: this._config.getReadyImage,
			field: this._config.field,
			drawing: this._drawing,
			spriteSheet: this._spriteSheet,
		});
		this._gameOverImage = new GameOverImage({
			config: this._config.gameOverImage,
			field: this._config.field,
			drawing: this._drawing,
			spriteSheet: this._spriteSheet,
		});
		this._startButton = new StartButton({
			config: this._config.startButton,
			field: this._config.field,
			drawing: this._drawing,
			spriteSheet: this._spriteSheet,
		});
	}

	gameOver(){
		this._startMove = false;
	}

	#control(){
		document.addEventListener("keydown", (e) => {
			if (e.code === 'Space') {
				this._bird.flappyUp()
				this._playGame = true
			}
		})
		document.addEventListener("mousedown", (e) => {
			if (e.target === this._canvasDom && !this._button) {
				this._bird.flappyUp();
				this.sounds.jump.currentTime = 0
				this.sounds.jump.play();
				this._playGame = true
			}
			if (!this._startMove && checkCollision(e.offsetX, e.offsetY, this._startButton.startButton)){
				this.startGame()
				setTimeout(this._button = false, 100)
			}
		})
	}

	async loading() {
		this._spriteSheet = await this._loader.loadSpriteSheet({
			src: this._config.spritesheet.src,
			width: this._config.spritesheet.width,
			height: this._config.spritesheet.height,
		})
		this.sounds = {
			scoreUp: await this._loader.loadAudio({
				src: this._config.audio.srcScoreUp}),
			crash: await this._loader.loadAudio({
				src: this._config.audio.srcCrash}),
			jump: await this._loader.loadAudio({
				src: this._config.audio.srcJump}),
			kick: await this._loader.loadAudio({
				src: this._config.audio.srcKick}),
			squeak: await this._loader.loadAudio({
				src: this._config.audio.srcSqueak})
		}
	}

	get config(){
		return this._config
	}
	get canvas(){
		return this._canvas
	}
	get drawing(){
		return this._drawing
	}
	get loader(){
		return this._loader
	}
	get startMove(){
		return this._startMove
	}
	get playGame(){
		return this._playGame
	}
	get button(){
		return this._button
	}
	get bird(){
		return this._bird
	}
	get pipes(){
		return this._pipes
	}
	get score(){
		return this._score
	}
	get background(){
		return this._background
	}
	get spriteSheet(){
		return this._spriteSheet
	}
	get levelUpScore(){
		return this._levelUpScore
	}
}