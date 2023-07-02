import Config from "./config.js";

export default class Canvas {
	canvas = document.createElement("canvas");
	context = this.canvas.getContext('2d');
	container;

	constructor(canvas, field) {
		this.configCanvas = canvas;
		this.field = field;
		this.canvas.width = this.field.width;
		this.canvas.height = this.field.height;
		this.create()
	}

	create(){
		this.canvasContainer = document.getElementById(this.configCanvas.idContainer)
		this.canvasContainer.append(this.canvas)
		this.canvas.classList.add(this.configCanvas.className);
	}

	get context(){
		return this.context
	}
}