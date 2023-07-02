import Config from "./config.js";

export default class Canvas {
	canvas = document.createElement("canvas");
	context = this.canvas.getContext('2d');
	container;

	constructor() {
		this.config = new Config()
		this.canvas.width = this.config.canvas.width;
		this.canvas.height = this.config.canvas.height;
		this.create()
	}

	create(){
		this.canvasContainer = document.getElementById(this.config.canvas.id)
		this.canvasContainer.append(this.canvas)
		this.canvas.classList.add(this.config.canvas.className);


		const image = new Image();
		image.src = '../images/sprite.png';
		// this._context.drawImage(image, 0, 0, 500, 500)
		const render = () => {
			// объект, который хотим получить
			// из изображения-источника
			const bgSource = {
			  x: 276,
			  y: 0,
			  width: 225,
			  height: 110,
			};

			// объект, который хотим
			// отобразить на Canvas
			const bgPartOneResult = {
			  x: 0,
			  y: 590,
			  width: 225,
			  height: 110,
			};

			this.context.drawImage(
				image,

			  bgSource.x,
			  bgSource.y,
			  bgSource.width,
			  bgSource.height,

			  bgPartOneResult.x,
			  bgPartOneResult.y,
			  bgPartOneResult.width,
			  bgPartOneResult.height
			);
		  };
		  image.onload = render
	}

	get context(){
		return this.context
	}
}