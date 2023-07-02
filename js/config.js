export default class Config {
	speedGame = 1;
	canvas = {
		idContainer: 'canvasContainer',
		className: 'canvas__field',
	};
	field = {
		width: 360,
		height: 550,
	};
	score = {
		idScore: 'score',
		idBestResult: 'bestResult',
	}

	spritesheet = {
		width: 606,
		height: 428,
		src: 'images/sprite.png'
	}

	backgroundImage = {
		ground: {
			x: 280,
			y: 0,
			w: 210,
			h: 110,
		},
		fon: {
			x: 0,
			y: 0,
			w: 275,
			h: 228,
		}
	}

	bird = {
		x: 100,
		y: 200,
		w: 34,
		h: 26,
		frame: {
			x: 276,
			y: 112,
		},

		// gravity: 10,
		// flapSpeed: 10,
	}

	pipes = {
		w: 53,
		h: 400,
		pipeTop: {
			x: 554,
			y: 0,
		},
		pipeBottom: {
			x: 501,
			y: 0,
		},
		speed: 5,
	}
}

// export const currentScore = document.getElementById('score');
// export const bestResult = document.getElementById('bestResult');


// export const startField = document.querySelector('.canvas__description');
// export const buttonRestart = document.querySelector('.canvas__button');

// export const speedSettings = document.querySelector('.settings__speed')
// export const speedMenu = document.querySelector('.speed__choice')
// export const speedConstant = document.getElementById('speedConstant');
// export const restartWithSettings = document.querySelector('.speed__button')
// export const canvasWidth = 500;
// export const canvasHeight = 500;

// const canvas = new Canvas(canvasContainer);
// const gameFlappyBird = new Game(canvas, currentScore, bestResult, startField, buttonRestart, speedConstant)