export default class Config {
	canvas = {
		id: 'canvas',
		className: 'canvas__field',
		width: 360,
		height: 650,
	};
	spritesheet = {
		width: 606,
		height: 428,
		src: '../images/sprite.png'
	}
	backgroundImage = {
		ground: [{
			x: 276,
			y: 0,
			w: 225,
			h: 110,
		}],
		fon: [{
			x: 276,
			y: 0,
			w: 225,
			h: 110,
		}]
	}
	bird = {
		x: 50,
		y: 300,
		w:34,
		h:26,

		flapSpeed: 300,

		frames: [
		{
			x:276,
			y:112,
			w:34,
			h:26,
		},
		{
			x:276,
			y:139,
			w:34,
			h:26,
		},
		{
			x:276,
			y:164,
			w:34,
			h:26,
		},
		{
			x:276,
			y:139,
			w:34,
			h:26,
		}
	]
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