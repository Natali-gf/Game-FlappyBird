import Config from "./config.js";

export default class Canvas {
	_canvas = document.createElement("canvas");
	_context = this._canvas.getContext('2d');

	constructor(canvas, field) {
		this._configCanvas = canvas;
		this._canvas.width = field.width;
		this._canvas.height = field.height;
		this._canvas.id = canvas.idCanvas
		this.#create()
	}

	#create(){
		this.canvasContainer = document.getElementById(this._configCanvas.idContainer)
		this.canvasContainer.append(this._canvas)
		this._canvas.classList.add(this._configCanvas.className);
	}

	get canvas(){
		return this._canvas
	}
	get context(){
		return this._context
	}
	get configCanvas(){
		return this._configCanvas
	}
}