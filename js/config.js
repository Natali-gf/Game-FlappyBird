export default class Config {
	_speedGame = 1;
	constructor(){
		this.clientWidth = document.documentElement.clientWidth;
		this.clientWidth < 360 ? this.clientWidth = 360 : null
		this._field = {
			width: this.clientWidth - 40,
			height: 590 - 40,
		};
	}

	_canvas = {
		idContainer: 'canvasContainer',
		className: 'canvas__field',
		idCanvas: 'canvas'
	};

	_score = { x: 174, y: 272, w: 226, h: 115,
		bronzeMedal: { x: 359, y: 157, w: 45, h: 45 },
		silverMedal: { x: 359, y: 112, w: 45, h: 45 },
		goldenMedal: { x: 311, y: 157, w: 45, h: 45 },
		platinumMedal: { x: 311, y: 112, w: 45, h: 45 }
	}

	_spritesheet = {
		width: 606,
		height: 428,
		src: 'accets/images/sprite.png'
	}

	_audio = {
		srcScoreUp: 'accets/audio/bell.wav',
		srcCrash: 'accets/audio/crash.wav',
		srcJump: 'accets/audio/jump.wav',
		srcKick: 'accets/audio/kick.wav',
		srcSqueak: 'accets/audio/squeak.wav',
	}

	_backgroundImage = {
		ground: { x: 280, y: 0, w: 210, h: 110 },
		fon: { x: 0, y: 0, w: 275, h: 228 }
	}

	_bird = {
		w: 33.6, h: 26,
		frame: {
			x: 276.3,
			y: 113,
		},
		gravity: .4,
	}

	_pipes = {
		w: 53, h: 400,
		pipeTop: { x: 554, y: 0 },
		pipeBottom: { x: 501, y: 0 },
		speed: 4.6,
	}

	_getReadyImage = { x: 0, y: 228, w: 173, h: 228 }
	_gameOverImage = { x: 193, y: 228, w: 188, h: 38 }
	_startButton = { x: 246, y: 400, w: 84, h: 28 }

	set pipes(speed){
		if(speed === 'default'){
			this._pipes.speed = 4.6
		} else {
			this._pipes.speed = this._pipes.speed + speed
		}
	}
	get speedGame(){
		return this._speedGame
	}
	get field(){
		return this._field
	}
	get canvas(){
		return this._canvas
	}
	get score(){
		return this._score
	}
	get spritesheet(){
		return this._spritesheet
	}
	get audio(){
		return this._audio
	}
	get backgroundImage(){
		return this._backgroundImage
	}
	get bird(){
		return this._bird
	}
	get pipes(){
		return this._pipes
	}
	get getReadyImage(){
		return this._getReadyImage
	}
	get gameOverImage(){
		return this._gameOverImage
	}
	get startButton(){
		return this._startButton
	}
}
